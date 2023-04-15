const mysql = require("mysql2/promise");

const connection = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "Chan6864*",
  database: "ttinkkoWiki",
});

export default connection;
