const mysql = require("mysql2");

module.exports.connection = mysql.createConnection({
  host: "localhost",
  user: "pma",
  database: "tenis",
});

