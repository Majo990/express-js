


const { connection } = require("../db");

//select jugadores
function index(req, res) {
  // with placeholder
  connection.query("SELECT * FROM  estadios", function (err, results) {
    res.send(results);
  });
}

//creando un jugadores
function store(req, res) {
  const data = req.body;
  const nombre = data.nombre;
  const pais= data.pais;
  const ciudad=data.ciudad;
  const id_jugadores=data.id_jugadores;

  connection.query(
    `insert into estadios(
        nombre,
        pais,
        ciudad,
        id_jugadores) 
    values (?)`,
    [
      [
        nombre,
        pais,ciudad,
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
  const nombre = req.body.nombre;
  const pais= req.body.pais;
  const ciudad=req.body.ciudad;
  const id_jugadores=re.body.id_jugadores;

  connection.query(
    `update estadios SET nombre=? , pais=?, ciudad=? , id_jugadores=? where id=?;`,
    [nombre,pais,ciudad,id_jugadores,id],

    (error,results) => {
      res.send(results);
      console.log(error)
    }
  );
}

//eliminando un jugador
function destroy(req, res) {
  
  const id = req.params.id;

  connection.query(` delete from estadios where id=${id}`, 
  (
    error,results) => {
      res.send(results);
  
  });
}

module.exports.estadiosController = {
  index,
  store,
  update,
  destroy,
};