import axios from 'axios';

export const createCoinbaseCharge = async (amount, paymentId) => {
  const response = await axios.post('https://api.commerce.coinbase.com/charges', {
    name: 'Mobile Top-Up',
    local_price: {
      amount: amount,
      currency: 'USD',
    },
    pricing_type: 'fixed_price',
    metadata: { paymentId },
    redirect_url: `${process.env.STRIPE_CLIENT_URL}/topup/success?paymentId=${paymentId}`,
    cancel_url: `${process.env.STRIPE_CLIENT_URL}/topup/cancel`,
  }, {
    headers: {
      'X-CC-Api-Key': process.env.COINBASE_API_KEY,
      'X-CC-Version': '2018-03-22',
    },
  });

  return { url: response.data.data.hosted_url };
};
