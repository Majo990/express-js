

const { connection } = require("../db");

//select jugadores
function index(req, res) {
  // with placeholder
  connection.query("SELECT * FROM  arbitros", function (err, results) {
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
    (error) => {
      res.send("Ok");
    }
  );
}

//actualizando juadores
function update(req, res) {
  const id = req.params.id;
  //const { nombre, nacionalidad, sejuego, nombre_torneos, edad, sexo } = req.body;
  const nombre = req.body.nombre;
  connection.query(
    `update arbitros SET nombre=? where id=?;`,
    [nombre,id_sanciones,id],

    () => {
      res.send("Ok");
    }
  );
}

//eliminando un jugador
function destroy(req, res) {
  
  const id = req.params.id;

  connection.query(` delete from arbitros where id=${id}`, () => {
    res.send("Ok");
  });
}

module.exports.arbitrosController = {
  index,
  store,
  update,
  destroy,
};


// 