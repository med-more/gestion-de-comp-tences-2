const app = require('./app');
const PORT = process.env.PORT || 3003;

app.listen(PORT, () => {
  console.log(`Apprenant-Service lancé sur le port ${PORT}`);
});