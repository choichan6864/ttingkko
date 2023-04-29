const dotenv = require("dotenv");
dotenv.config();
const mysql = require("mysql2/promise");

const connection = mysql.createPool({
  host: "localhost",
  user: "root",
  password: process.env.MYSQL_PASSWD,
  database: process.env.MYSQL_DB,
});
export default connection;