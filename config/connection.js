require('dotenv').config();

const Sequelize = require('sequelize');
console.log(DB_URL);
console.log(DB_NAME);
console.log(DB_USER);
console.log(DB_PASSWORD);
const sequelize = process.env.DB_URL
  ? new Sequelize(process.env.DB_URL)
  : new Sequelize(
    process.env.DB_NAME, 
    process.env.DB_USER, 
    process.env.DB_PASSWORD, 
    {
      host: 'localhost',
      dialect: 'postgres',
      dialectOptions: {
        decimalNumbers: true,
      },
    });

module.exports = sequelize;