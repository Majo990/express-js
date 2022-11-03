const { usuariosController } = require("./usuarios");

async function login(req, res) {
  const usuario = req.body.usuario;
  const password = req.body.password;

  const user = await usuariosController.one(req);
  if ( user && usuariosController.encriptar(password)===user.contraseña) {
    res.send("Login correcto");
    return;
  }
  res.send("Login incorrecto");
}

module.exports = {
  login,
};
