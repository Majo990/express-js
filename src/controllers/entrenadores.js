const { connection } = require("../db");

//select jugadores
function index(req, res) {
  // with placeholder
  connection.query(
    `
  select e.*, j.nombre as nombre_jugadores  from entrenadores e
left outer join jugadores j
on j.id=e.id_jugadores
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
  const id_jugadores = data.id_jugadores;
  const apellido = data.apellido;
  const edad = data.edad;
  const sexo = data.sexo;
  const fecha_nacimiento = data.fecha_nacimiento;
  const nombre_paises = data.nombre_paises;
  const nombre_ciudades = data.nombre_ciudades;

  connection.query(
    `insert into entrenadores(
        nombre,
        id_jugadores,
        apellido,
        edad,
        sexo,
        fecha_nacimiento,
        nombre_paises,
        nombre_ciudades)
    values (?)`,
    [
      [
        nombre,
        id_jugadores,
        apellido,
        edad,
        sexo,
        fecha_nacimiento,
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
  const id_jugadores = req.body.id_jugadores;
  const apellido = req.body.apellido;
  const edad = req.body.edad;
  const sexo = req.body.sexo;
  const fecha_nacimiento = req.body.fecha_nacimiento;
  const nombre_paises = req.body.nombre_paises;
  const nombre_ciudades = req.body.nombre_ciudades;

  connection.query(
    `update entrenadores SET nombre=?,id_jugadores=?,apellido=?,edad=?,sexo=?,fecha_nacimiento=?,nombre_paises=?,nombre_ciudades=? where id=?;`,
    [
      nombre,
      id_jugadores,
      apellido,
      edad,
      sexo,
      fecha_nacimiento,
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

  connection.query(
    ` delete from entrenadores where id=${id}`,
    (error, results) => {
      res.send(results);
    }
  );
}

module.exports.entrenadoresController = {
  index,
  store,
  update,
  destroy,
};
