const { query } = require("express");
const { connection } = require("../db");

//select jugadores
function index(req, res) {
  // with placeholder
  connection.query(`

  select  j.*,e.nombre as nombre_entrenadores , a.nombre as nombre_arbitros, e2.nombre as nombre_equipos,
  t.nombre as nombre_torneos,s.nombre as nombre_sanciones, p.nombre as nombre_paises, c.nombre as nombre_ciudades from jugadores j
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
  left outer join paises p
  on p.id=j.id_paises
  left outer join ciudades c
  on c.id=j.id_ciudades
  `,
  function (err, results) {
    res.send(results);
  });
}

//creando un jugadores
function store(req, res) {
  const data = req.body;
  const nombre = data.nombre;
  const nacionalidad = data.nacionalidad;
  const id_entrenadores = data.id_entrenadores;
  const sejuego = data.sejuego;
  const edad = data.edad;
  const sexo = data.sexo;
  const id_arbitros = data.id_arbitros;
  const id_equipos = data.id_equipos;
  const id_torneos = data.id_torneos;
  const id_sanciones = data.id_sanciones;
  const altura= data.altura;
  const peso=data.peso;
  const id_paises=data.id_paises;
  const id_ciudades=data.id_ciudades;
  const posicion=data.posicion;
  const reside_paises=data.reside_paises;

  connection.query(
    `insert into jugadores(
        nombre,
        nacionalidad,
        id_entrenadores,
        sejuego,
        edad,
        sexo,
        id_arbitros,
        id_equipos,
        id_torneos,
        id_sanciones,
        altura,
        peso,
        id_paises,
        id_ciudades,
        posicion,
        reside_paises)
    values (?)`,
    [
      [
        nombre,
        nacionalidad,
        id_entrenadores,
        sejuego,
        edad,
        sexo,
        id_arbitros,
        id_equipos,
        id_torneos,
        id_sanciones,
        altura,
        peso,
        id_paises,
        id_ciudades,
        posicion,
        reside_paises,
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
  const id_entrenadores=req.body.id_entrenadores;
//  const sejuego=req.body.sejuego; puntaje
  const edad = req.edad;
  const sexo = req.sexo;
  const id_abitros= req.id_abitros;
  const id_equipos=req.id_equipos;
  const id_torneos=req.id_torneos;
  const id_sanciones=req.id_sanciones;
  const altura =req.altura;
  const peso=req.peso;
  const id_paises=req.id_paises;
  const id_ciudades=req.id_ciudades;
  const posicion=req.posicion;
  const reside_paises=req.posicion;



  connection.query(
    `update jugadores SET nombre=?,nacionalidad=?,sejuego=?,edad=?,sexo=?,altura=?,peso=?,id_paises=?,id_ciudades=?,posicion=?,reside_paises=? where id=?;`,
    [nombre, nacionalidad,id_entrenadores, sejuego,edad,sexo,id_abitros,id_equipos,id_torneos,id_sanciones,altura,peso,id_paises,id_ciudades,posicion,reside_paises,id],


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
