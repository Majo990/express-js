const { connection } = require("../db");

//select jugadores
function index(req, res) {
  // with placeholder
  connection.query(
    `
    select e.*,j.nombre as nombre_jugadores, cep.nombre as nombre_canchas_estadios_partidas, p.nombre as nombre_partidas from estadios e
    left outer join jugadores j
    on j.id=e.id_jugadores
    left outer join canchas_estadios_partidas cep
    on cep.id=e.id_canchas_estadios_partidas
    left outer join partidas p
    on p.id=e.id_partidas

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
  const id_canchas_estadios_partidas = data.id_canchas_estadios_partidas;
  const cesped = data.cesped;
  const administrador = data.administrador;
  const propietario = data.propietario;
  const ubigeo = data.ubigeo;
  const direccion = data.direccion;
  const nombre_paises = data.nombre_paises;
  const nombre_ciudades = data.nombre_ciudades;
  const id_partidas = data.id_partidas;

  connection.query(
    `insert into estadios(
        nombre,
        id_jugadores,
        id_canchas_estadios_partidas,
        cesped,
        administrador,
        propietario,
        ubigeo,
        direccion,
        nombre_paises,
        nombre_ciudades,
        id_partidas)
    values (?)`,
    [
      [
        nombre,
        id_jugadores,
        id_canchas_estadios_partidas,
        cesped,
        administrador,
        propietario,
        ubigeo,
        direccion,
        nombre_paises,
        nombre_ciudades,
        id_partidas,
      ],
    ],
    (error, results) => {
      res.send(results);
      console.log(error);
    }
  );
}

//actualizando juadores
function update(req, res) {
  const id = req.params.id;
  //const { nombre, nacionalidad, sejuego, nombre_torneos, edad, sexo } = req.body;
  const nombre = req.body.nombre;
  const id_jugadores = req.body.id_jugadores;
  const id_canchas_estadios_partidas = req.body.id_canchas_estadios_partidas;
  const cesped = req.body.cesped;
  const administrador = req.body.administrador;
  const propietario = req.body.propietario;
  const ubigeo = req.body.ubigeo;
  const direccion = req.body.direccion;
  const nombre_paises = req.body.nombre_paises;
  const nombre_ciudades = req.body.nombre_ciudades;
  const id_partidas = req.body.id_partidas;

  connection.query(
    `update estadios SET nombre=?,id_jugadores=?,id_canchas_estadios_partidas=?,cesped=?,administrador=?,propietario=?,ubigeo=?,direccion=?,nombre_paises=?,nombre_ciudades=?,id_partidas=? where id=?;`,
    [
      nombre,
      id_jugadores,
      id_canchas_estadios_partidas,
      cesped,
      administrador,
      propietario,
      ubigeo,
      direccion,
      nombre_paises,
      nombre_ciudades,
      id_partidas,
      id,
    ],

    console.log(update),
    (error, results) => {
      res.send(results);
      console.log(error);
    }
  );
}

//eliminando un jugador
function destroy(req, res) {
  const id = req.params.id;

  connection.query(` delete from estadios where id=${id}`, (error, results) => {
    res.send(results);
  });
}

module.exports.estadiosController = {
  index,
  store,
  update,
  destroy,
};
