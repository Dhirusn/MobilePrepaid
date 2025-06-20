import Stripe from 'stripe'; // ✅ Add this line at the top
import axios from 'axios';
import https from 'https';
import express from 'express';

import dotenv from 'dotenv';

dotenv.config();

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
const httpsAgent = new https.Agent({ rejectUnauthorized: false });


const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: webhooks
 *   description: API for user-to-user webhooks
 */

/**
 * @swagger
 * /webhooks/stripe:
 *   post:
 *     summary: Handle Stripe webhook for successful payments and perform mobile recharge
 *     tags:
 *       - webhooks
 *     description: >
 *       This endpoint is called by Stripe when a payment is successfully completed via Checkout.
 *       It verifies the Stripe webhook signature and triggers a mobile top-up using Reloadly.
 *       ⚠️ This endpoint expects the raw body for signature verification (do not use express.json()).
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             additionalProperties: true
 *     responses:
 *       200:
 *         description: Webhook verified and recharge triggered (or completed)
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 received:
 *                   type: boolean
 *                   example: true
 *       400:
 *         description: Invalid webhook signature or payload
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: Webhook signature verification failed
 *       500:
 *         description: Recharge logic failed after successful payment
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: Recharge failed due to internal error
 */

router.post('/stripe', express.raw({ type: 'application/json' }), async (req, res) => {
    const sig = req.headers['stripe-signature'];
    console.log("stripe-signature", sig)
    let event;
    try {
        console.log("STRIPE_WEBHOOK_SECRET", process.env.STRIPE_WEBHOOK_SECRET)
        event = stripe.webhooks.constructEvent(
            req.body,
            sig,
            process.env.STRIPE_WEBHOOK_SECRET
        );
    } catch (err) {
        console.error('❌ Webhook signature verification failed.', err.message);
        return res.status(400).send(`Webhook Error: ${err.message}`);
    }

    if (event.type === 'checkout.session.completed') {
        const session = event.data.object;
        const mobileNumber = session.metadata.mobileNumber;
        const amount = session.metadata.amount;
        const currency = session.metadata.currency;
        // Get country code safely (with optional chaining in case customer_details is null)
        const countryCode = session.customer_details?.address?.country;

        try {
            await rechargeMobile(mobileNumber, amount, currency, countryCode);
            console.log('✅ Recharge successful for:', mobileNumber);
        } catch (err) {
            console.error('❌ Recharge failed:', err);
        }
    }

    res.status(200).end();
});


let reloadlyToken = null; // Store access token globally (simple caching)
let tokenExpiry = null;

// Function to get a valid access token from Reloadly
async function getReloadlyAccessToken() {
    if (reloadlyToken && tokenExpiry > Date.now()) {
        return reloadlyToken;
    }

    const response = await axios.post('https://auth.reloadly.com/oauth/token', {
        client_id: process.env.RELOADLY_CLIENT_ID,
        client_secret: process.env.RELOADLY_CLIENT_SECRET,
        grant_type: 'client_credentials',
        audience: 'https://topups-sandbox.reloadly.com',
    }, {
        headers: { 'Content-Type': 'application/json' }
    });

    reloadlyToken = response.data.access_token;
    tokenExpiry = Date.now() + (response.data.expires_in - 60) * 1000; // Cache for duration minus 1 min

    return reloadlyToken;
}

// ✅ Actual mobile recharge function using Reloadly API
export async function rechargeMobile(mobileNumber, amount, currency,countryCode) {
    try {
        const accessToken = await getReloadlyAccessToken();

        const headers = {
            Authorization: `Bearer ${accessToken}`,
            Accept: 'application/json',
            'Content-Type': 'application/json'
        };
        const operatorId = await getOperatorId(mobileNumber, countryCode); // ✅ fetch dynamically
        console.log(operatorId);
        const payload = {
            operatorId: operatorId,  // You need to get this based on country & number
            amount: parseFloat(amount),
            currency: currency,
            useLocalAmount: true,
            customIdentifier: `TopUp-${Date.now()}`,
            recipientPhone: {
                countryCode: 'IN',
                number: mobileNumber.replace('+91', '') // Remove +91 if included
            }
        };

        const response = await axios.post('https://topups-sandbox.reloadly.com/topups', payload, { headers });

        console.log('✅ Recharge successful:', response.data);
        return response.data;
    } catch (error) {
        console.error('❌ Error during mobile recharge:', error.response?.data || error.message);
        throw new Error('Recharge failed');
    }
}

async function getOperatorId(mobileNumber, countryCode) {
    const accessToken = await getReloadlyAccessToken();

    const response = await axios.get(`https://topups-sandbox.reloadly.com/operators/by-phone/${mobileNumber}/countries/${countryCode}`, {
        headers: {
            Authorization: `Bearer ${accessToken}`,
            Accept: 'application/json'
        }
    });

    return response.data.id; // This is the operator ID
}

export default router;