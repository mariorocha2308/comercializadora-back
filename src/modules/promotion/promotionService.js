// const Promotion = require('../../models/promotion')

const createPromotion = async (req, res) => {

  try {
    res.send({ sucess: 'It´s work!!'})
  } catch (error) {
    res.send({ error: '¡Error en el servidor'})
  }

}

module.exports = {
  createPromotion
};