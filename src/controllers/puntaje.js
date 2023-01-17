const { connection } = require("../db");

//select jugadores
function index(req, res) {
  // with placeholder
  connection.query(
    `
    select p2.*, p.nombre as nombre_partidas, j.nombre as nombre_jugadores  from puntajes p2
    left outer join partidas p
    on p.id= p2.id_partidas
    left outer join jugadores j
    on j.id = p2.id_jugadores
  

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
  const id_jugadores = data.id_jugadores;
  /// const id_equipos = data.id_equipos;
  const id_partidas = data.id_partidas;

  connection.query(
    `insert into puntajes(
        puntaje,
        id_partidas,
      id_jugadores
            )
    values (?)`,
    [[puntaje, id_partidas, id_jugadores]],

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
  //const id_equipos = req.body.id_equipos;
  const id_jugadores = req.body.id_jugadores;
  const id_partidas = req.body.id_partidas;
  connection.query(
    `update puntajes SET puntaje=?,id_jugadores=?,id_partidas=? where id=?;`,
    [puntaje,id_jugadores,id_partidas,id],
    (error, results) => {
      res.send(results);
      console.log(error);
    }
  );
}

//eliminando un jugador
function destroy(req, res) {
  const id = req.params.id;

  connection.query(` delete from puntajes where id=${id}`, (error, results) => {
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


/*

//comentario select
  select p.*,pj.id_partidas as nombre_partidas,j.nombre as nombre_jugadores from puntajes p
    left outer join partidas_jugadores pj
    on p.id= pj.id_partidas
    left outer join jugadores j
    on j.id= p.id_jugadores
    group  by id_partidas

*/
