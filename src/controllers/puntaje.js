const { connection } = require("../db");

//select jugadores
function index(req, res) {
  // with placeholder
  connection.query(
    `
    select p.*, e.nombre as nombre_equipos , j.nombre as nombre_jugadores, p2.nombre as nombre_partidas from puntajes p
  left join equipos e
  on e.id = p.id_equipos
  left join jugadores j
  on j.id = p.id_jugadores
  left join partidas p2
  on p2.id = p.id_partidas
 `,
    function (err, results) {
      res.send(results);
    }
  );
}

//creando un jugadores
function store(req, res) {
  const data = req.body;
  const puntaje = data.puntaje;
  const id_equipos = data.id_equipos;
  const id_jugadores = data.id_jugadores;
  const id_partidas = data.id_partidas;

  connection.query(
    `insert into puntajes(
        puntaje,
      id_equipos,
        id_jugadores,
        id_partidas)
    values (?)`,
    [[puntaje,id_equipos,id_jugadores,id_partidas]],
    (error, results) => {
      console.log(error);
      res.send(results);
    }
  );
}

//actualizando juadores
function update(req, res) {
  const id = req.params.id;
  //const { nombre, nacionalidad, sejuego, nombre_torneos, edad, sexo } = req.body;
  const puntaje = req.body.puntaje;
  const id_equipos = req.body.id_equipos;
  const id_jugadores = req.body.id_jugadores;
  const id_partidas = req.body.id_partidas;
  connection.query(
    `update puntajes SET puntaje=?,id_equipos=?,id_jugadores=?,id_partidas=? where id=?;`,
    [puntaje,id_equipos,id_jugadores,id_partidas,id],
    (error, results) => {
      res.send(results);
      console.log(error);
    }
  );
}

//eliminando un jugador
function destroy(req, res) {
  const id = req.params.id;

  connection.query(` delete from puntajes where id=${id}`,
  (
    error, results) => {
    res.send(results);
    console.log(error);
  });
}

module.exports.puntajeController = {
  index,
  store,
  update,
  destroy,
};
