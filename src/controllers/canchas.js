
const { connection } = require("../db");

//select jugadores
function index(req, res) {
  // with placeholder
  connection.query(`select pj.*, p.*, j.nombre as nombre_jugadores,
  c.nombre as nombre_cancha from partidas_jugadores pj
    left outer join partidas p
    on p.id= pj.id_partidas
    left outer join jugadores j
    on j.id = pj.id_jugadores
    left outer join canchas c
    on c.id_partidas =p.id;`, function (err, results) {
    res.send(results);
  });
}

//creando un jugadores
function store(req, res) {
  const data = req.body;
  const nombre=data.nombre;
  const id_jugadores=data.id_jugadores;
  const id_partidas=data.id_partidas;

  connection.query(
    `insert into canchas(
        nombre,
        id_jugadores,
        id_partidas)
    values (?)`,
    [
      [
        nombre,
        id_jugadores,
        id_partidas,

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
  const id_jugadores=req.body.id_jugadores;
  const id_partidas=req.body.id_partidas;
  connection.query(
    `update cancha SET nombre=?, id_jugadores=?,id_partidas=?  where id=?;`,
    [nombre,id_jugadores,id_partidas,id],

    (error,results) => {
      res.send(results);
      console.log(error)
    }
  );
}

//eliminando un jugador
function destroy(req, res) {

  const id = req.params.id;

  connection.query(` delete from canchas where id=${id}`,
  (
    error,results) => {
      res.send(results);

  });
}

module.exports.canchasController = {
  index,
  store,
  update,
  destroy,
};
