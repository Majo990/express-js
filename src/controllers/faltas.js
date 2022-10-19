
const { connection } = require("../db");

//select jugadores
function index(req, res) {
  // with placeholder
  connection.query("SELECT * FROM  faltas", function (err, results) {
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
  connection.query(
    `update faltas SET nro=? , fecha_hora=? id_jugadores=? where id=?;`,
    [nro,fecha_hora,id_jugadores,id],

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
