const { connection } = require("../db");

//select jugadores
function index(req, res) {
  // with placeholder
  connection.query(
    `
   select p.*, e.nombre as nombre_equipos , j.nombre as nombre_jugador from puntajes p
  left join equipos e
  on e.id = p.id_equipo
  left join jugadores j
  on j.id = p.id_jugador
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
  const id_equipo = data.id_equipo;
  const id_jugador = data.id_jugador;

  connection.query(
    `insert into puntajes(
        puntaje,
      id_equipo,
        id_jugador)
    values (?)`,
    [[puntaje,id_equipo,id_jugador],],
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
  const id_equipo = req.body.id_equipo;
  const id_jugador = req.body.id_jugador;
  connection.query(
    `update puntajes SET puntaje=?,id_equipo=?,id_jugador=? where id=?;`,
    [puntaje,id_equipo,id_jugador,id],

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
    ` delete from puntajes where id=${id}`,
    (error, results) => {
      res.send(results);
    }
  );
}

module.exports.puntajeController = {
  index,
  store,
  update,
  destroy,
};
