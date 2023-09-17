const sequelize = require('sequelize');
require('dotenv').config();

let sequelizeInstance = null;

if (process.env.JAWSDB_URL){
    sequelizeInstance = new sequelize(process.env.JAWSDB_URL)
} else {
    sequelizeInstance = new sequelize(
        process.env.DB_NAME,
        process.env.DB_USER,
        process.env.DB_PASSWORD,
        {
            host: 'localhost',
            dialect: 'mysql',
            port: 3306
        }
    );
}

module.exports = sequelizeInstance