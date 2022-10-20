

const { connection } = require("../db");

//select jugadores
function index(req, res) {
  // with placeholder
  connection.query("SELECT * FROM  partidas_jugadores", function (err, results) {
    res.send(results);
  });
}

//creando un jugadores
function store(req, res) {
  const data = req.body;
  const id_partidas=data.id_partidas;
  const id_jugadores = data.id_jugadores;

  connection.query(
    `insert into partidas_jugadores(
        id_partidas,
        id_jugadores) 
    values (?)`,
    [
      [
        id_partidas,
        id_jugadores,
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
  
 const  id_partidas= req.body.id_partidas;
 const id_jugadores=req.body.id_jugadores;
  connection.query(
    `update partidas_jugadores SET id_partidas=?, id_jugadores=? where id=?;`,
    [id_partidas,id_jugadores,id],

    (error,results) => {
      res.send(results);
      console.log(error)
    }
  );
}

//eliminando un jugador
function destroy(req, res) {
  
  const id = req.params.id;

  connection.query(` delete from partidas_jugadores where id=${id}`, 
  (
    error,results) => {
      res.send(results);
  
  });
}

module.exports.partidas_jugadoresController = {
  index,
  store,
  update,
  destroy,
};
