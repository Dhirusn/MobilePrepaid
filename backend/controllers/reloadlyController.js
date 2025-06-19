import {
  getCountries as fetchCountries,
  getOperators,
  processRecharge,
  sendTopup
} from '../services/reloadlyService.js';
import Stripe from 'stripe'; // ✅ Add this line at the top


const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);


export const getCountries = async (req, res) => {
  try {
    const countries = await fetchCountries();
    res.status(200).json(countries);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch countries', error: err.message });
  }
};

export const getOperatorsByCountry = async (req, res) => {
  try {
    const operators = await getOperators(req.params.countryIso);
    res.status(200).json(operators);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch operators', error: err.message });
  }
};

export const sendTopupRequest = async (req, res) => {
  try {
    const { operatorId, amount, recipientPhone } = req.body;
    const response = await sendTopup({ operatorId, amount, recipientPhone });
    res.status(200).json(response);
  } catch (err) {
    res.status(500).json({ message: 'Top-up failed', error: err.message });
  }
};

export const rechargeMobile = async (req, res) => {
  try {
    const {
      paymentMethodId,
      country,
      operator,
      amount,
      phoneNumber,
      currency // 👈 Accept currency from request body
    } = req.body;

    // Basic input validation
    if (!paymentMethodId || !country || !operator || !amount || !phoneNumber || !currency) {
      return res.status(400).json({
        success: false,
        message: "Missing required fields"
      });
    }

    const result = await processRecharge({
      paymentMethodId,
      country,
      operator,
      amount,
      phoneNumber,
      currency // 👈 Pass currency to processing function
    });

    res.status(200).json(result);
  } catch (error) {
    console.error("Recharge Error:", error.message || error);
    res.status(500).json({
      success: false,
      message: "Recharge failed",
      error: error.message || "Internal server error",
    });
  }
};

export const createStripeIntent = async (req, res) => {
  try {
    const { amount, curr } = req.body; // amount in cents

    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: curr,
      payment_method_types: ["card"],
    });

    res.send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (err) {
    res.status(400).send({ error: err.message });
  }
}

