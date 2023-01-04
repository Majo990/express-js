require("express-router-group");
const express = require("express");
const app = express.Router();

const { authenticateToken } = require("./jwt");

const { usuariosController } = require("./controllers/usuarios");
const { jugadoresController } = require("./controllers/jugadores");
const { arbitrosController } = require("./controllers/arbitros");
const { equiposController } = require("./controllers/equipos");
const { comportamientosController } = require("./controllers/comportamientos");
const { estadiosController } = require("./controllers/estadios");
const { entrenadoresController } = require("./controllers/entrenadores");
const { eventosController } = require("./controllers/eventos");
const { faltasController } = require("./controllers/faltas");
const {
  historial_partidasController
} = require("./controllers/historial_partidas");
const { juecesController } = require("./controllers/jueces");
const { partidasController } = require("./controllers/partidas");
const {
  partidas_jugadoresController
} = require("./controllers/partidas_jugadores");
const { rolesController } = require("./controllers/roles");
const { rondasController } = require("./controllers/rondas");
const { permisosController } = require("./controllers/permisos");
const { perfilesController } = require("./controllers/perfiles");
const { sancionesController } = require("./controllers/sanciones");
const { torneosController } = require("./controllers/torneos");
const { premiosController } = require("./controllers/premios");
// const { partidasController } = require("./controllers/partidas");

const { permisos_rolesController } = require("./controllers/permisos_roles");

const { ciudadesController } = require("./controllers/ciudades");
const { paisesController } = require("./controllers/paises");

const { deportesController } = require("./controllers/deportes");

const { estadios_partidasController
} = require("./controllers/canchas_estadios_partidas");
const controllers = require("./controllers");

app.post("/login", controllers.login);

