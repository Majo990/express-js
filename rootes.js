

const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))
// app.use(express.bodyParser());
app.use(bodyParser.json())

app.listen(3000)
console.log("servidor corriendo en http:localhost:3000");

app.get('/jugadores', function (req, res) {
    console.log('partidas,ruta');
  
    // with placeholder
    connection.query(
      'SELECT * FROM `jugadores`',
      function (err, results) {
        res.send(results)
      }
    );
  
    console.log(req.method);
  })
  
  //creando un producto
  app.post('/jugadores', function (req, res)
  const nombre = req.body.nombre,
  const nacionalidad = req.body.nacionalidad,
  const id_entrenadores = req.body.id_entrenadores,
  const set = req.body.set ,
  const nombre_torneos = req.body.nombre_torneos,
  const edad = req.body.edad,
  const sexo = req.body.sexo,
  const id_arbitros = req.body.id_arbitros,
  const id_equipos = req.id_equipos,
  const id_torneos = req.id_torneos,
  const id_sanciones = req.id_sanciones,

  
 `"insert into jugadores(nombre,nacionalidad,id_entrenadores,`set`,nombre_torneos,edad,sexo,id_arbitros,id_equipos,id_torneos,id_sanciones) 
values(${nombre},${nacionalidad},${id_entrenadores},${set},);"´
  {
    const partidas = req.body;
  
    console.log(req.method);
    console.log(partidas);
    res.send("Ok")
  })
  
  //actualizando un producto
  app.put('/partidass/:id', function (req, res) {
    const id = req.params
    const partida = req.body;
    console.log(req.method);
    console.log(id);
    console.log(partida);
  
    res.send("Ok")
  })
  
  
  //eliminando un producto
  app.delete('/partidas/:id', function (req, res) {
    const id = req.params
    console.log(req.method);
    console.log(id);
    res.send("Ok")
  })
  module.exports = app
  