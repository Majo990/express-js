//entrenadores , usuer,arbitro,comportamineot,ya hice
//jugadores,equipos,eventos ,
const { connection } = require("../db");

//select jugadores
function index(req, res) {
  // with placeholder
  connection.query(
    `
  select  hp.*,j.nombre as nombre_jugadores, r.nro, e.nombre as nombre_eventos, j2.nombre as nombre_jueces,
  p.nombre as nombre_premios, f.nro, p.nombre as nombre_partidas, a.nombre as nombre_arbitros from historial_partidas hp
  left outer join jugadores j
  on j.id=hp.id_jugadores
  left outer join rondas r
  on r.id = hp.id_rondas
  left outer join eventos e
  on e.id=hp.id_eventos
  left outer join jueces j2
  on j2.id=hp.id_jueces
  left outer join premios p
  on p.id =hp.id_premios
  left outer join faltas f
  on f.id=hp.id_faltas
  left outer join partidas p2
  on p2.id=hp.id_partidas
  left outer join arbitros a
  on a.id=hp.id_arbitros

  `,
    function (err, results) {
      res.send(results);
    }
  );
}

//creando un jugadores
function store(req, res) {
  const data = req.body;
  const id_jugadores = data.id_jugadores;
  const fecha_hora = data.fecha_hora;
  const id_rondas = data.id_rondas;
  const puntaje = data.puntaje;
  const id_eventos = data.id_eventos;
  const id_jueces = data.id_jueces;
  const id_premios = data.id_premios;
  const id_faltas = data.id_faltas;
  const id_partidas = data.id_partidas;
  const id_arbitros = data.id_arbitros;

  connection.query(
    `insert into historial_partidas(
        id_jugadores,
        fecha_hora,
        id_rondas,
        puntaje,
        id_eventos,
        id_jueces,
        id_premios,
        id_faltas,
        id_partidas,
        id_arbitros)
    values (?)`,
    [
      [
        id_jugadores,
        fecha_hora,
        id_rondas,
        puntaje,
        id_eventos,
        id_jueces,
        id_premios,
        id_faltas,
        id_partidas,
        id_arbitros,
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
  const id_jugadores = req.body.id_jugadores;
  //const { nombre, nacionalidad, sejuego, nombre_torneos, edad, sexo } = req.body;
  const fecha_hora = req.body.fecha_hora;
  const id_rondas = req.body.id_rondas;
  const puntaje = req.body.puntaje;
  const id_eventos = req.body.id_eventos;
  const id_jueces = req.body.id_jueces;
  const id_premios = req.body.id_premios;
  const id_faltas = req.body.id_faltas;
  const id_partidas = req.body.id_partidas;
  const id_arbitros = req.body.id_arbitros;

  connection.query(
    `update historial_partidas
    SET id_jugadores=?,fecha_hora=?,id_rondas=?,puntaje=?,id_eventos=?,id_jueces=?,id_premios=?,id_faltas=?,id_partidas=?,id_arbitros=? where id=?;`,
    [
      id_jugadores,
      fecha_hora,
      id_rondas,
      puntaje,
      id_eventos,
      id_jueces,
      id_premios,
      id_faltas,
      id_partidas,
      id_arbitros,
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

  connection.query(
    ` delete from historial_partidas where id=${id}`,
    (error, results) => {
      res.send(results);
    }
  );
}

module.exports.historial_partidasController = {
  index,
  store,
  update,
  destroy,
};
