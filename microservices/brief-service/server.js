const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/database');
const briefRoutes = require('./routes/briefRoutes');
const errorHandler = require('./middleware/errorHandler');

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

app.use('/briefs', briefRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
  console.log(`Brief-Service lancé sur le port ${PORT}`);
});