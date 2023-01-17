const { connection } = require("../db");

//select jugadores
function index(req, res) {
  // with placeholder
  connection.query(
    `select p.*,e.nombre as nombre_equipos, j.nombre as nombre_jugadores from  premios p
  left outer join equipos e
  on e.id = p.id_equipos
  left outer join jugadores j
  on j.id =p.id_jugadores
`,
    function (err, results) {
      res.send(results);
    }
  );
}

//creando un jugadores
function store(req, res) {
  const data = req.body;
  const nombre = data.nombre;
  const tipo = data.tipo;
  const id_equipos = data.id_equipos;
  const id_jugadores = data.id_jugadores;

  connection.query(
    `insert into premios(
        nombre,
        tipo,
        id_equipos,
        id_jugadores)
    values (?)`,
    [[nombre, tipo, id_equipos, id_jugadores]],
    (error, results) => {
      res.send(results);
    }
  );
}

//actualizando juadores
function update(req, res) {
  const id = req.params.id;
  //const { nombre, nacionalidad, sejuego, nombre_torneos, edad, sexo } = req.body;
  const nombre = req.body.nombre;
  const tipo = req.body.tipo;
  const id_equipos = req.body.id_equipos;
  const id_jugadores = req.body.id_jugadores;
  connection.query(
    `update premios SET nombre=?,tipo=?,id_equipos=?,id_jugadores=? where id=?;`,
    [nombre, tipo, id_equipos, id_jugadores, id],

    (error, results) => {
      res.send(results);
      console.log(error);
    }
  );
}

//eliminando un jugador
function destroy(req, res) {
  const id = req.params.id;

  connection.query(` delete from premios where id=${id}`, (error, results) => {
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
