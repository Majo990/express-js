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
const{juecesController} =require("./controllers/jueces");
const {partidasController}=require("./controllers/partidas");
const {partidas_jugadoresController}=require("./controllers/partidas_jugadores");
const {rolesController}=require("./controllers/roles");
const {rondasController}=require("./controllers/rondas");
const {permisosController}=require("./controllers/permisos");
const {perfilesController}=require("./controllers/perfiles");
const {sancionesController}=require("./controllers/sanciones");
const {torneosController}=require("./controllers/torneos");
const {premiosController}=require("./controllers/premios");
const {proximosencuentros}=require("./controllers/partidas");

const {ciudadesController}=require("./controllers/ciudades");
const {paisesController}=require("./controllers/paises");



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


//crud de roles/user

app.get("/roles", rolesController.index);

//creando un jugadores
app.post("/roles",rolesController.store);

//actualizando juadores
app.put("/roles/:id", rolesController.update);

//eliminando un jugador
app.delete("/roles/:id", rolesController.destroy);



//Crud permisos


app.get("/permisos", permisosController.index);

//creando un permi
app.post("/permisos",permisosController.store);

//actualizando permi
app.put("/permisos/:id", permisosController.update);

//eliminando un permi
app.delete("/permisos/:id", permisosController.destroy);


//Crud perfiles


app.get("/perfiles",perfilesController.index);

//creando un permi
app.post("/perfiles", perfilesController.store);

//actualizando permi
app.put("/perfiles/:id", perfilesController.update);

//eliminando un permi
app.delete("/perfiles/:id", perfilesController.destroy);



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


//Crud jueces



app.get("/jueces", juecesController.index);

//creando un jugadores
app.post("/jueces",juecesController.store);

//actualizando juadores
app.put("/jueces/:id", juecesController.update);

//eliminando un jugador
app.delete("/jueces/:id", juecesController.destroy);

//Crud Partidas

app.get("/partidas", partidasController.index);

app.get("/proximosencuentros", proximosencuentrosController.index);

//creando un jugadores
app.post("/partidas",partidasController.store);

//actualizando juadores
app.put("/partidas/:id", partidasController.update);

//eliminando un jugador
app.delete("/partidas/:id", partidasController.destroy);


//Crud Partidas_jugadores

app.get("/partidas_jugadores", partidas_jugadoresController.index);

//creando un jugadores
app.post("/partidas_jugadores",partidas_jugadoresController.store);

//actualizando juadores
app.put("/partidas_jugadores/:id", partidas_jugadoresController.update);

//eliminando un jugador
app.delete("/partidas_jugadores/:id", partidas_jugadoresController.destroy);

//crud de rondas


app.get("/rondas", rondasController.index);

//creando un jugadores
app.post("/rondas",rondasController.store);

//actualizando juadores
app.put("/rondas/:id", rondasController.update);

//eliminando un jugador
app.delete("/rondas/:id", rondasController.destroy);


//crud de sanciones


app.get("/sanciones", sancionesController.index);

//creando un jugadores
app.post("/sanciones",sancionesController.store);

//actualizando juadores
app.put("/sanciones/:id", sancionesController.update);

//eliminando un jugador
app.delete("/sanciones/:id", sancionesController.destroy);



//crud de torneos


app.get("/torneos", torneosController.index);

//creando un jugadores
app.post("/torneos",torneosController.store);

//actualizando juadores
app.put("/torneos/:id", torneosController.update);

//eliminando un jugador
app.delete("/torneos/:id", torneosController.destroy);


//crud de premios


app.get("/premios", premiosController.index);

//creando un jugadores
app.post("/premios",premiosController.store);

//actualizando juadores
app.put("/premios/:id", premiosController.update);

//eliminando un jugador
app.delete("/premios/:id", premiosController.destroy);




//crud de paises


app.get("/paises", paisesController.index);

//creando un jugadores
app.post("/paises",paisesController.store);

//actualizando juadores
app.put("/paises/:id", paisesController.update);

//eliminando un jugador
app.delete("/paises/:id", paisesController.destroy);


//crud de ciudades


app.get("/ciudades",ciudadesController.index);

//creando un jugadores
app.post("/ciudades",ciudadesController.store);

//actualizando juadores
app.put("/ciudades/:id",ciudadesController.update);

//eliminando un jugador
app.delete("/ciudades/:id",ciudadesController.destroy);

//crud de provincia


module.exports = app;


