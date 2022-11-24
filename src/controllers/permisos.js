
const { connection } = require("../db");

//select jugadores
function index(req, res) {
  // with placeholder
  connection.query(` select p.*, u.usuarios as usuarios_usuarios,r.descripcionrol  as descripcion_roles from permisos p
  left outer join usuarios u
  on u.id=p.id_usuarios
   left outer join roles r
  on r.id=p.id_roles`, function (err, results) {
    res.send(results);
  });
}

//creando un jugadores
function store(req, res) {
  const data = req.body;
  const id_usuarios=data.id_usuarios;
  const descripcionpermiso = data.descripcionpermiso;
  const id_roles = data.id_roles;

  connection.query(
    `insert into permisos(
        id_usuarios,
        descripcionpermiso,
        id_roles)
    values (?)`,
    [
      [
        id_usuarios,
        descripcionpermiso,
        id_roles,
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
  const id_usuarios=req.id_usuarios;
  const descripcionpermiso= req.body.descripcionpermiso;
 const  id_roles= req.body.id_roles;
  connection.query(
    `update permisos SET id_usuarios=?,descripcionpermiso=?,id_roles=? where id=?;`,
    [id_usuarios,descripcionpermiso,id_roles,id],

    (error,results) => {
      res.send(results);
      console.log(error)
    }
  );
}

//eliminando un jugador
function destroy(req, res) {

  const id = req.params.id;

  connection.query(` delete from permisos where id=${id}`,
  (
    error,results) => {
      res.send(results);

  });
}

module.exports.permisosController = {
  index,
  store,
  update,
  destroy,
};
