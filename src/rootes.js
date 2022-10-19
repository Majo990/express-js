const express = require("express");
const app = express();
const { usuariosController } = require("./controllers/usuarios");
const { jugadoresController } = require("./controllers/jugadores");
const {arbitrosController} = require("./controllers/arbitros");
const {equiposController} = require("./controllers/equipos");
const {comportamientosController} = require("./controllers/comportamientos");
const {estadiosController} = require("./controllers/estadios");
const {entrenadoresController}  = require("./controllers/entrenadores");
const {eventosController}= require("./controllers/eventos");
const {faltasController} =require("./controllers/faltas");
const {historial_partidasController} = require("./controllers/historial_partidas");

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


// crud usuaris

//select usuarios

//select user
app.get("/usuarios", usuariosController.index);

//creando un user
app.post("/usuarios", usuariosController.store);

//actualizando user
app.put("/usuarios/:id", usuariosController.update);

//eliminando un user
app.delete("/usuarios/:id", usuariosController.destroy);



// crud de arbitros 

//select arbit
app.get("/arbitros", arbitrosController.index);

//creando un arbit
app.post("/arbitros", arbitrosController.store);

//actualizando arbit
app.put("/arbitros/:id", arbitrosController.update);

//eliminando un arbit
app.delete("/arbitros/:id", arbitrosController.destroy);



// crud comportamientos

app.get("/comportamientos", comportamientosController.index);

//creando un compor
app.post("/comportamientos",comportamientosController.store);

//actualizando compor
app.put("/comportamientos/:id", comportamientosController.update);

//eliminando un compor
app.delete("/comportamientos/:id", comportamientosController.destroy);



// crud entrenadores

app.get("/entrenadores", entrenadoresController.index);

//creando un jugadores0
app.post("/entrenadores",entrenadoresController.store);

//actualizando juadores
app.put("/entrenadores/:id", entrenadoresController.update);

//eliminando un jugador
app.delete("/entrenadores/:id", entrenadoresController.destroy);




// crud equipos 

app.get("/equipos", equiposController.index);

//creando un jugadores
app.post("/equipos",equiposController.store);

//actualizando juadores
app.put("/equipos/:id", equiposController.update);

//eliminando un jugador
app.delete("/equipos/:id", equiposController.destroy);



//crud estadios 


app.get("/estadios", estadiosController.index);

//creando un jugadores
app.post("/estadios",estadiosController.store);

//actualizando juadores
app.put("/estadios/:id", estadiosController.update);

//eliminando un jugador
app.delete("/estadios/:id", estadiosController.destroy);


//evento


app.get("/eventos", eventosController.index);

//creando un jugadores
app.post("/eventos",eventosController.store);

//actualizando juadores
app.put("/eventos/:id", eventosController.update);

//eliminando un jugador
app.delete("/eventos/:id", eventosController.destroy);


//faltas


app.get("/faltas", faltasController.index);

//creando un jugadores
app.post("/faltas",faltasController.store);

//actualizando juadores
app.put("/faltas/:id", faltasController.update);

//eliminando un jugador
app.delete("/faltas/:id", faltasController.destroy);



//hisotrial patidas


app.get("/historial_partidas", historial_partidasController.index);

//creando un jugadores
app.post("/historial_partidas",historial_partidasController.store);

//actualizando juadores
app.put("/historial_partidas/:id", historial_partidasController.update);

//eliminando un jugador
app.delete("/historial_partidas/:id", historial_partidasController.destroy);







module.exports = app;


