const { connection } = require("../db");

//select jugadores
function index(req, res) {
  // with placeholder
  connection.query(`select * from arbitros`, function (err, results) {
    res.send(results);
  });
}

//creando un jugadores
function store(req, res) {
  const data = req.body;
  const nombre = data.nombre;
  const apellido = data.apellido;
  const edad = data.edad;
  const sexo = data.sexo;
  const altura = data.altura;
  const peso = data.peso;
  const fecha_nacimiento = data.fecha_nacimiento;
  const nombre_paises = data.nombre_paises;
  const nombre_ciudades = data.nombre_ciudades;

  connection.query(
    `insert into arbitros(
        nombre,
        apellido,
        edad,
        sexo,
        altura,
        peso,
        fecha_nacimiento,
        nombre_paises,
        nombre_ciudades
        )
    values (?)`,
    [
      [
        nombre,
        apellido,
        edad,
        sexo,
        altura,
        peso,
        fecha_nacimiento,
        nombre_paises,
        nombre_ciudades,
      ],
    ],
    (error, results) => {
      console.log(error);
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
  const edad = req.body.edad;
  const sexo = req.body.sexo;
  const altura = req.body.altura;
  const peso = req.body.peso;
  const fecha_nacimiento = req.body.fecha_nacimiento;
  const nombre_paises = req.body.nombre_paises;
  const nombre_ciudades = req.body.nombre_ciudades;

  connection.query(
    `update arbitros SET nombre=?,apellido=?,edad=?,sexo=?,altura=?,peso=?,fecha_nacimiento=?,nombre_paises=?,nombre_ciudades=? where id=?;`,
    [
      nombre,
      apellido,
      edad,
      sexo,
      altura,
      peso,
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

  connection.query(` delete from arbitros where id=${id}`, (error, results) => {
    res.send(results);
  });
}

module.exports.arbitrosController = {
  index,
  store,
  update,
  destroy,
};

//
