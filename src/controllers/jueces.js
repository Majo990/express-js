
const { connection } = require("../db");

//select jugadores
function index(req, res) {
  // with placeholder
  connection.query(`select j.*,p.nombre as nombre_paises, c.nombre as nombre_ciudades  from jueces j
  left outer join paises p
  on p.id=j.id_paises
   left outer join ciudades c
  on c.id=j.id_ciudades `, function (err, results) {
    res.send(results);
  });
}

//creando un jugadores
function store(req, res) {
  const data = req.body;
  const nombre = data.nombre;
  const apellido= data.apellido;
  const fecha_nacimiento= data.fecha_nacimiento;
  const edad=data.edad;
  const sexo=data.sexo;
  const id_paises=data.id_paises;
  const id_ciudades=data.id_ciudades;

  connection.query(
    `insert into jueces(
        nombre,
        apellido,
        fecha_nacimiento,
        edad,
        sexo,
        id_paises,
        id_ciudades)
    values (?)`,
    [
      [
        nombre,
        apellido,
        fecha_nacimiento,
        edad,
        sexo,
        id_paises,
        id_ciudades,
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
  const apellido=req.body.apellido;
  const fecha_nacimiento=req.body.fecha_nacimiento;
  const edad=req.body.edad;
  const sexo=req.body.sexo;
  const id_paises=req.body.id_paises;
  const id_ciudades=req.body.id_ciudades;
  connection.query(
    `update jueces SET nombre=?,apellido=?,fecha_nacimiento=?,edad=?,sexo=?,id_paises=?, id_ciudades where id=?;`,
    [nombre,apellido,fecha_nacimiento,edad,sexo,id_paises,id_ciudades,id],

    (error,results) => {
      res.send(results);
      console.log(error)
    }
  );
}

//eliminando un jugador
function destroy(req, res) {

  const id = req.params.id;

  connection.query(` delete from jueces where id=${id}`,
  (
    error,results) => {
      res.send(results);

  });
}

module.exports.juecesController = {
  index,
  store,
  update,
  destroy,
};
