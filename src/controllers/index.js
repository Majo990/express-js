const { usuariosController } = require("./usuarios");

async function login(req, res) {
  const usuario = req.body.usuario;
  const contraseña = req.body.password;

  const user = await usuariosController.one(req);

  if ( user && usuariosController.encriptar(contraseña)===user.contraseña) {
    res.send("Login correcto");
    return;
  }
  res.send("Login incorrecto");
}

module.exports = {
  login,
};
