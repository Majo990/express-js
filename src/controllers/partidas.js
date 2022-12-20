const { query } = require("express");
const { connection } = require("../db");

//select jugadores
function index(req, res) {
  // with placeholder
  connection.query(`


  select p.*,d.nombre as nombre_deportes, t.nombre as nombre_torneos , r.nro as nro_rondas  from partidas p
  left outer join torneos t
  on t.id=p.id_torneos
  left outer  join rondas r
  on r.id = p.id_rondas
  left outer join deportes d
  on d.id = p.id_deportes`

  , function (err, results) {
    res.send(results);
  });
}

function proximosencuentros(req,res) {
  // with placeholder
  index()
  connection.query(`

  select pj.*, p.*, j.nombre as nombre_jugadores,
  c.nombre as nombre_cancha from partidas_jugadores pj
    left outer join partidas p
    on p.id= pj.id_partidas
    left outer join jugadores j
    on j.id = pj.id_jugadores
    left outer join canchas c
    on c.id_partidas =p.id;`
  , function (err, results) {
    res.send(results);
  });
}


//creando un jugadores
function store(req, res) {
  const data = req.body;
  const nombre = data.nombre;
  const descripcion=data.descripcion;
  const id_torneos=data.id_torneos;
  const fecha=data.fecha;
  const tiempo_inicio=data.tiempo_inicio;
  const tiempo_duracion=data.tiempo_duracion;
  const tiempo_fin=data.tiempo_fin;
  const id_rondas=data.id_rondas;
  const id_deportes=data.id_deportes;
 /*const id_historial_partidas=data.id_historial_partidas;*/

  connection.query(
    `insert into partidas(
        nombre,
        descripcion,
        id_torneos,
        fecha,
        tiempo_inicio,
        tiempo_duracion,
        tiempo_fin,
        id_rondas,
        id_deportes
         )
    values (?)`,
    [
      [
        nombre,
        descripcion,
        id_torneos,
        fecha,
        tiempo_inicio,
        tiempo_duracion,
        tiempo_fin,
        id_rondas,
        id_deportes,
       /* id_historial_partidas,*/
      ],
    ],
    (error,results) => {
      res.send(results);
      console.log(error)
    }
  );
}

//actualizando juadores
function update(req, res) {
  const id = req.params.id;
  //const { nombre, nacionalidad, sejuego, nombre_torneos, edad, sexo } = req.body;
  const nombre = req.body.nombre;
  const descripcion=req.body.descripcion;
///  const id_jugadores=req.body.id_jugadores;
  const id_torneos=req.body.id_torneos;
  const fecha=req.body.fecha;
  const tiempo_inicio=req.body.tiempo_inicio;
  const tiempo_duracion=req.body.tiempo_duracion;
  const tiempo_fin=req.body.tiempo_fin;
 const  id_rondas= req.body.id_rondas;
 const id_deportes=req.body.id_deportes;
/* const  id_historial_partidas=req.body.id_historial_partidas;*/

  connection.query(
    `update partidas SET nombre=?,descripcion=?,id_torneos=?,fecha=?,tiempo_inicio=?,tiempo_duracion=?,tiempo_fin=?,id_rondas=?,id_deportes=? where id=?;`,
    [nombre,descripcion,id_torneos,fecha,tiempo_inicio,tiempo_duracion,tiempo_fin,id_rondas,id_deportes,id],

    (error,results) => {
      res.send(results);
      console.log(error)
    }
  );
}

//eliminando un jugador
function destroy(req, res) {

  const id = req.params.id;

  connection.query(` delete from partidas where id=${id}`,
  (
    error,results) => {
      res.send(results);

  });
}

module.exports.partidasController = {
  index,
  store,
  update,
  destroy,
};
