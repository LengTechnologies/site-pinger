const fetch = require('node-fetch');

const URL = 'https://leng-tech.com'

(async () => {
  try {
    const res = await fetch(URL);
    console.log(`[${new Date().toISOString()}] Pinged ${URL}: ${res.status}`);
  } catch (err) {
    console.error(`[${new Date().toISOString()}] Failed to ping ${URL}`, err);
  }
})();
