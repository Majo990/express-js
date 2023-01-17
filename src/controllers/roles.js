const { connection } = require("../db");

//select jugadores
function index(req, res) {
  // with placeholder
  connection.query(
    `select r.*, p.descripcion as descripcionpermiso,p.id as id_permisos, pr.id as id_permisos_roles from roles r
    left outer join permisos_roles pr
    on pr.id_roles =r.id
    left outer join permisos p
    on p.id  =pr.id_permisos
  `,
    function (err, results) {
      res.send(results);
    }
  );
}

//creando roles
function store(req, res) {
  const data = req.body;
  const descripcion = data.descripcion;

  connection.query(
    `insert into roles(
        descripcion)
    values (?)`,
    [[descripcion]],
    (error, results) => {
      if (error == res.send(error)) res.send(results);
    }
  );
}

//actualizando juadores
function update(req, res) {
  const id = req.params.id;
  //const { nombre, nacionalidad, sejuego, nombre_torneos, edad, sexo } = req.body;
  const descripcion = req.body.descripcion;
  connection.query(
    `update roles SET descripcion=? where id=?;`,
    [descripcion, id],

    (error, results) => {
      res.send(results);
      console.log(error);
    }
  );
}

//eliminando un jugador
function destroy(req, res) {
  const id = req.params.id;

  connection.query(`delete from roles where id=${id}`, (error, results) => {
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
