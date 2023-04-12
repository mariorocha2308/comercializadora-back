'use strict';
const Sequelize = require('sequelize');
// eslint-disable-next-line no-unused-vars
// const env = process.env.NODE_ENV || 'development';
const config = require('../config/config');

const sequelize = new Sequelize(`postgresql://${config.DATABASE_USER}:${config.DATABASE_PASSWORD}@${config.DATABASE_HOST}:${config.DATABASE_PORT}/${config.DATABASE_NAME}`,
{ logging: false, native: false });

module.exports = sequelize;