import Topup from '../models/Topup.js';
import Payment from '../models/Payment.js';
import { createStripeSession } from '../utils/stripe.js';
import { createCoinbaseCharge } from '../utils/coinbase.js';
import { sendReloadlyTopup } from '../utils/reloadly.js';

export const initiateTopup = async (req, res) => {
  const { operator, country, number, amount } = req.body;
  const topup = await Topup.create({ userId: req.user._id, operator, country, number, amount });
  res.json({ message: 'Top-up initiated', topup });
};

export const getHistory = async (req, res) => {
  const history = await Topup.find({ userId: req.user._id }).sort({ createdAt: -1 });
  res.json(history);
};

export const createTopupSession = async (req, res) => {
  const { phoneNumber, countryCode, operatorId, amount, provider } = req.body;
  const userId = req.user._id;

  const payment = await Payment.create({
    user: userId,
    amount,
    provider,
    status: 'pending',
  });

  const topup = await Topup.create({
    user: userId,
    phoneNumber,
    countryCode,
    operatorId,
    amount,
    paymentId: payment._id,
  });

  let paymentSession;

  if (provider === 'stripe') {
    paymentSession = await createStripeSession(amount, payment._id);
  } else if (provider === 'coinbase') {
    paymentSession = await createCoinbaseCharge(amount, payment._id);
  } else {
    return res.status(400).json({ message: 'Unsupported payment provider' });
  }

  res.json({ url: paymentSession.url });
};

export const confirmTopup = async (req, res) => {
  const { paymentId, providerPaymentId } = req.body;

  const payment = await Payment.findById(paymentId);
  if (!payment) return res.status(404).json({ message: 'Payment not found' });

  payment.status = 'success';
  payment.providerPaymentId = providerPaymentId;
  await payment.save();

  const topup = await Topup.findOne({ paymentId });
  if (!topup) return res.status(404).json({ message: 'Topup not found' });

  const reloadlyResponse = await sendReloadlyTopup(topup);

  topup.status = reloadlyResponse.success ? 'success' : 'failed';
  await topup.save();

  res.json({ message: 'Topup complete', reloadlyResponse });
};