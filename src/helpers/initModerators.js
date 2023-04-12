const User = require('../models/user')
const moderators = require('../utils/dataModerators')

const initModerators = async () => {

  const isData = await User.findAll()

  if (isData.length === 0) {
    for (let i = 0; i < moderators.length; i++) {
      User.create(moderators[i])
    }
  }
}

module.exports = initModerators