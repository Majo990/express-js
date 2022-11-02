
const { connection } = require("../db");

//select jugadores
function index(req, res) {
  // with placeholder
  connection.query(` select  e.*,j.nombre as nombre_jugadores from entrenadores e
  left outer join  jugadores j
  on  j.id=id_jugadores`, function (err, results) {
    res.send(results);
  });
}

//creando un jugadores
function store(req, res) {
  const data = req.body;
  const nombre = data.nombre;
  const id_jugadores = data.id_jugadores;

  connection.query(
    `insert into entrenadores(
        nombre,
        id_jugadores)
    values (?)`,
    [
      [
        nombre,
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
 const  id_jugadores= req.body.id_jugadores;

  connection.query(
    `update entrenadores SET nombre=? , id_jugadores=? where id=?;`,
    [nombre,id_jugadores,id],

    (error,results) => {
      res.send(results);
      console.log(error)
    }
  );
}

//eliminando un jugador
function destroy(req, res) {

  const id = req.params.id;

  connection.query(` delete from entrenadores where id=${id}`,
  (
    error,results) => {
      res.send(results);

  });
}

module.exports.entrenadoresController = {
  index,
  store,
  update,
  destroy,
};

