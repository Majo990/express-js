const dotenv = require("dotenv");

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const rutas = require("./rootes");
const cors = require("cors");
app.use(cors());
dotenv.config();

app.use(express.static("public"));
app.get("/", (req, res) => {
  res.render("index");
});

app.use(bodyParser.urlencoded({ extended: true }));
//app.use(express.bodyParser());
app.use(bodyParser.json());
app.use(rutas);
console.log("servidor corriendo en http:localhost:3000");
app.listen(3000);
