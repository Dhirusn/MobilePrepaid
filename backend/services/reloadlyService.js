const axios = require('axios');

let accessToken = null;

async function getAccessToken() {
  if (accessToken) return accessToken;

  const response = await axios.post('https://auth.reloadly.com/oauth/token', {
    client_id: process.env.RELOADLY_CLIENT_ID,
    client_secret: process.env.RELOADLY_CLIENT_SECRET,
    grant_type: 'client_credentials',
    audience: 'https://topups.reloadly.com'
  });

  accessToken = response.data.access_token;
  return accessToken;
}

async function getCountries() {
  const token = await getAccessToken();
  const res = await axios.get('https://topups.reloadly.com/countries', {
    headers: { Authorization: `Bearer ${token}` }
  });
  return res.data;
}

async function getOperators(countryIso) {
  const token = await getAccessToken();
  const res = await axios.get(`https://topups.reloadly.com/operators/countries/${countryIso}`, {
    headers: { Authorization: `Bearer ${token}` }
  });
  return res.data;
}

async function sendTopup({ operatorId, amount, recipientPhone }) {
  const token = await getAccessToken();
  const res = await axios.post(`https://topups.reloadly.com/topups`, {
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

module.exports = {
  getCountries,
  getOperators,
  sendTopup
};
