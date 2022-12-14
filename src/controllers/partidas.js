const { query } = require("express");
const { connection } = require("../db");

//select jugadores
function index(req, res) {
  // with placeholder
  connection.query(
    `
    select p.*, t.nombre as nombre_torneos , r.nro as nro_rondas  from partidas p
    left outer join torneos t
    on t.id=p.id_torneos
    left outer  join rondas r
    on r.id = p.id_rondas
        `,

    function (err, results) {
      res.send(results);
    }
  );
}

// partidas jugara proximadamene
function proximosencuentros(req, res) {
  connection.query(
    `select
    pj.*,
    p.*,
    j.nombre as nombre_jugadores,
    c.nombre as nombre_cancha
  from
    partidas p
  left join partidas_jugadores pj
      on
    p.id = pj.id_partidas
  left join jugadores j
      on
    j.id = pj.id_jugadores
  left join canchas_estadios_partidas c
      on
    c.id_partidas = p.id
  where
    convert(concat(p.fecha, ' ', p.tiempo_inicio),
    datetime) >= now()`,
    function (err, results) {
      res.send(results);
    }
  );
}

//resultados partidas jugadas anteriormente
function resultados(req, res) {
  connection.query(
    `select
      pj.*,
      p.*,
      j.nombre as nombre_jugadores,
      c.nombre as nombre_cancha
    from
      partidas p
    left join partidas_jugadores pj
        on
      p.id = pj.id_partidas
    left join jugadores j
        on
      j.id = pj.id_jugadores
    left join canchas_estadios_partidas c
        on
      c.id_partidas = p.id
    where
      convert(concat(p.fecha, ' ', p.tiempo_inicio),
      datetime) <= now() `,
    function (err, results) {
      // if(err){
      //   console.log(err);
      //   res.send([])
      // }
      res.send(results);
    }
  );
}

// partidas en juego

function juego(req, res) {
  connection.query(
    `

    select
    pj.*,
    p.*,
    j.nombre as nombre_jugadores,
    c.nombre as nombre_cancha
    from
    partidas p
    left join partidas_jugadores pj
      on
    p.id = pj.id_partidas
    left join jugadores j
      on
    j.id = pj.id_jugadores
    left join canchas_estadios_partidas c
      on
    c.id_partidas = p.id
    where
    convert(concat(p.fecha, ' ', p.tiempo_inicio),
    datetime) <= now()  and convert(concat(p.fecha, ' ', p.tiempo_fin),
    datetime) >= now() and fecha=current_date() ;

`,
    function (err, results) {
      res.send(results);
    }
  );
}

//creando un jugadores
function store(req, res) {
  const data = req.body;
  const nombre = data.nombre;
  const descripcion = data.descripcion;
  const id_torneos = data.id_torneos;
  const fecha = data.fecha;
  const tiempo_inicio = data.tiempo_inicio;
  const tiempo_duracion = data.tiempo_duracion;
  const tiempo_fin = data.tiempo_fin;
  const id_rondas = data.id_rondas;
  const nombre_deportes = data.nombre_deportes;
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
          nombre_deportes
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
        nombre_deportes,
        /* id_historial_partidas,*/
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
  const descripcion = req.body.descripcion;
  ///  const id_jugadores=req.body.id_jugadores;
  const id_torneos = req.body.id_torneos;
  const fecha = req.body.fecha;
  const tiempo_inicio = req.body.tiempo_inicio;
  const tiempo_duracion = req.body.tiempo_duracion;
  const tiempo_fin = req.body.tiempo_fin;
  const id_rondas = req.body.id_rondas;
  const nombre_deportes = req.body.nombre_deportes;
  /* const  id_historial_partidas=req.body.id_historial_partidas;*/

  connection.query(
    `update partidas SET nombre=?,descripcion=?,id_torneos=?,fecha=?,tiempo_inicio=?,tiempo_duracion=?,tiempo_fin=?,id_rondas=?,nombre_deportes=? where id=?;`,
    [
      nombre,
      descripcion,
      id_torneos,
      fecha,
      tiempo_inicio,
      tiempo_duracion,
      tiempo_fin,
      id_rondas,
      nombre_deportes,
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

  connection.query(` delete from partidas where id=${id}`, (error, results) => {
    res.send(results);
  });
}

module.exports.partidasController = {
  index,
  store,
  update,
  destroy,
  proximosencuentros,
  resultados,
  juego,
};
