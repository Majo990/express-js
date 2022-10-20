const { connection } = require("../db");
const crypto = require("crypto");

const secret = "test";

function encriptar(password) {
  return crypto
    .pbkdf2Sync(password, secret, 1000, 16, "sha512")
    .toString("hex");
}

//select jugadores
function one(req) {
  const usuario = req.body.usuario;
  // with placeholder
  return new Promise((resolve, reject) => {
    connection.query(
      `SELECT * FROM usuarios WHERE usuarios='${usuario}'`,
      function (err, results) {
        if (err) {
          reject(err);
        }
        resolve(results[0]);
      }
    );
  });
}
//select jugadores
function index(req, res) {
  // with placeholder
  connection.query(
    "SELECT id,usuarios,id_roles FROM usuarios",
    function (err, results) {
      res.send(results);
    }
  );
}

//creando un jugadores
function store(req, res) {
  const data = req.body;
  const usuarios = data.usuarios;
  const contraseña = data.contraseña;
  const id_roles = data.id_roles;

  connection.query(
    `insert into usuarios(
        usuarios,
        contraseña,
        id_roles) 
    values (?)`,
    [[usuarios, encriptar(contraseña), id_roles]],
    (error) => {
      res.send("Ok");
    }
  );
}

//actualizando juadores
function update(req, res) {
  const id = req.params.id;
  //const { nombre, nacionalidad, sejuego, nombre_torneos, edad, sexo } = req.body;
  const usuarios = req.body.usuarios;
  connection.query(
    `update usuarios SET usuarios=?,id_roles where id=?;`,
    [usuarios,id_roles, id],

    () => {
      res.send("Ok");
    }
  );
}

//eliminando un jugador
function destroy(req, res) {
  const id = req.params.id;

  connection.query(` delete from usuarios where id=${id}`, () => {
    res.send("Ok");
  });
}

module.exports.usuariosController = {
  one,
  index,
  encriptar,
  store,
  update,
  destroy,
};
