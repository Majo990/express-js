//mal
const { connection } = require("../db");

//select jugadores
function index(req, res) {
  // with placeholder
  connection.query(`
  select  c.*,j. nombre as nombre_jugadores,a.nombre  as nombre_arbitros from comportamientos c
  left outer join jugadores j
  on j.id=c.id_jugadores
 left outer join  arbitros a
 on  a.id=c.id_arbitros
  `, function (err, results) {
    res.send(results);
  });
}

//creando un jugadores
function store(req, res) {
  const data = req.body;
  const descripcion = data.descripcion;
  const id_jugadores = data.id_jugadores;
  const id_arbitros= data.id_arbitros;

  connection.query(
    `insert into comportamientos(
        descripcion,
        id_jugadores,
        id_arbitros)
    values (?)`,
    [
      [
        descripcion,
        id_jugadores,
        id_arbitros,
      ],
    ],
    (error,results) => {
      res.send(results);
    }
  );
}

//actualizando juadores
function update(req, res) {
  const id = req.params.id;
  //const { nombre, nacionalidad, sejuego, nombre_torneos, edad, sexo } = req.body;
  const descripcion = req.body.descripcion;

  connection.query(
    `update comportamientos SET descripcion=?   where id=?;`,
    [descripcion,id],

    (error,results) => {
      res.send(results);
      console.log(error)
    }
  );
}

//eliminando un jugador
function destroy(req, res) {

  const id = req.params.id;

  connection.query(` delete from comportamientos where id=${id}`,
  (
    error,results) => {
      res.send(results);

  });
}

module.exports.comportamientosController = {
  index,
  store,
  update,
  destroy,
};

