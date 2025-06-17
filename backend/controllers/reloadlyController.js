import {
  getCountries as fetchCountries,
  getOperators,
  sendTopup,
  processRecharge
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
 try {
    const {
      paymentMethodId,
      country,
      operator,
      amount,
      phoneNumber
    } = req.body;

    const result = await processRecharge({
      paymentMethodId,
      country,
      operator,
      amount,
      phoneNumber
    });

    res.status(200).json(result);
  } catch (error) {
    console.error("Recharge Error:", error.message);
    res.status(500).json({
      success: false,
      message: "Recharge failed",
      error: error.message,
    });
  }
}
