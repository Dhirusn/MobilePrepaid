import axios from 'axios';
import https from 'https';

const httpsAgent = new https.Agent({ rejectUnauthorized: false });

let accessToken = null;

export const getAccessToken = async () => {
  if (accessToken) return accessToken;

  const response = await axios.post('https://auth.reloadly.com/oauth/token', {
    client_id: process.env.RELOADLY_CLIENT_ID,
    client_secret: process.env.RELOADLY_CLIENT_SECRET,
    grant_type: 'client_credentials',
    audience: 'https://topups-sandbox.reloadly.com'
  });

  accessToken = response.data.access_token;
  return accessToken;
}

export const getCountries = async () => {
  console.log("working 1")
  const token = await getAccessToken();
  const res = await axios.get('https://topups-sandbox.reloadly.com/countries', {
    headers: { Authorization: `Bearer ${token}` },
    httpsAgent
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
