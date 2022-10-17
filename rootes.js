const express = require("express");
const app = express();
const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "pma",
  database: "tenis",
});

//select jugadores
app.get("/jugadores", function (req, res) {
  console.log("jugadores,ruta");

  // with placeholder
  connection.query("SELECT * FROM  jugadores", function (err, results) {
    res.send(results);
  });

  console.log(req.method);
});

//creando un jugadores
app.post("/jugadores", function (req, res) {
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
  values (?)`, [[nombre,nacionalidad,id_entrenadores,sejuego,nombre_torneos,edad,sexo,id_arbitros,id_equipos,id_torneos,id_sanciones]],
    (error) => {
      console.log(error);
      console.log(data.method);
      res.send("Ok");
    }
  );
});

//actualizando juadores
app.put("/jugadores/:id", function (req, res) {
  const id = req.id;
  const nombre = req.nombre;
  const nacionalidad = req.nacionalidad;
  const sejuego = req.sejuego;
  const nombre_torneos = req.nombre_torneos;
  const edad = req.edad;
  const sexo = req.sexo;
  connection.query(
    `update jugadores SET nombre=?,nacionalidad=?, sejuego= ?, nombre_torneos=?,edad =?,sexo=? where id=?;`,
    [nombre, nacionalidad, sejuego, nombre_torneos, edad, sexo, id],

    () => {
      console.log(req.method);
      console.log(id);

      res.send("Ok");
    }
  );
});

//eliminando un jugador
app.delete("/jugadores/:id", function (req, res) {
  const id = req.id;

  connection.query(` delete from jugadores where id `, () => {
    console.log(req.method);
    console.log(id);
    res.send("Ok");
  });
});

module.exports = app;
