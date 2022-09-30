const { Sequelize } = require('sequelize');

const { config } = require('./../config/config');
const setUpModels = require('./../db/models');

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const URI = `mysql://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

const options = {
    dialect: 'mysql',
    logging: false,
    dialectOptions: {
        useUTC: false,
    },
    timezone: '-05:00',
}

const sequelize = new Sequelize(URI, options);

setUpModels(sequelize);

module.exports = sequelize;