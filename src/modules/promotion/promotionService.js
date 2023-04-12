// const Promotion = require('../../models/promotion')
const cloudinary = require('../../helpers/configCloud')

const postPromotion = async (req, res) => {

  const { image } = req.body
    
  try {
    const upload = cloudinary.uploader.upload(image)
    res.send(upload)
  } catch (error) {
      res.send({ error: '¡Error en el servidor'})
  }

}

module.exports = {
  postPromotion
};