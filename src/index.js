
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const rutas = require('./rootes')

app.use(bodyParser.urlencoded({ extended: false }))
//app.use(express.bodyParser());
app.use(bodyParser.json())
app.use(rutas)
console.log("servidor corriendo en http:localhost:3000");

app.listen(3000)