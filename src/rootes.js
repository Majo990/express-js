const express = require("express");
const app = express();
const { usuariosController } = require("./controllers/usuarios");
const { jugadoresController } = require("./controllers/jugadores");
const {arbitrosController} = require("./controllers/arbitros");
const controllers = require("./controllers");

app.post("/login", controllers.login);

//select jugadores
app.get("/jugadores", jugadoresController.index);

//creando un jugadores
app.post("/jugadores", jugadoresController.store);

//actualizando juadores
app.put("/jugadores/:id", jugadoresController.update);

//eliminando un jugador
app.delete("/jugadores/:id", jugadoresController.destroy);

module.exports = app;

// crud usuaris

//select usuarios

//select jugadores
app.get("/usuarios", usuariosController.index);

//creando un jugadores
app.post("/usuarios", usuariosController.store);

//actualizando juadores
app.put("/usuarios/:id", usuariosController.update);

//eliminando un jugador
app.delete("/usuarios/:id", usuariosController.destroy);

module.exports = app;


// crud de arbitros 

//select jugadores
app.get("/arbitros", arbitrosController.index);

//creando un jugadores
app.post("/arbitros", arbitrosController.store);

//actualizando juadores
app.put("/arbitros/:id", arbitrosController.update);

//eliminando un jugador
app.delete("/arbitros/:id", arbitrosController.destroy);

