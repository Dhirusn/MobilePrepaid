import dotenv from 'dotenv';
import Stripe from 'stripe';
dotenv.config();

if (!process.env.STRIPE_SECRET_KEY) {
  throw new Error('STRIPE_SECRET_KEY is not set');
}
if (!process.env.CLIENT_REDIRECT_URL) {
  throw new Error('CLIENT_REDIRECT_URL is not set');
}

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2024-04-10',
});

export const createStripeSession = async (amount, paymentId, userEmail) => {
  if (!amount || amount <= 0 || isNaN(amount)) throw new Error('Invalid amount');
  if (!paymentId) throw new Error('Payment ID is required');

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [{
      price_data: {
        currency: 'usd',
        product_data: {
          name: 'Mobile Top-Up',
        },
        unit_amount: amount * 100,
      },
      quantity: 1,
    }],
    mode: 'payment',
    success_url: `${process.env.CLIENT_REDIRECT_URL}/topup/success?paymentId=${paymentId}`,
    cancel_url: `${process.env.CLIENT_REDIRECT_URL}/topup/cancel`,
    metadata: {
      paymentId,
    },
    customer_email: userEmail || undefined,
  });

  return { url: session.url };
};
