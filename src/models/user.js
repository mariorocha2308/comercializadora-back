const { DataTypes } = require('sequelize');
const sequelize = require('./index')

const User = sequelize.define('user', {
  // Model attributes are defined here
  username: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  firstName: {
    type: DataTypes.TEXT
  },
  lastName: {
    type: DataTypes.TEXT
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING, 
    allowNull: false
  },
  phoneNumber: {
    type: DataTypes.STRING,
    allowNull: false
  },
  role: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  timestamps: false
});

module.exports = User;