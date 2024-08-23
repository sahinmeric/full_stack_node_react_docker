const express = require('express');
const dotenv = require('dotenv');
const sequelize = require('./config/db');

dotenv.config();

const app = express();

app.use(express.json());

sequelize.authenticate()
  .then(() => console.log('Database connected...'))
  .catch(err => console.log('Error: ' + err));

app.get('/', (req, res) => {
  res.send('Welcome to the Full Stack App!');
});

module.exports = app;
