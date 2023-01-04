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
      `select * from usuarios where usuarios =
      '${usuario}'`,
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
    `  select u.*,r.descripcion  as descripcion_roles from usuarios u
    left outer join roles r
    on r.id=u.id_roles`,
    function (err, results) {
      console.log(results);
      res.send(results);
    }
  );
}

//creando un jugadores
function store(req, res) {
  const data = req.body;
  const usuarios = data.usuarios;
  const contrasenia = data.contrasenia;
  const id_roles = data.id_roles;

  connection.query(
    `insert into usuarios(
        usuarios,
        contrasenia,
        id_roles)
    values (?)`,
    [[usuarios, encriptar(contrasenia), id_roles]],
    (error) => {
      res.send("Ok");
      console.log(error)
    }
  );
}

//actualizando juadores
function update(req, res) {
  const id = req.params.id;
  //const { nombre, nacionalidad, sejuego, nombre_torneos, edad, sexo } = req.body;
  const usuarios = req.body.usuarios;
  const id_roles=req.body.id_roles;
  connection.query(
    `update usuarios SET usuarios=?,id_roles=? where id=?;`,
    [usuarios,id_roles,id],
    (error, results) => {
      res.send(results);
      console.log(error);
    }
  );
}

//eliminando un jugador
function destroy(req, res) {
  const id = req.params.id;

  connection.query(` delete from usuarios where id=${id}`, () => {
    res.send("Ok");
    console.log(error)
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
