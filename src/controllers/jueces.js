const { connection } = require("../db");

//select jugadores
function index(req, res) {
  // with placeholder
  connection.query(`select * from jueces j `, function (err, results) {
    res.send(results);
  });
}

//creando un jugadores
function store(req, res) {
  const data = req.body;
  const nombre = data.nombre;
  const apellido = data.apellido;
  const fecha_nacimiento = data.fecha_nacimiento;
  const edad = data.edad;
  const sexo = data.sexo;
  const nombre_paises = data.nombre_paises;
  const nombre_ciudades = data.nombre_ciudades;

  connection.query(
    `insert into jueces(
        nombre,
        apellido,
        fecha_nacimiento,
        edad,
        sexo,
        nombre_paises,
        nombre_ciudades
        )
    values (?)`,
    [
      [
        nombre,
        apellido,
        fecha_nacimiento,
        edad,
        sexo,
        nombre_paises,
        nombre_ciudades,
      ],
    ],
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
  const apellido = req.body.apellido;
  const fecha_nacimiento = req.body.fecha_nacimiento;
  const edad = req.body.edad;
  const sexo = req.body.sexo;
  const nombre_paises = req.body.nombre_paises;
  const nombre_ciudades = req.body.nombre_ciudades;
  connection.query(
    `update jueces SET nombre=?,apellido=?,fecha_nacimiento=?,edad=?,sexo=?,nombre_paises=?,nombre_ciudades=? where id=?;`,
    [
      nombre,
      apellido,
      fecha_nacimiento,
      edad,
      sexo,
      nombre_paises,
      nombre_ciudades,
      id,
    ],

    (error, results) => {
      res.send(results);
      console.log(error);
    }
  );
}

//eliminando un jugador
function destroy(req, res) {
  const id = req.params.id;

  connection.query(`delete from jueces where id=${id}`, (error, results) => {
    res.send(results);
  });
}

module.exports.juecesController = {
  index,
  store,
  update,
  destroy,
};
