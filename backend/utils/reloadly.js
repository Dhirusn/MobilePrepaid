import axios from 'axios';

export const sendReloadlyTopup = async (topup) => {
  const accessToken = await getReloadlyToken();

  const response = await axios.post('https://topups.reloadly.com/topups', {
    operatorId: topup.operatorId,
    amount: topup.amount,
    useLocalAmount: true,
    customIdentifier: `topup-${topup._id}`,
    recipientPhone: {
      countryCode: topup.countryCode,
      number: topup.phoneNumber,
    },
  }, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
  });

  return { success: response.status === 200, data: response.data };
};

const getReloadlyToken = async () => {
  const res = await axios.post('https://auth.reloadly.com/oauth/token', {
    client_id: process.env.RELOADLY_CLIENT_ID,
    client_secret: process.env.RELOADLY_CLIENT_SECRET,
    grant_type: 'client_credentials',
    audience: 'https://topups.reloadly.com',
  });
  return res.data.access_token;
};
