


const { connection } = require("../db");

//select jugadores
function index(req, res) {
  // with placeholder
  connection.query("SELECT * FROM  roles", function (err, results) {
    res.send(results);
  });
}

//creando un jugadores
function store(req, res) {
  const data = req.body;
  const descripcion = data.descripcion;

  connection.query(
    `insert into roles(
        descripcion)
    values (?)`,
    [
      [
        descripcion,

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
  const descripcion = req.body.descripcion;
  connection.query(
    `update roles SET descripcion=?  where id=?;`,
    [descripcion,id],

    (error,results) => {
      res.send(results);
      console.log(error)
    }
  );
}

//eliminando un jugador
function destroy(req, res) {

  const id = req.params.id;

  connection.query(` delete from roles where id=${id}`,
  (
    error,results) => {
      res.send(results);

  });
}

module.exports.rolesController = {
  index,
  store,
  update,
  destroy,
};


//
