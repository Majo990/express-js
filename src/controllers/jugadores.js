const { query } = require("express");
const { connection } = require("../db");

//select jugadores
function index(req, res) {
  // with placeholder
  connection.query(
    `
  select  j.*,e.nombre as nombre_entrenadores , a.nombre as nombre_arbitros, e2.nombre as nombre_equipos,
  t.nombre as nombre_torneos,s.nombre as nombre_sanciones from jugadores j
  left outer join entrenadores e
  on e.id=j.id_entrenadores
  left outer join arbitros a
  on a.id =j.id_arbitros
  left outer join equipos e2
  on e2.id= j.id_equipos
  left outer join torneos t
  on t.id=j.id_torneos
  left outer join sanciones s
  on s.id =j.id_sanciones
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
  const nacionalidad = data.nacionalidad;
  const id_entrenadores = data.id_entrenadores;
  const edad = data.edad;
  const sexo = data.sexo;
  const id_arbitros = data.id_arbitros;
  const id_equipos = data.id_equipos;
  const id_torneos = data.id_torneos;
  const id_sanciones = data.id_sanciones;
  const altura = data.altura;
  const peso = data.peso;
  const nombre_paises = data.nombre_paises;
  const nombre_ciudades = data.nombre_ciudades;

  connection.query(
    `insert into jugadores(
        nombre,
        nacionalidad,
        id_entrenadores,
        edad,
        sexo,
        id_arbitros,
        id_equipos,
        id_torneos,
        id_sanciones,
        altura,
        peso,
        nombre_paises,
        nombre_ciudades
       )
    values (?)`,
    [
      [
        nombre,
        nacionalidad,
        id_entrenadores,
        edad,
        sexo,
        id_arbitros,
        id_equipos,
        id_torneos,
        id_sanciones,
        altura,
        peso,
        nombre_paises,
        nombre_ciudades,

      ],
    ],
    (error) => {
      res.send("Ok");
    }
  );
}

//actualizando juadores
function update(req, res) {
  const id = req.params.id;
  //const { nombre, nacionalidad, sejuego, nombre_torneos, edad, sexo } = req.body;
  const nombre = req.body.nombre;
  const nacionalidad = req.body.nacionalidad;
  const id_entrenadores = req.body.id_entrenadores;
  //  const sejuego=req.body.sejuego; puntaje
  const edad = req.body.edad;
  const sexo = req.body.sexo;
  const id_abitros = req.body.id_abitros;
  const id_equipos = req.body.id_equipos;
  const id_torneos = req.body.id_torneos;
  const id_sanciones = req.body.id_sanciones;
  const altura = req.body.altura;
  const peso = req.body.peso;
  const nombre_paises = req.body.nombre_paises;
  const nombre_ciudades = req.body.nombre_ciudades;

  connection.query(
    `update jugadores SET nombre=?,nacionalidad=?,sejuego=?,edad=?,sexo=?,altura=?,peso=?,nombre_paises=?,nombre_ciudades=? where id=?;`,
    [
      nombre,
      nacionalidad,
      id_entrenadores,
      edad,
      sexo,
      id_abitros,
      id_equipos,
      id_torneos,
      id_sanciones,
      altura,
      peso,
      nombre_paises,
      nombre_ciudades,
      id],

    () => {
      res.send("Ok");
    }
  );
}

//eliminando un jugador
function destroy(req, res) {
  const id = req.params.id;

  connection.query(` delete from jugadores where id=${id}`, () => {
    res.send("Ok");
  });
}

module.exports.jugadoresController = {
  index,
  store,
  update,
  destroy,
};
