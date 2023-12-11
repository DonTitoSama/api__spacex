// provider/spacexProvider.js
const axios = require('axios');

const spacexAPI = axios.create({
  baseURL: 'https://api.spacexdata.com/v4/',
});

module.exports = spacexAPI;
