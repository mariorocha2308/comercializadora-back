const cloudinary = require('cloudinary').v2;
const config = require('../config/config');

// Configuration 
cloudinary.config({
  cloud_name: config.CLOUD_NAME,
  api_key: config.CLOUD_API_KEY,
  api_secret: config.CLOUD_API_SECRET
});

module.exports = cloudinary