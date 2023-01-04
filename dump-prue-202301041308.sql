-- MySQL dump 10.13  Distrib 8.0.19, for Win64 (x86_64)
--
-- Host: localhost    Database: prue
-- ------------------------------------------------------
-- Server version	5.5.5-10.10.2-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `arbitros`
--

DROP TABLE IF EXISTS `arbitros`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `arbitros` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) NOT NULL,
  `apellido` varchar(50) NOT NULL,
  `nombre_paises` varchar(50) DEFAULT NULL,
  `nombre_ciudades` varchar(50) DEFAULT NULL,
  `edad` int(11) NOT NULL,
  `sexo` varchar(50) NOT NULL,
  `altura` float NOT NULL,
  `peso` float NOT NULL,
  `fecha_nacimiento` date NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK__paises` (`nombre_paises`),
  KEY `FK__ciudades` (`nombre_ciudades`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `arbitros`
--

LOCK TABLES `arbitros` WRITE;
/*!40000 ALTER TABLE `arbitros` DISABLE KEYS */;
INSERT INTO `arbitros` VALUES (5,'Mario','Perez','Angola','Cacole',22,'Masculino',1.55,55,'2000-01-02'),(6,'Juan','Montero','Algeria','Batna City',22,'Masculino',1.6,50,'2000-01-18'),(7,'Celeste','Gonzales','Australia','Aberfoyle',28,'Femenino',1.7,60,'1999-06-20'),(8,'Frescia','Perleche','Peru','Piura',20,'Femenino',1.58,50,'2002-12-12');
/*!40000 ALTER TABLE `arbitros` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `canchas_estadios_partidas`
--

DROP TABLE IF EXISTS `canchas_estadios_partidas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `canchas_estadios_partidas` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL,
  `id_estadios` int(11) DEFAULT NULL,
  `id_partidas` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `canchas_estadios_partidas_FK` (`id_estadios`),
  KEY `canchas_estadios_partidas_FK_1` (`id_partidas`),
  CONSTRAINT `canchas_estadios_partidas_FK` FOREIGN KEY (`id_estadios`) REFERENCES `estadios` (`id`) ON DELETE SET NULL,
  CONSTRAINT `canchas_estadios_partidas_FK_1` FOREIGN KEY (`id_partidas`) REFERENCES `partidas` (`id`) ON DELETE SET NULL
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `canchas_estadios_partidas`
--

