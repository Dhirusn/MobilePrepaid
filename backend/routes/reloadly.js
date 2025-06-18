import express from 'express';
import {
  getCountries,
  getOperatorsByCountry,
  sendTopupRequest,
  rechargeMobile
} from '../controllers/reloadlyController.js';


const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Reloadly
 *   description: Reloadly top-up and operator integration
 */

/**
 * @swagger
 * /reloadly/countries:
 *   get:
 *     summary: Get all supported countries
 *     tags: [Reloadly]
 *     responses:
 *       200:
 *         description: A list of countries supported by Reloadly
 *       500:
 *         description: Server error
 */
router.get('/countries', getCountries);

/**
 * @swagger
 * /reloadly/operators/{countryIso}:
 *   get:
 *     summary: Get all mobile operators for a specific country
 *     tags: [Reloadly]
 *     parameters:
 *       - in: path
 *         name: countryIso
 *         required: true
 *         schema:
 *           type: string
 *         description: ISO country code (e.g., IN for India)
 *     responses:
 *       200:
 *         description: A list of operators
 *       404:
 *         description: Country not found or no operators
 */
router.get('/operators/:countryIso', getOperatorsByCountry);

/**
 * @swagger
 * /reloadly/topup:
 *   post:
 *     summary: Send a mobile top-up request
 *     tags: [Reloadly]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - operatorId
 *               - amount
 *               - phone
 *             properties:
 *               operatorId:
 *                 type: number
 *                 example: 1234
 *               amount:
 *                 type: number
 *                 example: 10
 *               phone:
 *                 type: string
 *                 example: "+919999999999"
 *     responses:
 *       200:
 *         description: Top-up successful
 *       400:
 *         description: Bad request or validation error
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Server error
 */
router.post('/topup', sendTopupRequest);

/**
 * @swagger
 * /reloadly/recharge:
 *   post:
 *     summary: Recharge mobile using Stripe and Reloadly
 *     tags: [Reloadly]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - paymentMethodId
 *               - country
 *               - operator
 *               - amount
 *               - phoneNumber
 *               - currency    # ✅ Added as required
 *             properties:
 *               paymentMethodId:
 *                 type: string
 *                 example: pm_test_abc123
 *               country:
 *                 type: string
 *                 description: ISO country code (e.g., IN, US)
 *                 example: IN
 *               operator:
 *                 type: string
 *                 description: Mobile operator name (e.g., Airtel, Jio)
 *                 example: Airtel
 *               amount:
 *                 type: number
 *                 example: 50
 *               phoneNumber:
 *                 type: string
 *                 example: "9876543210"
 *               currency:
 *                 type: string
 *                 description: 3-letter ISO currency code (e.g., USD, INR, EUR)
 *                 example: INR
 *     responses:
 *       200:
 *         description: Recharge successful
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: Recharge successful
 *                 transactionId:
 *                   type: number
 *                   example: 123456789
 *                 stripePaymentId:
 *                   type: string
 *                   example: pi_1ABCDefghijkLmnoP
 *       500:
 *         description: Server error or validation failure
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 message:
 *                   type: string
 *                   example: Recharge failed
 *                 error:
 *                   type: string
 *                   example: Missing required fields
 */
router.post('/recharge', rechargeMobile);



export default router;
