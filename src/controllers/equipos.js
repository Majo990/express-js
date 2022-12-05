const { connection } = require("../db");

//select jugadores
function index(req, res) {
  // with placeholder
  connection.query(
    ` select e.*,j.nombre as nombre_jugadores,e2.nombre as nombre_entrendores , e3.nombre as nombre_estadios from equipos e
  left outer join jugadores j
  on j.id=e.id_jugadores
  left outer join entrenadores e2
  on e2.id =e.id_entrenadores
  left outer join estadios e3
  on e3.id= e.id_estadios`,
    function (err, results) {
      res.send(results);
    }
  );
}

//creando un jugadores
function store(req, res) {
  const data = req.body;
  const nombre = data.nombre;
  const fecha_fundo = data.fecha_fundo;
  const id_jugadores = data.id_jugadores;
  const id_entrenadores = data.id_entrenadores;
  const descripcion = data.descripcion;
  const simbolo = data.simbolo;
  const indumentaria_uniforme = data.indumentaria_uniforme;
  const presidente = data.presidente;
  const apodos = data.apodos;
  const id_estadios = data.id_estadios;
  const nombre_paises = data.nombre_paises;
  const nombre_ciudades = data.nombre_ciudades;

  connection.query(
    `insert into equipos(
      nombre,
      fecha_fundo,
      id_jugadores,
      id_entrenadores,
      descripcion,
      simbolo,
      indumentaria_uniforme,
      presidente,
      apodos,
      id_estadios,
      nombre_paises,
      nombre_ciudades )
    values (?)`,
    [
      [
        nombre,
        fecha_fundo,
        id_jugadores,
        id_entrenadores,
        descripcion,
        simbolo,
        indumentaria_uniforme,
        presidente,
        apodos,
        id_estadios,
        nombre_paises,
        nombre_ciudades,
      ],
    ],
    (error, results) => {
      res.send(results);
      console.log(error);
    }
  );
}

//actualizando juadores
function update(req, res) {
  const id = req.params.id;
  //const { nombre, nacionalidad, sejuego, nombre_torneos, edad, sexo } = req.body;
  const nombre = req.body.nombre;
  const fecha_fundo = req.body.fecha_fundo;
  const id_jugadores = req.body.id_jugadores;
  const id_entrenadores = req.body.id_entrenadores;
  const descripcion = req.body.descripcion;
  const simbolo = req.body.simbolo;
  const indumentaria_uniforme = req.body.indumentaria_uniforme;
  const presidente = req.body.presidente;
  const apodos = req.body.apodos;
  const id_estadios = req.body.id_estadios;
  const nombre_paises = req.body.nombre_paises;
  const nombre_ciudades = req.body.nombre_ciudades;

  connection.query(
    `update equipos SET nombre=?,fecha_fundo=?,id_jugadores=?,id_entrenadores=?,descripcion=?,simbolo=?,indumentaria_uniforme=?,presidente=?,apodos=?,id_estadios=?,nombre_paises=?,nombre_ciudades=? where id=?;`,
    [
      nombre,
      fecha_fundo,
      id_jugadores,
      id_entrenadores,
      descripcion,
      simbolo,
      indumentaria_uniforme,
      presidente,
      apodos,
      id_estadios,
      nombre_paises,
      nombre_ciudades,
      id,
    ],

    (error, results) => {
      res.send(results);
      console.log(error);
    }
  );
}

//eliminando un jugador
function destroy(req, res) {
  const id = req.params.id;

  connection.query(`delete from equipos where id=${id}`, (error, results) => {
    res.send(results);
  });
}

module.exports.equiposController = {
  index,
  store,
  update,
  destroy,
};
