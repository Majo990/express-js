
//entrenadores , usuer,arbitro,comportamineot,ya hice
//jugadores,equipos,eventos ,
const { connection } = require("../db");

//select jugadores
function index(req, res) {
  // with placeholder
  connection.query(`
   select hp.*,j.nombre as nombre_jugadores , r.nro as nro , e.nombre as nombre_eventos , j2.nombre as nombre_jueces, p.nombre as nombre_premios from historial_partidas hp 
 left outer join jugadores j 
 on  j.id=id_jugadores 
 left outer join rondas r 
 on r.id=id_rondas 
left outer join eventos e 
on e.id=id_eventos 
left outer join jueces j2 
on j2.id=id_jueces 
left outer join premios p 
on  p.id =id_premios 
  `, function (err, results) {
    res.send(results);
  });
}

//creando un jugadores
function store(req, res) {
  const data = req.body;
  const id_jugadores = data.id_jugadores;
  const fecha_hora= data.fecha_hora;
  const id_rondas=data.id_rondas;
  const puntaje= data.puntaje;
  const id_eventos=data.id_eventos;
  const id_jueces=data.id_jueces;
  const id_premios = data.id_premios;

  connection.query(
    `insert into historial_partidas(
        id_jugadores,
        fecha_hora,
        id_rondas,
        puntaje,
        id_eventos,
        id_jueces,
        id_premios)
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
  const fecha_hora = req.body.fecha_hora;
 const  puntaje= req.body.id_puntaje;
  connection.query(
    `update historial_partidas SET fecha_hora=?,id_rondas=?,puntaje=?,id_eventos=?,id_jueces=?,id_premios where id=?;`,
    [fecha_hora,id_rondas,puntaje,id_eventos,id_jueces,id_premios,id],

    (error,results) => {
      res.send(results);
      console.log(error)
    }
  );
}

//eliminando un jugador
function destroy(req, res) {

  const id = req.params.id;

  connection.query(` delete from historial_partidas where id=${id}`,
  (
    error,results) => {
      res.send(results);

  });
}

module.exports.historial_partidasController = {
  index,
  store,
  update,
  destroy,
};
