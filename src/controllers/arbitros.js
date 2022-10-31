
const { connection } = require("../db");

//select jugadores
function index(req, res) {
  // with placeholder
  connection.query(`select a.*,s.nombre as nombre_sanciones from arbitros a 
  left outer join sanciones s  
  on  s.id = a.id_sanciones `, function (err, results) {
    res.send(results);
  });
}

//creando un jugadores
function store(req, res) {
  const data = req.body;
  const nombre = data.nombre;
  const id_sanciones = data.id_sanciones;

  connection.query(
    `insert into arbitros(
        nombre,
        id_sanciones) 
    values (?)`,
    [
      [
        nombre,
        id_sanciones,
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
  const nombre = req.body.nombre;
 const  id_sanciones= req.body.id_sanciones;
  connection.query(
    `update arbitros SET nombre=? , id_sanciones=? where id=?;`,
    [nombre,id_sanciones,id],

    (error,results) => {
      res.send(results);
      console.log(error)
    }
  );
}

//eliminando un jugador
function destroy(req, res) {
  
  const id = req.params.id;

  connection.query(` delete from arbitros where id=${id}`, 
  (
    error,results) => {
      res.send(results);
  
  });
}

module.exports.arbitrosController = {
  index,
  store,
  update,
  destroy,
};


// 