//router.use(authenticateToken);
// authenticateToken
app.group("/api", authenticateToken, (router) => {
  router.get("/user", (req, res) => res.send(req.user));
  //select jugadores
  router.get("/jugadores", jugadoresController.index);

  //creando un jugadores
  router.post("/jugadores", jugadoresController.store);

  //actualizando juadores
  router.put("/jugadores/:id", jugadoresController.update);

  //eliminando un jugador
  router.delete("/jugadores/:id", jugadoresController.destroy);

  // crud usuaris

  //select usuarios

  //  router.get("/partidas", partidasController.index);
  //   router.post("/partidas", partidasController.store);
  //   router.put("/partidas/:id", partidasController.update);
  //   router.delete("/partidas/:id", partidasController.destroy);

  //select user
  router.get("/usuarios", usuariosController.index);

  //creando un user
  router.post("/usuarios", usuariosController.store);

  //actualizando user
  router.put("/usuarios/:id", usuariosController.update);

  //eliminando un user
  router.delete("/usuarios/:id", usuariosController.destroy);

  //crud de roles/user

  router.get("/roles", rolesController.index);

  //creando un jugadores
  router.post("/roles", rolesController.store);

  //actualizando juadores
  router.put("/roles/:id", rolesController.update);

  //eliminando un jugador
  router.delete("/roles/:id", rolesController.destroy);

  //Crud permisos

  router.get("/permisos", permisosController.index);

  //creando un permi
  router.post("/permisos", permisosController.store);

  //actualizando permi
  router.put("/permisos/:id", permisosController.update);

  //eliminando un permi
  router.delete("/permisos/:id", permisosController.destroy);

  //Crud perfiles

  router.get("/perfiles", perfilesController.index);

  //creando un permi
  router.post("/perfiles", perfilesController.store);

  //actualizando permi
  router.put("/perfiles/:id", perfilesController.update);

  //eliminando un permi
  router.delete("/perfiles/:id", perfilesController.destroy);

  /// crud permisos-roles

  router.get("/permisos_roles", permisos_rolesController.index);

  //creando un jugadores
  router.post("/permisos_roles", permisos_rolesController.store);

  //actualizando juadores
  router.put("/permisos_roles/:id", permisos_rolesController.update);

  //eliminando un jugador
  router.delete("/permisos_roles/:id", permisos_rolesController.destroy);

  // crud de arbitros

  //select arbit
  router.get("/arbitros", arbitrosController.index);

  //creando un arbit
  router.post("/arbitros", arbitrosController.store);

  //actualizando arbit
  router.put("/arbitros/:id", arbitrosController.update);

  //eliminando un arbit
  router.delete("/arbitros/:id", arbitrosController.destroy);

  // crud comportamientos

  router.get("/comportamientos", comportamientosController.index);

  //creando un compor
  router.post("/comportamientos", comportamientosController.store);

  //actualizando compor
  router.put("/comportamientos/:id", comportamientosController.update);

  //eliminando un compor
  router.delete("/comportamientos/:id", comportamientosController.destroy);

  // crud entrenadores

  router.get("/entrenadores", entrenadoresController.index);

  //creando un jugadores0
  router.post("/entrenadores", entrenadoresController.store);

  //actualizando juadores
  router.put("/entrenadores/:id", entrenadoresController.update);

  //eliminando un jugador
  router.delete("/entrenadores/:id", entrenadoresController.destroy);

  // crud equipos

  router.get("/equipos", equiposController.index);

  //creando un jugadores
  router.post("/equipos", equiposController.store);

  //actualizando juadores
  router.put("/equipos/:id", equiposController.update);

  //eliminando un jugador
  router.delete("/equipos/:id", equiposController.destroy);

  //crud estadios

  router.get("/estadios", estadiosController.index);

  //creando un jugadores
  router.post("/estadios", estadiosController.store);

  //actualizando juadores
  router.put("/estadios/:id", estadiosController.update);

  //eliminando un jugador
  router.delete("/estadios/:id", estadiosController.destroy);

  //evento

  router.get("/eventos", eventosController.index);

  //creando un jugadores
  router.post("/eventos", eventosController.store);

  //actualizando juadores
  router.put("/eventos/:id", eventosController.update);

  //eliminando un jugador
  router.delete("/eventos/:id", eventosController.destroy);

  //faltas

  router.get("/faltas", faltasController.index);

  //creando un jugadores
  router.post("/faltas", faltasController.store);

  //actualizando juadores
  router.put("/faltas/:id", faltasController.update);

  //eliminando un jugador
  router.delete("/faltas/:id", faltasController.destroy);

  //hisotrial patidas

  router.get("/historial_partidas", historial_partidasController.index);

  //creando un jugadores
  router.post("/historial_partidas", historial_partidasController.store);

  //actualizando juadores
  router.put("/historial_partidas/:id", historial_partidasController.update);

  //eliminando un jugador
  router.delete(
    "/historial_partidas/:id",
    historial_partidasController.destroy
  );

  //Crud jueces

  router.get("/jueces", juecesController.index);

  //creando un jugadores
  router.post("/jueces", juecesController.store);

  //actualizando juadores
  router.put("/jueces/:id", juecesController.update);

  //eliminando un jugador
  router.delete("/jueces/:id", juecesController.destroy);

  //Crud Partidas

  router.get("/partidas", partidasController.index);
  // proximos partidas que se jugaran
  router.get("/proximosencuentros", partidasController.proximosencuentros);

  router.get("/juego", partidasController.juego);
  //resultados partidas jugadas ateriormente
  router.get("/resultados", partidasController.resultados);

  //  seleecione canchas estadios paridas
  router.get("/estadios_partidas", partidasController.index);

  //creando estadios partids
  router.post("/estadios_partidas", partidasController.store);

  //actualizando canchas estadios partidas

  router.put("/estadios_partidas/:id",partidasController.update);

  //eliminando canchas estadios partidas
  router.delete("/estadios_partidas/:id", partidasController.destroy);

  //creando un jugadores
  router.post("/partidas", partidasController.store);

  //actualizando juadores
  router.put("/partidas/:id", partidasController.update);

  //eliminando un jugador
  router.delete("/partidas/:id", partidasController.destroy);

  //Crud Partidas_jugadores

  router.get("/partidas_jugadores", partidas_jugadoresController.index);

  //creando un jugadores
  router.post("/partidas_jugadores", partidas_jugadoresController.store);

  //actualizando juadores
  router.put("/partidas_jugadores/:id", partidas_jugadoresController.update);

  //eliminando un jugador
  router.delete(
    "/partidas_jugadores/:id",
    partidas_jugadoresController.destroy
  );

  //crud de rondas

  router.get("/rondas", rondasController.index);

  //creando un jugadores
  router.post("/rondas", rondasController.store);

  //actualizando juadores
  router.put("/rondas/:id", rondasController.update);

  //eliminando un jugador
  router.delete("/rondas/:id", rondasController.destroy);

  //crud de sanciones

  router.get("/sanciones", sancionesController.index);

  //creando un jugadores
  router.post("/sanciones", sancionesController.store);

  //actualizando juadores
  router.put("/sanciones/:id", sancionesController.update);

  //eliminando un jugador
  router.delete("/sanciones/:id", sancionesController.destroy);

  //crud de torneos

  router.get("/torneos", torneosController.index);

  //creando un jugadores
  router.post("/torneos", torneosController.store);

  //actualizando juadores
  router.put("/torneos/:id", torneosController.update);

  //eliminando un jugador
  router.delete("/torneos/:id", torneosController.destroy);

  //crud de premios

  router.get("/premios", premiosController.index);

  //creando un jugadores
  router.post("/premios", premiosController.store);

  //actualizando juadores
  router.put("/premios/:id", premiosController.update);

  //eliminando un jugador
  router.delete("/premios/:id", premiosController.destroy);

  //crud de paises

  router.get("/paises", paisesController.index);

  //creando un jugadores
  router.post("/paises", paisesController.store);

  //actualizando juadores
  router.put("/paises/:id", paisesController.update);

  //eliminando un jugador
  router.delete("/paises/:id", paisesController.destroy);

  //crud de ciudades

  router.get("/ciudades", ciudadesController.index);

  //creando un jugadores
  router.post("/ciudades", ciudadesController.store);

  //actualizando juadores
  router.put("/ciudades/:id", ciudadesController.update);

  //eliminando un jugador
  router.delete("/ciudades/:id", ciudadesController.destroy);

  //crud de provincia

  //crud deportes
  router.get("/deportes", deportesController.index);

  //creando un jugadores
  router.post("/deportes", deportesController.store);

  //actualizando juadores
  router.put("/deportes/:id", deportesController.update);

  //eliminando un jugador
  router.delete("/deportes/:id", deportesController.destroy);
});

module.exports = app;
