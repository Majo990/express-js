const { connection } = require("../db");

//select jugadores
function index(req, res) {
  // with placeholder
  connection.query("SELECT * FROM premios", function (err, results) {
    res.send(results);
  });
}

//creando un jugadores
function store(req, res) {
  const data = req.body;
  const nombre = data.nombre;
  const tipo = data.tipo;
  const stock = data.stock;

  connection.query(
    `insert into premios(
        nombre,
        tipo,
        stock) 
    values (?)`,
    [
      [
        nombre,
        tipo,
        stock,
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
  const tipo= req.body.tipo;
 const  stock= req.body.stock;
  connection.query(
    `update premios SET nombre=? ,tipo=?, stock=? where id=?;`,
    [nombre,tipo,stock,id],

    (error,results) => {
      res.send(results);
      console.log(error)
    }
  );
}

//eliminando un jugador
function destroy(req, res) {
  
  const id = req.params.id;

  connection.query(` delete from premios where id=${id}`, 
  (
    error,results) => {
      res.send(results);
  
  });
}

module.exports.premiosController = {
  index,
  store,
  update,
  destroy,
};


// 