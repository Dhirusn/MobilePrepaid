import {
  getCountries as fetchCountries,
  getOperators,
  sendTopup
} from '../services/reloadlyService.js';

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
  const { operatorId, amount, phone } = req.body;

  if (!operatorId || !amount || !phone) {
    return res.status(400).json({ success: false, message: "Missing required fields" });
  }

  try {
    // Simulated Stripe test payment
    const paymentMethod = await stripe.paymentMethods.create({
      type: "card",
      card: {
        number: "4242424242424242",
        exp_month: 12,
        exp_year: 2026,
        cvc: "123",
      },
    });

    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(amount * 100),
      currency: "usd",
      payment_method: paymentMethod.id,
      confirm: true,
    });

    if (paymentIntent.status !== "succeeded") {
      return res.status(400).json({ success: false, message: "Payment failed" });
    }

    // Get Reloadly token
    const tokenRes = await axios.post("https://auth.reloadly.com/oauth/token", {
      client_id: process.env.RELOADLY_CLIENT_ID,
      client_secret: process.env.RELOADLY_CLIENT_SECRET,
      grant_type: "client_credentials",
      audience: "https://topups-sandbox.reloadly.com"
    }, {
      headers: { "Content-Type": "application/json" }
    });

    const accessToken = tokenRes.data.access_token;

    // Perform top-up
    const topUpRes = await axios.post("https://topups-sandbox.reloadly.com/topups", {
      operatorId,
      amount,
      useLocalAmount: false,
      customIdentifier: `txn-${Date.now()}`,
      recipientPhone: {
        countryCode: phone.startsWith('+91') ? 'IN' : 'US',
        number: phone.replace('+', ''),
      }
    }, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
        Accept: "application/com.reloadly.topups-v1+json"
      }
    });

    res.status(200).json({
      success: true,
      message: "Recharge successful",
      data: topUpRes.data
    });

  } catch (err) {
    console.error("Error during recharge:", err.response?.data || err.message);
    res.status(500).json({
      success: false,
      message: "Server error",
      error: err.response?.data || err.message
    });
  }
}
