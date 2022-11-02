
const { connection } = require("../db");

//select jugadores
function index(req, res) {
  // with placeholder
  connection.query(`
  select  f.*,j.nombre as nombre_jugadores , a.nombre as nombre_arbitros,f.fecha_hora as fecha_hora , p.nombre as nombre_partidas  from faltas f
 left outer join jugadores j
 on j.id =id_jugadores
 left outer join arbitros a
 on  a.id =f.id_arbitros
 left outer join historial_partidas hp
 on hp.id = id_historial_partidas
 left outer join  partidas p
 on p.id =id_partidas
 `, function (err, results) {
    res.send(results);
  });
}

//creando un jugadores
function store(req, res) {
  const data = req.body;
  const nro = data.nro;
  const fecha_hora= data.fecha_hora;
  const id_jugadores=data.id_jugadores;
  const  id_arbitros=data.id_arbitros;
  const id_historial_partidas=data.id_historial_partidas;
  const id_partidas = data.id_partidas;

  connection.query(
    `insert into faltas(
        nro,
        fecha_hora,
        id_jugadores,
        id_arbitros,
        id_historial_partidas,
        id_partidas)
    values (?)`,
    [
      [
        nro,
         fecha_hora,
         id_jugadores,
         id_arbitros,
         id_historial_partidas,
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
  const nro= req.body.nro;
 const  fecha_hora= req.body.fecha_hora;
 const id_jugadores=req.body.id_jugadores;
 const id_abitros=req.body.id_abitros;
 const id_historial_partidas= req.body.id_historial_partidas;
 const id_partidas=req.body.id_partidas;
  connection.query(
    `update faltas SET nro=? , fecha_hora=? ,id_jugadores=?, id_arbitros=?, id_historial_partidas, id_partidas  where id=?;`,
    [nro,fecha_hora,id_jugadores, id_abitros,id_historial_partidas, id_partidas,id],

    (error,results) => {
      res.send(results);
      console.log(error)
    }
  );
}

//eliminando un jugador
function destroy(req, res) {

  const id = req.params.id;

  connection.query(` delete from faltas where id=${id}`,
  (
    error,results) => {
      res.send(results);

  });
}

module.exports.faltasController = {
  index,
  store,
  update,
  destroy,
};
