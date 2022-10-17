
const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))
// app.use(express.bodyParser());
app.use(bodyParser.json())

app.listen(3000)
console.log("servidor corriendo en http:localhost:3000");


app.get('/', function (req, res) {
  res.send('Hello mundo ')
})

//obteniendo todos los jugadores
app.get('/jugadores', function (req, res) {
  const jugadores = [
    'jugador  1',
    'jugador  2',
    'jugador  3',
  ]
  console.log(req.method);
  res.send(jugadores)
})

//creando un jugadores
app.post('/jugadores', function (req, res) {
  const jugadores = req.body;

  console.log(req.method);
  console.log(jugadores);
  res.send("Ok")
})

//actualizando un jugadores
app.put('/jugadores/:id', function (req, res) {
  const id = req.params
  const jugador= req.body;
  console.log(req.method);
  console.log(id);
  console.log(jugador);

  res.send("Ok")
})


//eliminando un jugadores
app.delete('/jugadores/:id', function (req, res) {
  const id = req.params
  console.log(req.method);
  console.log(id);
  res.send("Ok")
})






//arbitros



//obteniendo todos los arbitros 
app.get('/arbitros', function (req, res) {
  const arbitros = [
    'arbitro  1',
    'arbitro  2',
    'arbitro  3',
  ]
  console.log(req.method);
  res.send(arbitros)
})

//creando un arbitros 
app.post('/arbitros', function (req, res) {
  const arbitros = req.body;

  console.log(req.method);
  console.log(arbitros);
  res.send("Ok")
})

//actualizando un arbitros
app.put('/arbitros/:id', function (req, res) {
  const id = req.params
  const arbitro= req.body;
  console.log(req.method);
  console.log(id);
  console.log(arbitro);

  res.send("Ok")
})


//eliminando un arbitros
app.delete('/arbitros/:id', function (req, res) {
  const id = req.params
  console.log(req.method);
  console.log(id);
  res.send("Ok")
})



//partidas


//obteniendo todos los partidas
app.get('/partidas', function (req, res) {
  const partidas = [
    'partida  3',
  ]
  console.log(req.method);
  res.send(partidas)
})

//creando un partidas
app.post('/partidas', function (req, res) {
  const partidas = req.body;

  console.log(req.method);
  console.log(partidas);
  res.send("Ok")
})

//actualizando un partidas
app.put('/partidas/:id', function (req, res) {
  const id = req.params
  const partida= req.body;
  console.log(req.method);
  console.log(id);
  console.log(partida);

  res.send("Ok")
})


//eliminando un partida
app.delete('/partidas/:id', function (req, res) {
  const id = req.params
  console.log(req.method);
  console.log(id);
  res.send("Ok")
})


//historial partidas 


/*
//obteniendo todos los partidas
app.get('/historial_partidas', function (req, res) {
  const historiales_partidas = [
    'partida  3',
  ]
  console.log(req.method);
  res.send(historiales_partidas)
})

//creando un partidas
app.post('/historial_partidas', function (req, res) {
  const historiales_partidas = req.body;

  console.log(req.method);
  console.log(historiales_partidas);
  res.send("Ok")
})

//actualizando un partidas
app.put('/historial_partidas/:id', function (req, res) {
  const id = req.params
  const historial_partida= req.body;
  console.log(req.method);
  console.log(id);
  console.log(historial_partida);

  res.send("Ok")
})


//eliminando un partida
app.delete('/historiales_partidas/:id', function (req, res) {
  const id = req.params
  console.log(req.method)*/