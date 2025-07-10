const axios = require('axios');

// Exemple : récupérer un brief depuis brief-service
const getBriefById = async (id) => {
  const response = await axios.get(`http://brief-service:3002/briefs/${id}`);
  return response.data;
};

module.exports = {
  getBriefById
};