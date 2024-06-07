const Sequalize = require('sequelize');
require('dotenv').config();

const sequalize = process.env.DB_URL
? new Sequalize(process.env.DB_URL)
: new Sequalize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: 'localhost',
        dialect: 'postgres',
    }
)
module.exports = sequalize;