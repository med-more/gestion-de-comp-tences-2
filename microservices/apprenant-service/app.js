const express = require('express');
const dotenv = require('dotenv');
const apprenantRoutes = require('./routes/apprenantRoutes');
const renduRoutes = require('./routes/renduRoutes');
const errorHandler = require('./middleware/errorHandler');
const connectDB = require('./config/database');

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

app.use('/apprenants', apprenantRoutes);
app.use('/rendus', renduRoutes);

app.use(errorHandler);

module.exports = app;