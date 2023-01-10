const { generateAccessToken } = require("../jwt");
const { usuariosController } = require("./usuarios");

async function login(req, res) {
  const usuario = req.body.usuario;
  const password = req.body.password;

  const user = await usuariosController.one(req);
  if ( user && usuariosController.encriptar(password)===user.contrasenia) {
    const token = generateAccessToken(user);
    res.json({user,token});
    return;
  }
  res.sendStatus(401)
}

module.exports = {
  login,
};
