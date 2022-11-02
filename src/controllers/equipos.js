
const { connection } = require("../db");

//select jugadores
function index(req, res) {
  // with placeholder
  connection.query(` select  e2.*,j.nombre as nombre_jugadores , e.nombre as nombre_entrenadores  from equipos e2
  left outer join  jugadores j
  on  j.id=id_jugadores
  left  outer join entrenadores e
  on e.id=e2.id_entrenadores  `, function (err, results) {
    res.send(results);
  });
}

//creando un jugadores
function store(req, res) {
  const data = req.body;
  const nombre = data.nombre;
  const fecha = data.fecha;
  const id_jugadores= data.id_jugadores;
  const id_arbitros = data.id_arbitros;

  connection.query(
    `insert into arbitros(
        nombre,
        fecha,
        id_jugadores,
        id_arbitros)
    values (?)`,
    [
      [
        nombre,
        fecha,
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
  const nombre = req.body.nombre;
 const  fecha= req.body.fecha;
 const id_jugadores=req.body.id_jugadores;
 const id_entrenadores=req.body.id_entrenadores;

  connection.query(
    `update equipos SET nombre=? , fecha=?, id_jugadores=?,id_entrenadores=?  where id=?;`,
    [nombre,fecha,id_jugadores,id_entrenadores,id],

    (error,results) => {
      res.send(results);
      console.log(error)
    }
  );
}

//eliminando un jugador
function destroy(req, res) {

  const id = req.params.id;

  connection.query(` delete from equipos where id=${id}`,
  (
    error,results) => {
      res.send(results);

  });
}

module.exports.equiposController = {
  index,
  store,
  update,
  destroy,
};

