
const mysql = require('mysql2');

const app = require('express').Router()

// create the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'pma',
  database: 'tenis'
});

app.get('/partidas', function (req, res) {
  console.log('partidas,ruta');

  // with placeholder
  connection.query(
    'SELECT * FROM `partidas`',
    function (err, results) {
      res.send(results)
    }
  );




  console.log(req.method);
})

//creando un producto
app.post('/partidas', function (req, res) {
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


