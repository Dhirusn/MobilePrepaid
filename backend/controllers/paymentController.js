import { createStripeIntent, createCoinbaseSession } from '../services/paymentService.js';

export const createStripePayment = async (req, res) => {
  try {
    const { amount, currency } = req.body; // Amount in cents (e.g., 1000 = $10)
    const intent = await createStripeIntent(amount, currency);
    res.status(200).json({ clientSecret: intent.client_secret });
  } catch (error) {
    res.status(500).json({ message: 'Stripe payment failed', error: error.message });
  }
};

export const createCoinbaseCharge = async (req, res) => {
  try {
    const { amount, currency } = req.body;
    const charge = await createCoinbaseSession(amount, currency);
    res.status(200).json({ hostedUrl: charge.hosted_url });
  } catch (error) {
    res.status(500).json({ message: 'Coinbase payment failed', error: error.message });
  }
};
