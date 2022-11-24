const { connection } = require("../db");

//select jugadores
function index(req, res) {
  // with placeholder
  connection.query(`
  select r.*, p.descripcionpermiso,p.id as id_permisos from roles r
  left outer join permisos_roles pr
  on pr.id_roles =r.id
  left outer join permisos p
  on p.id  =pr.id_permisos`, function (err, results) {
    res.send(results);
  });
}

//creando un jugadores
function store(req, res) {
  const data = req.body;
const descripcionpermiso=descripcionpermiso;
const descripcionrol=descripcionrol;
const id_permisos_roles=id_permisos_roles;

  connection.query(
    `insert into roles(
        descripcionrol,
        id_permisos_roles,
        descripcionpermiso)
    values (?)`,
    [[descripcionrol,descripcionpermiso,id_permisos_roles]],
    (error, results) => {
      res.send(results);
    }
  );
}

//actualizando juadores
function update(req, res) {
  const id = req.params.id;
  //const { nombre, nacionalidad, sejuego, nombre_torneos, edad, sexo } = req.body;
  const descripcionrol = req.body.descripcionrol;
  const descripcionpermiso=req.body.descripcionpermiso;
  const id_permisos_roles=req.body.id_permisos_roles;
  connection.query(
    `update roles SET descripcionrol=?,descripcionpermiso=?,id_permisos_roles where id=?;`,
    [descripcionrol, descripcionpermiso,id_permisos_roles,id],

    (error, results) => {
      res.send(results);
      console.log(error);
    }
  );
}

//eliminando un jugador
function destroy(req, res) {
  const id = req.params.id;

  connection.query(` delete from roles where id=${id}`, (error, results) => {
    res.send(results);
  });
}

module.exports.rolesController = {
  index,
  store,
  update,
  destroy,
};

//
