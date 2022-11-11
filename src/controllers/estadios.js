


const { connection } = require("../db");

//select jugadores
function index(req, res) {
  // with placeholder
  connection.query(`
  select e.*,j.nombre as nombre_jugadore,p.nombre as nombre_paises, c.nombre as nombre_ciudades from estadios e
  left outer join jugadores j
  on j.id=e.id_jugadores
  left outer join paises p
  on p.id =e.id_paises
  left outer join ciudades c
  on c.id =e.id_ciudades
   `, function (err, results) {
    res.send(results);
  });
}

//creando un jugadores
function store(req, res) {
  const data = req.body;
  const nombre = data.nombre;
  const id_jugadores=data.id_jugadores;
  const cancha=data.cancha;
  const departamento=data.departamento;
  const cesped=data.cesped;
  const administrador=data.administrador;
  const propietario=data.propietario;
  const ubigeo=data.ubigeo;
  const direccion=data.direccion;
  const id_paises=data.id_paises;
  const id_ciudades=data.id_ciudades;


  connection.query(
    `insert into estadios(
        nombre,
        id_jugadores,
        cancha,
        departamento,
        cesped,
        administrador,
        propietario,
        ubigeo,
        direccion,
        id_paises,
        id_ciudades)
    values (?)`,
    [
      [
        nombre,
        id_jugadores,
        cancha,
        departamento,
        cesped,
        administrador,
        propietario,
        ubigeo,
        direccion,
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
  const id_jugadores=req.body.id_jugadores;
  const cancha=req.body.cancha;
  const departamento=req.body.departamento;
  const cesped=req.body.cesped;
  const administrador=req.body.administrador;
  const propietario=req.body.propietario;
  const ubigeo=req.body.ubigeo;
  const direccion=req.body.direccion;
  const id_paises= req.body.paises;
  const id_ciudades=req.body.ciudades;



  connection.query(
    `update estadios SET nombre=?,id_jugadores=?,cancha=?,departamento=?,cesped=?,administrador=?,propietario=?,ubigeo=?,direccion=?,id_paises=?,id_ciudades=? where id=?;`,
    [nombre,id_jugadores,cancha,departamento,cesped,administrador,propietario,ubigeo,direccion,id_paises,id_ciudades,id],

 console.log(update),
    (error,results) => {
      res.send(results);
      console.log(error)
    }
  );
}

//eliminando un jugador
function destroy(req, res) {

  const id = req.params.id;

  connection.query(` delete from estadios where id=${id}`,
  (
    error,results) => {
      res.send(results);

  });
}

module.exports.estadiosController = {
  index,
  store,
  update,
  destroy,
};
