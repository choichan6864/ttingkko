"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mysql = require("mysql2/promise");
var dotenv = require("dotenv");
dotenv.config();
var connection = mysql.createPool({
    host: "localhost",
    user: "root",
    password: process.env.MYSQL_PASSWD,
    database: process.env.MYSQL_DB,
});
exports.default = connection;
