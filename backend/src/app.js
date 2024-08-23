const express = require('express');
const dotenv = require('dotenv');
const sequelize = require('./config/db');

dotenv.config();

console.log('DB_USER:', process.env.DB_USER);
console.log('DB_PASSWORD:', process.env.DB_PASSWORD);

const app = express();

app.use(express.json());

sequelize.authenticate()
  .then(() => console.log('Database connected...'))
  .catch(err => console.log('Error: ' + err));

app.get('/', (req, res) => {
  res.send('Welcome to the Full Stack App!');
});

module.exports = app;
