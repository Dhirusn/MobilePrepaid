import dotenv from 'dotenv';
dotenv.config(); // 👈 Make sure this comes FIRST

import Stripe from 'stripe'; // ✅ Add this line at the top
import axios from 'axios';
import https from 'https';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
const httpsAgent = new https.Agent({ rejectUnauthorized: false });

let accessToken = null;

export const getAccessToken = async () => {
  if (accessToken) return accessToken;

  const response = await axios.post('https://auth.reloadly.com/oauth/token', {
    client_id: process.env.RELOADLY_CLIENT_ID,
    client_secret: process.env.RELOADLY_CLIENT_SECRET,
    grant_type: 'client_credentials',
    audience: 'https://topups-sandbox.reloadly.com'
  });

  accessToken = response.data.access_token;

  return accessToken;
}

export const getCountries = async () => {
  console.log("working 1")
  const token = await getAccessToken();
  const res = await axios.get('https://topups-sandbox.reloadly.com/countries', {
    headers: { Authorization: `Bearer ${token}` }
  });
  return res.data;
}

export const getOperators = async (countryIso) => {
  const token = await getAccessToken();
  const res = await axios.get(`https://topups-sandbox.reloadly.com/operators/countries/${countryIso}`, {
    headers: { Authorization: `Bearer ${token}` }
  });
  return res.data;
}

export const sendTopup = async ({ operatorId, amount, recipientPhone }) => {
  const token = await getAccessToken();
  const res = await axios.post(`https://topups-sandbox.reloadly.com/topups`, {
    operatorId,
    amount,
    useLocalAmount: true,
    customIdentifier: `topup-${Date.now()}`,
    recipientPhone: {
      countryCode: recipientPhone.countryCode,
      number: recipientPhone.number
    }
  }, {
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: 'application/com.reloadly.topups-v1+json',
      'Content-Type': 'application/json'
    }
  });
  return res.data;
}

// Helper: Get operator ID from Reloadly
async function resolveOperatorId(countryCode, operatorName, token) {
  console.log("resolveOperatorId1")

  const { data } = await axios.get(
    `https://topups-sandbox.reloadly.com/operators/countries/in`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/com.reloadly.topups-v1+json',
      },
    }
  );
  console.log("resolveOperatorId")
  const match = data.find(op =>
    op.name.toLowerCase().includes(operatorName.toLowerCase())
  );
  console.log(match?.id);
  return match?.id || null;
}

// 🔄 Combined Stripe + Reloadly processing
export async function processRecharge({
  paymentMethodId,
  country,
  operator,
  amount,
  phoneNumber,
  currency
}) {
  try {
    // ✅ Validate input
    if (
      !paymentMethodId ||
  
      !country ||
      !operator ||
      !amount ||
      !phoneNumber ||
      !currency
    ) {
      throw new Error('Missing or invalid required fields');
    }

    // 1. ✅ Create and confirm Stripe PaymentIntent
    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(parseFloat(amount) * 100), // Convert to cents
      currency: currency.toLowerCase(),
      payment_method: paymentMethodId,
      confirm: true,
      confirmation_method: 'automatic',
      automatic_payment_methods: {
        enabled: true,
        allow_redirects: 'never'
      }
    });

    // 2. 🔑 Get Reloadly access token
    const token = await getAccessToken();

    // 3. 🔍 Resolve Reloadly operator
    const operatorId = await resolveOperatorId(country, operator, token);
    if (!operatorId) {
      throw new Error(`Could not find operator "${operator}" for "${country}"`);
    }

    // 4. 📲 Trigger top-up via Reloadly
    const topup = await axios.post(
      'https://topups-sandbox.reloadly.com/topups',
      {
        operatorId,
        amount: parseFloat(amount),
        useLocalAmount: true,
        customIdentifier: `recharge_${Date.now()}`,
        recipientPhone: {
          countryCode: country,
          number: phoneNumber
        }
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: 'application/com.reloadly.topups-v1+json',
          'Content-Type': 'application/json'
        }
      }
    );

    return {
      success: true,
      message: 'Recharge successful',
      transactionId: topup.data.transactionId,
      stripePaymentId: paymentIntent.id
    };
  } catch (error) {
    console.error('Recharge Error:', error?.message || error);
    return {
      success: false,
      message: 'Recharge failed',
      error: error?.message || 'Unknown error occurred'
    };
  }
}
