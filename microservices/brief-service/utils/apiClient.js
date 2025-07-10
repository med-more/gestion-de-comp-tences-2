const axios = require('axios');

// Exemple : récupérer une compétence depuis competence-service
const getCompetenceByCode = async (code) => {
  const response = await axios.get(`http://competence-service:3001/competences/${code}`);
  return response.data;
};

module.exports = {
  getCompetenceByCode
};