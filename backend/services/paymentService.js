import Stripe from 'stripe';
import axios from 'axios';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY); // Add in .env
const coinbaseApiKey = process.env.COINBASE_API_KEY;
const coinbaseBaseUrl = 'https://api.commerce.coinbase.com/charges';

export const createStripeIntent = async (amount, currency = 'usd') => {
  return await stripe.paymentIntents.create({
    amount,
    currency,
    payment_method_types: ['card'],
  });
};

export const createCoinbaseSession = async (amount, currency = 'USD') => {
  const response = await axios.post(
    coinbaseBaseUrl,
    {
      name: 'Mobile Top-up',
      description: 'Crypto payment for mobile recharge',
      local_price: { amount, currency },
      pricing_type: 'fixed_price',
    },
    {
      headers: {
        'X-CC-Api-Key': coinbaseApiKey,
        'X-CC-Version': '2018-03-22',
      },
    }
  );
  return response.data.data;
};
