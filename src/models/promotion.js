const { DataTypes } = require('sequelize');
const sequelize = require('./index')

const Promotion = sequelize.define('promotion', {
  // Model attributes are defined here
  picture: {
    url: {
      type: DataTypes.STRING,
      allowNull: false
    },
    public_id: {
      tpe: DataTypes.STRING,
      allowNull: false
    }
  },
  description: {
    type: DataTypes.TEXT,
  },
});

module.exports = Promotion;