const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  SERVER_PORT: process.env.PORT || '',
  NODE_ENV: process.env.NODE_ENV || '',
  DATABASE_NAME: process.env.DATABASE_NAME,
  DATABASE_USER: process.env.DATABASE_USER,
  DATABASE_PASSWORD: process.env.DATABASE_PASSWORD,
  DATABASE_HOST: process.env.DATABASE_HOST,
  DATABASE_PORT: process.env.DATABASE_PORT,
  DATABASE_DIALECT: process.env.DATABASE_DIALECT || 'mysql',

  SUPERVISOR_PASS: process.env.SUPERVISOR_PASS,
  VENDEDOR_PASS: process.env.VENDEDOR_PASS,
  LIBRADOR_PASS: process.env.LIBRADOR_PASS,
  CONTADOR_PASS: process.env.CONTADOR_PASS,
  CAJERO_PASS: process.env.CAJERO_PASS,
  DESPACHADOR_PASS: process.env.DESPACHADOR_PASS,
  RECEPTOR_PASS: process.env.RECEPTOR_PASS,

  CLOUD_NAME: process.env.CLOUD_NAME,
  CLOUD_API_KEY: process.env.CLOUD_API_KEY,
  CLOUD_API_SECRET: process.env.CLOUD_API_SECRET

};
