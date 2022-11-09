
const { connection } = require("../db");

//select jugadores
function index(req, res) {
  // with placeholder
  connection.query(`

  select   p.*,u.usuarios,p2. nombre as nombre_paises, c.nombre as nombre_ciudades from perfiles p
  left outer join  usuarios u
  on  u.id = p.id_usuarios
  left outer join paises p2
  on p2.id = p.id_paises
  left outer join ciudades c
  on c.id= p.id_ciudades `, function (err, results) {
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
  const pais = data.pais;
  const ciudad = data.ciudad;
  const dni = data.dni;
  const nacionalidad= data.nacionalidad;
  const email = data.email;
  const direccion = data.direccion;
  const celular = data.celular;
  const codigo_postal = data.codigo_postal;
  const id_usuarios = data.id_usuarios;
  const id_paises=data.id_paises;
  const id_ciudades=data.id_ciudades;

  connection.query(
    `insert into perfiles(
        nombre,
        apellido,
        edad,
        sexo,
        pais,
        ciudad,
        dni,
        nacionalidad,
        email,
        direccion,
        celular,
        codigo_postal,
        id_usuarios,
        id_paises,
        id_ciudades)
    values (?)`,
    [
      [
        nombre,
        apellido,
        edad,
        sexo,
        pais,
        ciudad,
        dni,
        nacionalidad,
        email,
        direccion,
        celular,
        codigo_postal,
        id_usuarios,
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
  const apellido = req.body.apellido;
  const edad = req.body.edad;
  const sexo = req.body.sexo;
  const pais = req.body.pais;
  const ciudad = req.body.ciudad;
  const dni = req.body.dni;
  const nacionalidad= req.body.nacionalidad;
  const email = req.body.email;
  const direccion = req.body.direccion;
  const celular = req.body.celular;
  const codigo_postal = req.body.codigo_postal;
  const id_usuarios = req.body.id_usuarios;
  const id_paises=req.id_paises;
  const id_ciudades=req.id_ciudades;



  connection.query(
    `update perfiles SET nombre=?,apellido=?,edad=?,sexo=?,pais=?,ciudad=?,dni=?,nacionalidad=?,email=?,direccion=?,celular=?,codigo_postal=?,id_usuarios=?,id_paises=?,id_ciudades=? where id=?;`,
    [nombre,apellido,edad,sexo,pais,ciudad,dni,nacionalidad,email,direccion,celular,codigo_postal,id_usuarios,id_paises,id_ciudades,id],

    (error,results) => {
      res.send(results);
      console.log(error)
    }
  );
}

//eliminando un jugador
function destroy(req, res) {

  const id = req.params.id;

  connection.query(` delete from perfiles where id=${id}`,
  (
    error,results) => {
      res.send(results);

  });
}

module.exports.perfilesController = {
  index,
  store,
  update,
  destroy,
};
