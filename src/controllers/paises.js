const { connection } = require("../db");
const axios = require("axios");

//select jugadores
async function index(req, res) {
  const instance = axios.create({
    baseURL: "https://countriesnow.space/api/v0.1/countries",
  });

  const r = await instance.get("/");
  res.send(r.data.data);
}

//creando un jugadores
function store(req, res) {
  const data = req.body;
  const nombre = data.nombre;

  connection.query(
    `insert into arbitros(
        nombre)
    values (?)`,
    [[nombre]],
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
  connection.query(
    `update arbitros SET nombre=? where id=?;`,
    [nombre, id],
    (error, results) => {
      res.send(results);
      console.log(error);
    }
  );
}

//eliminando un jugador
function destroy(req, res) {
  const id = req.params.id;

  connection.query(`delete from arbitros where id=${id}`, (error, results) => {
    res.send(results);
  });
}

module.exports.paisesController = {
  index,
  store,
  update,
  destroy,
};
