const axios = require('axios');

const axiosInstance = axios.default.create({
    baseURL: 'http://localhost:5000/api/users/'
});

module.exports = axiosInstance;