const { connection } = require("../db");

//select jugadores
function index(req, res) {
  // with placeholder
  connection.query("SELECT * FROM  jugadores", function (err, results) {
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
  const nombre_torneos = data.nombre_torneos;
  const edad = data.edad;
  const sexo = data.sexo;
  const id_arbitros = data.id_arbitros;
  const id_equipos = data.id_equipos;
  const id_torneos = data.id_torneos;
  const id_sanciones = data.id_sanciones;

  connection.query(
    `insert into jugadores(
        nombre,
        nacionalidad,
        id_entrenadores,
        sejuego,
        nombre_torneos,
        edad,
        sexo,
        id_arbitros,
        id_equipos,
        id_torneos,
        id_sanciones) 
    values (?)`,
    [
      [
        nombre,
        nacionalidad,
        id_entrenadores,
        sejuego,
        nombre_torneos,
        edad,
        sexo,
        id_arbitros,
        id_equipos,
        id_torneos,
        id_sanciones,
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
  const sejuego=req.body.sejuego;
  const nombre_torneos=req.body.nombre_torneos;
  const edad = req.edad;
  const sexo = req.sexo;
  const id_abitros= req.id_abitros;
  const id_equipos=req.id_equipos;
  const id_torneos=req.id_torneos;
  const id_sanciones=req.id_sanciones;


  connection.query(
    `update jugadores SET nombre=?,nacionalidad=?,sejuego=?,nombre_torneos=?,edad=?,sexo=? where id=?;`,
    [nombre, nacionalidad,id_entrenadores, sejuego,nombre_torneos,edad,sexo,id_abitros,id_equipos,id_torneos,id_sanciones,id],

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
