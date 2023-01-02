
const { connection } = require("../db");

//select jugadores
function index(req, res) {
  // with placeholder
  connection.query(`

  select cep.*,p.nombre as nombre_partidas,e.nombre as nombre_estadios  from canchas_estadios_partidas cep
  left outer join partidas p
  on p.id= cep.id_partidas
  ON e.id = cep.id_estadios
 `, function (err, results) {
    res.send(results);
  });
}

//creando un jugadores
function store(req, res) {
  const data = req.body;
  const nombre= data.nombre;
  const id_partidas=data.id_partidas;
  const id_estadios= data.id_estadios;


  connection.query(
    `insert into estadios_partidas(
        nombre,
      id_partidas,
        id_estadios)
    values (?)`,
    [
      [
        nombre,
        id_partidas,
        id_estadios,
      ],
    ],
    (error,results) => {
      console.log(error)
      res.send(results);
    }
  );
}

//actualizando juadores
function update(req, res) {
  const id = req.params.id;
  //const { nombre, nacionalidad, sejuego, nombre_torneos, edad, sexo } = req.body;
const nombre= req.body.nombre;
 const  id_partidas= req.body.id_partidas;
 const id_estadios=req.body.id_estadios;
  connection.query(
    `update estadios_partidas SET nombre=?,id_partidas=?,id_estadios=? where id=?;`,
    [nombre,id_partidas,id_estadios,id],

    (error,results) => {
      res.send(results);
      console.log(error)
    }
  );
}

//eliminando un jugador
function destroy(req, res) {

  const id = req.params.id;

  connection.query(` delete from estadios_partidas where id=${id}`,
  (
    error,results) => {
      res.send(results);

  });
}

module.exports.estadios_partidasController = {
  index,
  store,
  update,
  destroy,
};
