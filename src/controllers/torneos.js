const { connection } = require("../db");

//select jugadores
function index(req, res) {
  // with placeholder
  connection.query(
    `select  t.*, e.nombre as nombre_estadios  from  torneos t
  left outer join estadios e
  on e.id = t.id_estadios `,
    function (err, results) {
      res.send(results);
    }
  );
}

//creando un jugadores
function store(req, res) {
  const data = req.body;
  const fecha = data.fecha;
  const id_estadios = data.id_estadios;
  const nombre = data.nombre;
  const nombre_paises = data.nombre_paises;
  const nombre_ciudades = data.nombre_ciudades;

  connection.query(
    `insert into torneos(
        fecha,
        id_estadios,
        nombre,
        nombre_paises,
        nombre_ciudades)
    values (?)`,
    [[fecha,id_estadios,nombre,nombre_paises,nombre_ciudades]],
    (error, results) => {
      res.send(results);
    }
  );
}

//actualizando juadores
function update(req, res) {
  const id = req.params.id;
  //const { nombre, nacionalidad, sejuego, nombre_torneos, edad, sexo } = req.body;
  const fecha = req.body.fecha;
  const id_estadios = req.body.id_estadios;
  const nombre = req.body.nombre;
  const nombre_paises = req.body.nombre_paises;
  const nombre_ciudades = req.body.nombre_ciudades;
  connection.query(
    `update torneos SET fecha=?,id_estadios=?,nombre=?,nombre_paises,nombre_ciudades where id=?;`,
    [fecha,id_estadios,nombre,nombre_paises,nombre_ciudades,id],

    (error, results) => {
      res.send(results);
      console.log(error);
    }
  );
}

//eliminando un jugador
function destroy(req, res) {
  const id = req.params.id;

  connection.query(` delete from torneos where id=${id}`, (error, results) => {
    res.send(results);
  });
}

module.exports.torneosController = {
  index,
  store,
  update,
  destroy,
};