LOCK TABLES `canchas_estadios_partidas` WRITE;
/*!40000 ALTER TABLE `canchas_estadios_partidas` DISABLE KEYS */;
INSERT INTO `canchas_estadios_partidas` VALUES (1,'cancha1',NULL,NULL);
/*!40000 ALTER TABLE `canchas_estadios_partidas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ciudades`
--

DROP TABLE IF EXISTS `ciudades`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ciudades` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ciudades`
--

LOCK TABLES `ciudades` WRITE;
/*!40000 ALTER TABLE `ciudades` DISABLE KEYS */;
/*!40000 ALTER TABLE `ciudades` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `comportamientos`
--

DROP TABLE IF EXISTS `comportamientos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `comportamientos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `descripcion` varchar(50) NOT NULL,
  `id_jugadores` int(11) DEFAULT NULL,
  `id_arbitros` int(11) DEFAULT NULL,
  `id_sanciones` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `comportamientos_FK` (`id_jugadores`),
  KEY `comportamientos_FK_1` (`id_arbitros`),
  KEY `comportamientos_FK_2` (`id_sanciones`),
  CONSTRAINT `comportamientos_FK` FOREIGN KEY (`id_jugadores`) REFERENCES `jugadores` (`id`) ON DELETE SET NULL,
  CONSTRAINT `comportamientos_FK_1` FOREIGN KEY (`id_arbitros`) REFERENCES `arbitros` (`id`) ON DELETE SET NULL,
  CONSTRAINT `comportamientos_FK_2` FOREIGN KEY (`id_sanciones`) REFERENCES `sanciones` (`id`) ON DELETE SET NULL
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comportamientos`
--

LOCK TABLES `comportamientos` WRITE;
/*!40000 ALTER TABLE `comportamientos` DISABLE KEYS */;
INSERT INTO `comportamientos` VALUES (1,'Actitud Positiva',3,5,3),(2,'Actitud Negativa no respeto las reglas',2,6,2),(3,'Actitud Positiva respeto las reglas',1,7,1);
/*!40000 ALTER TABLE `comportamientos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `deportes`
--

DROP TABLE IF EXISTS `deportes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `deportes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `deportes`
--

LOCK TABLES `deportes` WRITE;
/*!40000 ALTER TABLE `deportes` DISABLE KEYS */;
/*!40000 ALTER TABLE `deportes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `entrenadores`
--

DROP TABLE IF EXISTS `entrenadores`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `entrenadores` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) NOT NULL,
  `id_jugadores` int(11) DEFAULT NULL,
  `apellido` varchar(100) NOT NULL,
  `edad` int(11) NOT NULL,
  `sexo` varchar(100) NOT NULL,
  `fecha_nacimiento` date DEFAULT NULL,
  `nombre_paises` varchar(50) NOT NULL,
  `nombre_ciudades` varchar(50) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `entrenadores_FK` (`id_jugadores`),
  KEY `entrenadores_FK_1` (`nombre_paises`),
  KEY `entrenadores_FK_2` (`nombre_ciudades`),
  CONSTRAINT `entrenadores_FK` FOREIGN KEY (`id_jugadores`) REFERENCES `jugadores` (`id`) ON DELETE SET NULL
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `entrenadores`
--

LOCK TABLES `entrenadores` WRITE;
/*!40000 ALTER TABLE `entrenadores` DISABLE KEYS */;
INSERT INTO `entrenadores` VALUES (1,'Jose',2,'Castro',30,'Masculino','1999-01-12','Angola','Camabatela'),(2,'Rafael',NULL,'Mogollon',22,'Femenino','2000-01-20','Albania','Elbasan'),(3,'Angela',NULL,'Perleche',20,'Femenino','2002-12-05','Algeria','Annaba'),(4,'Paulina',2,'Moran',26,'Femenino','1996-01-02','Australia','Abbotsford');
/*!40000 ALTER TABLE `entrenadores` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `equipos`
--

DROP TABLE IF EXISTS `equipos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `equipos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) NOT NULL,
  `nombre_paises` varchar(50) DEFAULT NULL,
  `nombre_ciudades` varchar(50) DEFAULT NULL,
  `fecha_fundo` date NOT NULL,
  `id_jugadores` int(11) DEFAULT NULL,
  `id_entrenadores` int(11) DEFAULT NULL,
  `descripcion` varchar(100) NOT NULL,
  `indumentaria_uniforme` varchar(100) NOT NULL,
  `presidente` varchar(100) NOT NULL,
  `apodos` varchar(100) NOT NULL,
  `id_estadios` int(11) DEFAULT NULL,
  `simbolo` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `equipos_FK99` (`id_estadios`),
  KEY `equipos_FK5` (`id_entrenadores`),
  KEY `equipos_FK7` (`id_jugadores`),
  KEY `equipos_FK` (`nombre_paises`),
  KEY `equipos_FK_1` (`nombre_ciudades`),
  CONSTRAINT `equipos_FK5` FOREIGN KEY (`id_entrenadores`) REFERENCES `entrenadores` (`id`) ON DELETE SET NULL,
  CONSTRAINT `equipos_FK7` FOREIGN KEY (`id_jugadores`) REFERENCES `jugadores` (`id`) ON DELETE SET NULL,
  CONSTRAINT `equipos_FK99` FOREIGN KEY (`id_estadios`) REFERENCES `estadios` (`id`) ON DELETE SET NULL
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `equipos`
--

LOCK TABLES `equipos` WRITE;
/*!40000 ALTER TABLE `equipos` DISABLE KEYS */;
INSERT INTO `equipos` VALUES (1,'Breaking Bad','Peru','Lima','2000-12-02',2,1,'equipo ganador eliminatoria 2019','polo y short celeste','Pedro Caseres','Bad',1,'candado.png'),(2,'Pink','Peru','Lima','2021-05-12',3,3,'Equipo mujeres','Falta tipo short y polo rosado','Celeste','Pinkis',1,'1.png'),(3,'Universidad de California, Los Ángeles (UCLA)  ','Germany','Abenberg','1919-01-07',3,4,'El mejor equipo de EE.UU',' Polo y short','Edward Augustus','Ucla',NULL,'Sin título.png'),(4,'Juego Set Match','Peru','Cajamarca','2020-01-01',3,3,'Ganadores de la eliminatoria 2020','Polo y Short azul','Paolo Ruiz','Match',1,'2.png');
/*!40000 ALTER TABLE `equipos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `estadios`
--

DROP TABLE IF EXISTS `estadios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `estadios` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) NOT NULL,
  `id_jugadores` int(11) DEFAULT NULL,
  `id_canchas_estadios_partidas` int(11) DEFAULT NULL,
  `cesped` varchar(100) NOT NULL,
  `administrador` varchar(100) NOT NULL,
  `propietario` varchar(100) NOT NULL,
  `ubigeo` int(11) NOT NULL,
  `direccion` varchar(100) NOT NULL,
  `nombre_paises` varchar(50) DEFAULT NULL,
  `nombre_ciudades` varchar(50) DEFAULT NULL,
  `id_partidas` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `estadios_FK` (`nombre_ciudades`),
  KEY `estadios_FK_1` (`nombre_paises`),
  KEY `estadios_FK_2` (`id_canchas_estadios_partidas`),
  KEY `estadios_FK_3` (`id_jugadores`),
  KEY `estadios_FK96` (`id_partidas`),
  CONSTRAINT `estadios_FK96` FOREIGN KEY (`id_partidas`) REFERENCES `partidas` (`id`) ON DELETE SET NULL,
  CONSTRAINT `estadios_FK_2` FOREIGN KEY (`id_canchas_estadios_partidas`) REFERENCES `canchas_estadios_partidas` (`id`) ON DELETE SET NULL,
  CONSTRAINT `estadios_FK_3` FOREIGN KEY (`id_jugadores`) REFERENCES `jugadores` (`id`) ON DELETE SET NULL
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `estadios`
--

LOCK TABLES `estadios` WRITE;
/*!40000 ALTER TABLE `estadios` DISABLE KEYS */;
INSERT INTO `estadios` VALUES (1,'Estadio Nacional Perú ',2,NULL,'natural','Miguel Dasso','Gobierno del Perú ',15010,'Estadio Nacional, Paseo de la Republica Avenue 652, Lima, Lima 15046','Peru','Lima',1),(2,'Club Grau',3,NULL,'sintetico','Guillermo Herrera','Guillermo Herrera',1885,'Avenida los Cocos.','Peru','Piura',4);
/*!40000 ALTER TABLE `estadios` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `eventos`
--

DROP TABLE IF EXISTS `eventos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `eventos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `eventos`
--

LOCK TABLES `eventos` WRITE;
/*!40000 ALTER TABLE `eventos` DISABLE KEYS */;
INSERT INTO `eventos` VALUES (1,'Olimpiadas '),(2,'Eliminatoria'),(3,'Concursos viaje Cancun');
/*!40000 ALTER TABLE `eventos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `faltas`
--

DROP TABLE IF EXISTS `faltas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `faltas` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nro` int(11) NOT NULL,
  `fecha_hora` datetime DEFAULT NULL,
  `id_jugadores` int(11) DEFAULT NULL,
  `id_arbitros` int(11) DEFAULT NULL,
  `id_historial_partidas` int(11) DEFAULT NULL,
  `id_partidas` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `faltas_FK6` (`id_arbitros`),
  KEY `faltas_FK` (`id_historial_partidas`),
  KEY `faltas_FK_1` (`id_partidas`),
  KEY `faltas_FK_2` (`id_jugadores`),
  CONSTRAINT `faltas_FK` FOREIGN KEY (`id_historial_partidas`) REFERENCES `historial_partidas` (`id`) ON DELETE SET NULL,
  CONSTRAINT `faltas_FK6` FOREIGN KEY (`id_arbitros`) REFERENCES `arbitros` (`id`) ON DELETE SET NULL,
  CONSTRAINT `faltas_FK_1` FOREIGN KEY (`id_partidas`) REFERENCES `partidas` (`id`) ON DELETE SET NULL,
  CONSTRAINT `faltas_FK_2` FOREIGN KEY (`id_jugadores`) REFERENCES `jugadores` (`id`) ON DELETE SET NULL
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `faltas`
--

LOCK TABLES `faltas` WRITE;
/*!40000 ALTER TABLE `faltas` DISABLE KEYS */;
INSERT INTO `faltas` VALUES (8,3,'2023-01-05 01:04:00',2,5,NULL,2),(9,5,'2023-01-04 11:05:00',1,7,NULL,4);
/*!40000 ALTER TABLE `faltas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `historial_partidas`
--

DROP TABLE IF EXISTS `historial_partidas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `historial_partidas` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_jugadores` int(11) DEFAULT NULL,
  `fecha_hora` datetime DEFAULT NULL,
  `id_rondas` int(11) DEFAULT NULL,
  `puntaje` int(11) DEFAULT NULL,
  `id_eventos` int(11) DEFAULT NULL,
  `id_jueces` int(11) DEFAULT NULL,
  `id_premios` int(11) DEFAULT NULL,
  `id_faltas` int(11) DEFAULT NULL,
  `id_partidas` int(11) DEFAULT NULL,
  `id_arbitros` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `historial_partidas_FK` (`id_faltas`),
  KEY `historial_partidas_FK_1` (`id_eventos`),
  KEY `historial_partidas_FK_2` (`id_arbitros`),
  KEY `historial_partidas_FK_3` (`id_rondas`),
  KEY `historial_partidas_FK_4` (`id_jugadores`),
  KEY `historial_partidas_FK_5` (`id_jueces`),
  KEY `historial_partidas_FK_6` (`id_premios`),
  KEY `historial_partidas_FK_7` (`id_partidas`),
  CONSTRAINT `historial_partidas_FK` FOREIGN KEY (`id_faltas`) REFERENCES `faltas` (`id`) ON DELETE SET NULL,
  CONSTRAINT `historial_partidas_FK_1` FOREIGN KEY (`id_eventos`) REFERENCES `eventos` (`id`) ON DELETE SET NULL,
  CONSTRAINT `historial_partidas_FK_2` FOREIGN KEY (`id_arbitros`) REFERENCES `arbitros` (`id`) ON DELETE SET NULL,
  CONSTRAINT `historial_partidas_FK_3` FOREIGN KEY (`id_rondas`) REFERENCES `rondas` (`id`) ON DELETE SET NULL,
  CONSTRAINT `historial_partidas_FK_4` FOREIGN KEY (`id_jugadores`) REFERENCES `jugadores` (`id`) ON DELETE SET NULL,
  CONSTRAINT `historial_partidas_FK_5` FOREIGN KEY (`id_jueces`) REFERENCES `jueces` (`id`) ON DELETE SET NULL,
  CONSTRAINT `historial_partidas_FK_6` FOREIGN KEY (`id_premios`) REFERENCES `premios` (`id`) ON DELETE SET NULL,
  CONSTRAINT `historial_partidas_FK_7` FOREIGN KEY (`id_partidas`) REFERENCES `partidas` (`id`) ON DELETE SET NULL
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `historial_partidas`
--

LOCK TABLES `historial_partidas` WRITE;
/*!40000 ALTER TABLE `historial_partidas` DISABLE KEYS */;
INSERT INTO `historial_partidas` VALUES (1,3,'2023-01-11 00:00:00',1,1,3,1,1,NULL,1,7),(2,2,'2023-01-04 10:00:00',2,2,2,1,1,NULL,2,5),(3,1,'2023-01-04 12:00:00',2,2,3,1,1,NULL,2,6);
/*!40000 ALTER TABLE `historial_partidas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `jueces`
--

DROP TABLE IF EXISTS `jueces`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `jueces` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) NOT NULL,
  `apellido` varchar(100) NOT NULL,
  `fecha_nacimiento` date NOT NULL,
  `edad` int(11) NOT NULL,
  `sexo` varchar(100) NOT NULL,
  `nombre_paises` varchar(50) DEFAULT NULL,
  `nombre_ciudades` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `jueces_FK` (`nombre_paises`),
  KEY `jueces_FK_1` (`nombre_ciudades`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `jueces`
--

LOCK TABLES `jueces` WRITE;
/*!40000 ALTER TABLE `jueces` DISABLE KEYS */;
INSERT INTO `jueces` VALUES (1,'Victor','Carrasco','1999-02-22',23,'Masculino','Australia','Abbotsford'),(2,'Isabel','Garcia','2000-01-10',22,'Femenino','Anguilla','George Hill');
/*!40000 ALTER TABLE `jueces` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `jugadores`
--

DROP TABLE IF EXISTS `jugadores`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `jugadores` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) NOT NULL,
  `nacionalidad` varchar(100) NOT NULL,
  `id_entrenadores` int(11) DEFAULT NULL,
  `edad` int(11) NOT NULL,
  `sexo` varchar(100) NOT NULL,
  `id_arbitros` int(11) DEFAULT NULL,
  `id_equipos` int(11) DEFAULT NULL,
  `id_torneos` int(11) DEFAULT NULL,
  `id_sanciones` int(11) DEFAULT NULL,
  `altura` float NOT NULL,
  `peso` float NOT NULL,
  `nombre_paises` varchar(50) DEFAULT NULL,
  `nombre_ciudades` varchar(50) DEFAULT NULL,
  `posicion` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `jugadores_FK` (`nombre_ciudades`),
  KEY `jugadores_FK_1` (`nombre_paises`),
  KEY `jugadores_FK_2` (`id_arbitros`),
  KEY `jugadores_FK_3` (`id_entrenadores`),
  KEY `jugadores_FK_4` (`id_equipos`),
  KEY `jugadores_FK_5` (`id_torneos`),
  KEY `jugadores_FK_6` (`id_sanciones`),
  CONSTRAINT `jugadores_FK_2` FOREIGN KEY (`id_arbitros`) REFERENCES `arbitros` (`id`) ON DELETE SET NULL,
  CONSTRAINT `jugadores_FK_3` FOREIGN KEY (`id_entrenadores`) REFERENCES `entrenadores` (`id`) ON DELETE SET NULL,
  CONSTRAINT `jugadores_FK_4` FOREIGN KEY (`id_equipos`) REFERENCES `equipos` (`id`) ON DELETE SET NULL,
  CONSTRAINT `jugadores_FK_5` FOREIGN KEY (`id_torneos`) REFERENCES `torneos` (`id`) ON DELETE SET NULL,
  CONSTRAINT `jugadores_FK_6` FOREIGN KEY (`id_sanciones`) REFERENCES `sanciones` (`id`) ON DELETE SET NULL
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `jugadores`
--

LOCK TABLES `jugadores` WRITE;
/*!40000 ALTER TABLE `jugadores` DISABLE KEYS */;
INSERT INTO `jugadores` VALUES (1,'Pedro Gallese ','Peruana',1,32,'Masculino',5,1,1,3,1.89,77,'Peru','Miraflores',NULL),(2,'Paolo Guerrero ','peruana',1,39,'Masculino',5,1,1,2,1.85,77,'Peru','Lima',NULL),(3,'Fabiola','peruana',2,23,'Femenino',6,1,1,2,1.8,70,'Argentina','Acevedo',NULL);
/*!40000 ALTER TABLE `jugadores` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `paises`
--

DROP TABLE IF EXISTS `paises`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `paises` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `paises`
--

LOCK TABLES `paises` WRITE;
/*!40000 ALTER TABLE `paises` DISABLE KEYS */;
INSERT INTO `paises` VALUES (1,'gg');
/*!40000 ALTER TABLE `paises` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `partidas`
--

DROP TABLE IF EXISTS `partidas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `partidas` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) NOT NULL,
  `descripcion` varchar(100) NOT NULL,
  `id_torneos` int(11) DEFAULT NULL,
  `fecha` date NOT NULL,
  `tiempo_inicio` time NOT NULL,
  `tiempo_duracion` time NOT NULL,
  `tiempo_fin` time NOT NULL,
  `id_rondas` int(11) DEFAULT NULL,
  `id_historial_partidas` int(11) DEFAULT NULL,
  `nombre_deportes` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `partidas_FK` (`nombre_deportes`),
  KEY `partidas_FK_1` (`id_rondas`),
  KEY `partidas_FK_2` (`id_torneos`),
  KEY `partidas_FK_3` (`id_historial_partidas`),
  CONSTRAINT `partidas_FK_1` FOREIGN KEY (`id_rondas`) REFERENCES `rondas` (`id`) ON DELETE SET NULL,
  CONSTRAINT `partidas_FK_2` FOREIGN KEY (`id_torneos`) REFERENCES `torneos` (`id`) ON DELETE SET NULL,
  CONSTRAINT `partidas_FK_3` FOREIGN KEY (`id_historial_partidas`) REFERENCES `historial_partidas` (`id`) ON DELETE SET NULL
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `partidas`
--

LOCK TABLES `partidas` WRITE;
/*!40000 ALTER TABLE `partidas` DISABLE KEYS */;
INSERT INTO `partidas` VALUES (1,'Partidauno','Eliminatorias ',1,'2023-01-05','02:00:00','01:00:00','03:00:00',3,NULL,'Tenis'),(2,'Partidados','Partida selección equipo ',1,'2023-01-04','12:30:00','00:30:00','01:00:00',2,NULL,'Fútbol'),(3,'Partida tres ','Partida por un viaje ',1,'2023-01-04','12:50:00','01:00:00','01:50:00',2,NULL,'Tenis'),(4,'Partida cuatro','Partida por un viaje ',1,'2023-01-03','12:40:00','00:40:00','01:20:00',2,NULL,'Tenis');
/*!40000 ALTER TABLE `partidas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `partidas_jugadores`
--

DROP TABLE IF EXISTS `partidas_jugadores`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `partidas_jugadores` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_partidas` int(11) DEFAULT NULL,
  `id_jugadores` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `partidas_jugadores_FK` (`id_partidas`),
  KEY `partidas_jugadores_FK_1` (`id_jugadores`),
  CONSTRAINT `partidas_jugadores_FK` FOREIGN KEY (`id_partidas`) REFERENCES `partidas` (`id`) ON DELETE SET NULL,
  CONSTRAINT `partidas_jugadores_FK_1` FOREIGN KEY (`id_jugadores`) REFERENCES `jugadores` (`id`) ON DELETE SET NULL
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `partidas_jugadores`
--

LOCK TABLES `partidas_jugadores` WRITE;
/*!40000 ALTER TABLE `partidas_jugadores` DISABLE KEYS */;
INSERT INTO `partidas_jugadores` VALUES (7,1,3),(8,2,2),(9,3,2),(10,3,3);
/*!40000 ALTER TABLE `partidas_jugadores` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `perfiles`
--

DROP TABLE IF EXISTS `perfiles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `perfiles` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) NOT NULL,
  `apellido` varchar(100) NOT NULL,
  `edad` int(11) NOT NULL,
  `sexo` varchar(100) NOT NULL,
  `dni` varchar(100) NOT NULL,
  `nacionalidad` varchar(100) NOT NULL,
  `email` varchar(100) DEFAULT NULL,
  `direccion` varchar(100) NOT NULL,
  `celular` int(11) DEFAULT NULL,
  `id_usuarios` int(11) DEFAULT NULL,
  `nombre_paises` varchar(50) DEFAULT NULL,
  `nombre_ciudades` varchar(50) DEFAULT NULL,
  `codigo_postal` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `perfiles_FK` (`nombre_paises`),
  KEY `perfiles_FK_1` (`nombre_ciudades`),
  KEY `perfiles_FK_2` (`id_usuarios`),
  CONSTRAINT `perfiles_FK_2` FOREIGN KEY (`id_usuarios`) REFERENCES `usuarios` (`id`) ON DELETE SET NULL
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `perfiles`
--

LOCK TABLES `perfiles` WRITE;
/*!40000 ALTER TABLE `perfiles` DISABLE KEYS */;
INSERT INTO `perfiles` VALUES (1,'Victor','Carrasco',20,'Masculino','12345677','g','victor3@gmail.com','av. Lima frente a una posta',111111111,4,'Albania','Petran',2000),(2,'Maria','Yanayaco',44,'Femenino','444','h','mariayanayaco@gmail.com','av.Belaunde',999999999,7,'Albania','Elbasan',2000);
/*!40000 ALTER TABLE `perfiles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `permisos`
--

DROP TABLE IF EXISTS `permisos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `permisos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_usuarios` int(11) DEFAULT NULL,
  `descripcion` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `permisos_FK` (`id_usuarios`),
  CONSTRAINT `permisos_FK` FOREIGN KEY (`id_usuarios`) REFERENCES `usuarios` (`id`) ON DELETE SET NULL
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `permisos`
--

LOCK TABLES `permisos` WRITE;
/*!40000 ALTER TABLE `permisos` DISABLE KEYS */;
INSERT INTO `permisos` VALUES (1,NULL,'crear arbitros'),(2,NULL,'seleccionar arbitros'),(3,NULL,'actualizar arbitros'),(4,NULL,'borrar arbitros');
/*!40000 ALTER TABLE `permisos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `permisos_roles`
--

DROP TABLE IF EXISTS `permisos_roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `permisos_roles` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_roles` int(11) DEFAULT NULL,
  `id_permisos` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `permisos_roles_FK` (`id_roles`),
  KEY `permisos_roles_FK_1` (`id_permisos`),
  CONSTRAINT `permisos_roles_FK` FOREIGN KEY (`id_roles`) REFERENCES `roles` (`id`) ON DELETE SET NULL,
  CONSTRAINT `permisos_roles_FK_1` FOREIGN KEY (`id_permisos`) REFERENCES `permisos` (`id`) ON DELETE SET NULL
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `permisos_roles`
--

LOCK TABLES `permisos_roles` WRITE;
/*!40000 ALTER TABLE `permisos_roles` DISABLE KEYS */;
INSERT INTO `permisos_roles` VALUES (1,2,NULL),(2,2,NULL),(3,2,2),(4,2,3),(5,2,4);
/*!40000 ALTER TABLE `permisos_roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `premios`
--

DROP TABLE IF EXISTS `premios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `premios` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `tipo` varchar(100) NOT NULL,
  `id_equipos` int(11) DEFAULT NULL,
  `id_jugadores` int(11) DEFAULT NULL,
  `nombre` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `premios_FK` (`id_equipos`),
  KEY `premios_FK_1` (`id_jugadores`),
  CONSTRAINT `premios_FK` FOREIGN KEY (`id_equipos`) REFERENCES `equipos` (`id`) ON DELETE SET NULL,
  CONSTRAINT `premios_FK_1` FOREIGN KEY (`id_jugadores`) REFERENCES `jugadores` (`id`) ON DELETE SET NULL
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `premios`
--

LOCK TABLES `premios` WRITE;
/*!40000 ALTER TABLE `premios` DISABLE KEYS */;
INSERT INTO `premios` VALUES (1,'Trofeo',1,2,'Trofeos'),(2,'Viajes',3,3,'Viaje');
/*!40000 ALTER TABLE `premios` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `roles`
--

DROP TABLE IF EXISTS `roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `roles` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `descripcion` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `roles`
--

LOCK TABLES `roles` WRITE;
/*!40000 ALTER TABLE `roles` DISABLE KEYS */;
INSERT INTO `roles` VALUES (1,'administrador'),(2,'usuario');
/*!40000 ALTER TABLE `roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `rondas`
--

DROP TABLE IF EXISTS `rondas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `rondas` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nro` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rondas`
--

LOCK TABLES `rondas` WRITE;
/*!40000 ALTER TABLE `rondas` DISABLE KEYS */;
INSERT INTO `rondas` VALUES (1,1),(2,2),(3,3);
/*!40000 ALTER TABLE `rondas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sanciones`
--

DROP TABLE IF EXISTS `sanciones`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sanciones` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sanciones`
--

LOCK TABLES `sanciones` WRITE;
/*!40000 ALTER TABLE `sanciones` DISABLE KEYS */;
INSERT INTO `sanciones` VALUES (1,'leve'),(2,'severa'),(3,'intermedia');
/*!40000 ALTER TABLE `sanciones` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `torneos`
--

DROP TABLE IF EXISTS `torneos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `torneos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) NOT NULL,
  `fecha` date NOT NULL,
  `nombre_paises` varchar(50) DEFAULT NULL,
  `nombre_ciudades` varchar(50) DEFAULT NULL,
  `id_estadios` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `torneos_FK` (`nombre_ciudades`),
  KEY `torneos_FK_1` (`nombre_paises`),
  KEY `torneos_FK_2` (`id_estadios`),
  CONSTRAINT `torneos_FK_2` FOREIGN KEY (`id_estadios`) REFERENCES `estadios` (`id`) ON DELETE SET NULL
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `torneos`
--

LOCK TABLES `torneos` WRITE;
/*!40000 ALTER TABLE `torneos` DISABLE KEYS */;
INSERT INTO `torneos` VALUES (1,'Eliminación ','2023-01-02','Argentina','Abasto',1),(2,'Selección Equipo','2023-01-02','Azerbaijan','Qusar',2);
/*!40000 ALTER TABLE `torneos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `usuarios` varchar(100) NOT NULL,
  `contrasenia` varchar(100) NOT NULL,
  `id_roles` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `usuarios_FK` (`id_roles`),
  CONSTRAINT `usuarios_FK` FOREIGN KEY (`id_roles`) REFERENCES `roles` (`id`) ON DELETE SET NULL
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (4,'majo','f0832159af15968232ea007347f31827',1),(7,'majo3','123',2);
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'prue'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-01-04 13:08:06
