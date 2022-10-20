
const { connection } = require("../db");

//select jugadores
function index(req, res) {
  // with placeholder
  connection.query("SELECT * FROM  rondas", function (err, results) {
    res.send(results);
  });
}

//creando un jugadores
function store(req, res) {
  const data = req.body;
  const nro = data.nro;

  connection.query(
    `insert into rondas(
        nro) 
    values (?)`,
    [
      [
        nro,
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
  const nro = req.body.nro;
  connection.query(
    `update rondas SET nro=?  where id=?;`,
    [nro,id],

    (error,results) => {
      res.send(results);
      console.log(error)
    }
  );
}

//eliminando un jugador
function destroy(req, res) {
  
  const id = req.params.id;

  connection.query(` delete from rondas where id=${id}`, 
  (
    error,results) => {
      res.send(results);
  
  });
}

module.exports.rondasController = {
  index,
  store,
  update,
  destroy,
};
