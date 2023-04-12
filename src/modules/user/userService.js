const User = require('../../models/user')

const authLogin = async (req, res) => {

  const { username, password } = req.body
  
  try {
    const existUser = await User.findOne({ where: { username, password}})

    if (existUser) return res.json(existUser)
    else return res.send({ error: '¡Error en las credenciales de sesión!'})

  } catch (error) {
    res.send({ error: '¡Error en el servidor'})
  }

}

const getModerators = async (req, res) => {

	try {
		const finded = await User.findAll()

		if (finded) return res.json(finded)
		else return res.send({ error: '¡No se pudo obtener usuarios!'})
	} catch (error) {
		res.send({ error: '¡Error en el servidor!'})
	}

}

const createModerator = async (req, res) => {

	const { username, firstName, lastName, email, name, role, password } = req.body

	try {
		const posted = await User.create({ username, firstName, lastName, email, name, role, password})

    if (posted) return res.json(posted)
    else return res.send({ error: '¡No se pudo crear este usuario!'})
	} catch (error) {
    res.send({ error: '¡Error en el servidor'})
	}

}

const updateModerator = async (req, res) => {

	const { data } = req.body
	const { id } = req.params

	try {
		const updated = await User.update(data, { where: { id }})

    if (updated) return res.send({ sucess: 'Actualizado con éxito'})
    else return res.send({ error: '¡No se pudo actualizar este usuario!'})
	} catch (error) {
    res.send({ error: '¡Error en el servidor'})
	}

}

const deleteModerator = async (req, res) => {
	const { id } = req.params

	try {
		const deleted = await User.destroy({ where: { id } })

    if (deleted) return res.send({ success: 'Eliminado con éxito'})
    else return res.send({ error: '¡No se pudo eliminar este usuario!'})
	} catch (error) {
    res.send({ error: '¡Error en el servidor'})
	}

}

module.exports = {
  authLogin,
	getModerators,
	createModerator,
	updateModerator,
	deleteModerator
};