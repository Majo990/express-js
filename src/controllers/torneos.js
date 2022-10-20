
const { connection } = require("../db");

//select jugadores
function index(req, res) {
  // with placeholder
  connection.query("SELECT * FROM  torneos", function (err, results) {
    res.send(results);
  });
}

//creando un jugadores
function store(req, res) {
  const data = req.body;
  const fecha = data.fecha;
  const id_estadios = data.id_estadios;
  const pais=data.pais;
  const nombre=data.nombre;
  const ciudad=data.ciudad;

  connection.query(
    `insert into torneos(
        
        fecha,
        id_estadios,
        pais,
        nombre,
        ciudad) 
    values (?)`,
    [
      [
        fecha,
        id_estadios,
        pais,
        nombre,
        ciudad,
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
    const fecha=req.body.fecha;
    const id_estadios=req.body.id_estadios;
    const pais=req.body.pais;
  const nombre = req.body.nombre;
 const  ciudad= req.body.ciudad;
  connection.query(
    `update torneos SET fecha=?,id_estadios=?,pais=?,nombre=?,ciudad=? where id=?;`,
    [fecha,id_estadios,pais,nombre,ciudad,id],

    (error,results) => {
      res.send(results);
      console.log(error)
    }
  );
}

//eliminando un jugador
function destroy(req, res) {
  
  const id = req.params.id;

  connection.query(` delete from torneos where id=${id}`, 
  (
    error,results) => {
      res.send(results);
  
  });
}

module.exports.torneosController = {
  index,
  store,
  update,
  destroy,
};