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

module.exports = {
    authLogin
};
