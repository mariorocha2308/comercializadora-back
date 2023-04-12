const config = require('../config/config')

const moderators = [
  {
    username: "pepe",
    firstName: "Huerta",
    lastName: "Osment",
    email: "pepehuerta@gmail.com",
    name: "Pepe",
    role: "supervisor",
    password: config.SUPERVISOR_PASS
  }
]

module.exports = moderators