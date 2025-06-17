import axios from 'axios';
import https from 'https';

const httpsAgent = new https.Agent({ rejectUnauthorized: false });
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

let accessToken = null;

export const getAccessToken = async () => {
  if (accessToken) return accessToken;
  console.log('working21');

  const response = await axios.post('https://auth.reloadly.com/oauth/token', {
    client_id: process.env.RELOADLY_CLIENT_ID,
    client_secret: process.env.RELOADLY_CLIENT_SECRET,
    grant_type: 'client_credentials',
    audience: 'https://topups-sandbox.reloadly.com'
  });
  console.log('working2');

  accessToken = response.data.access_token;
  console.log('working21');

  return accessToken;
}

export const getCountries = async () => {
  console.log("working 1")
  const token = await getAccessToken();
  const res = await axios.get('https://topups.reloadly.com/countries', {
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
  const { data } = await axios.get(
    `https://topups.reloadly.com/operators/countries/${countryCode}/operators`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/com.reloadly.topups-v1+json',
      },
    }
  );

  const match = data.find(op =>
    op.name.toLowerCase().includes(operatorName.toLowerCase())
  );

  return match?.id || null;
}

// 🔄 Combined Stripe + Reloadly processing
export async function processRecharge({ paymentMethodId, country, operator, amount, phoneNumber }) {
  if (!paymentMethodId || !country || !operator || !amount || !phoneNumber) {
    throw new Error("Missing required fields");
  }

  // 1. Confirm Stripe Payment
  const payment = await stripe.paymentIntents.create({
    amount: parseInt(amount) * 100, // Stripe expects cents
    currency: 'usd',
    payment_method: paymentMethodId,
    confirm: true,
  });

  // 2. Get Reloadly Token
  const token = await getAccessToken();

  // 3. Resolve operator
  const operatorId = await resolveOperatorId(country, operator, token);
  if (!operatorId) throw new Error(`Could not find operator "${operator}" for "${country}"`);

  // 4. Make the top-up request
  const topup = await axios.post(
    'https://topups.reloadly.com/topups',
    {
      operatorId,
      amount: parseFloat(amount),
      useLocalAmount: true,
      customIdentifier: `recharge_${Date.now()}`,
      recipientPhone: {
        countryCode: country,
        number: phoneNumber,
      },
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/com.reloadly.topups-v1+json',
        'Content-Type': 'application/json',
      },
    }
  );

  return {
    success: true,
    message: 'Recharge successful',
    transactionId: topup.data.transactionId,
    stripePaymentId: payment.id,
  };
}