// Import required packages
const Sequelize = require('sequelize');
require('dotenv').config(); // Load environment variables from .env file

// Create a Sequelize instance and connect to PostgreSQL
const sequelize = new Sequelize(
  process.env.DB_NAME, // Database name
  process.env.DB_USER, // Database username
  process.env.DB_PASS, // Database password
  {
    host: 'localhost', // Database host (you can modify this if your database is hosted elsewhere)
    dialect: 'postgres', // Database dialect
    port: process.env.DB_PORT || 5432, // Database port (default is 5432 for PostgreSQL)
  }
);

// Test the connection to the database
sequelize.authenticate()
  .then(() => {
    console.log('Connection to the database has been established successfully.');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = sequelize;
