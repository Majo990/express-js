const { connection } = require("../db");

//select jugadores
function index(req, res) {
  // with placeholder
  connection.query(`select pr.*,r.descripcionrol, p.descripcionpermiso  from permisos_roles pr
  left outer join roles r
  on  r.id = pr.id_roles
  left outer join permisos p
  on p.id =pr.id_permisos`, function (err, results) {
    res.send(results);
  });
}

//creando un jugadores
function store(req, res) {
  const data = req.body;
  const id_permisos = data.id_permisos;
  const id_roles = data.id_roles;

  connection.query(
    `insert into equipos(
      id_permisos,
      id_roles)
    values (?)`,
    [[id_permisos, id_roles]],
    (error, results) => {
      res.send(results);
    }
  );
}

//actualizando juadores
function update(req, res) {
  const id = req.params.id;
  //const { nombre, nacionalidad, sejuego, nombre_torneos, edad, sexo } = req.body;

  const id_permisos = req.body.id_permisos;
  const id_roles = req.body.id_roles;

  connection.query(
    `update permisos_roles SET id_permisos=?,id_roles=? where id=?;`,
    [id_permisos, id_roles, id],

    (error, results) => {
      res.send(results);
      console.log(error);
    }
  );
}

//eliminando un jugador
function destroy(req, res) {
  const id = req.params.id;

  connection.query(
    ` delete from permisos_roles where id=${id}`,
    (error, results) => {
      res.send(results);
    }
  );
}

module.exports.permisos_rolesController = {
  index,
  store,
  update,
  destroy,
};
