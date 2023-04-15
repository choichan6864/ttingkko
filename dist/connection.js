"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mysql = require("mysql2/promise");
var connection = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "Chan6864*",
    database: "ttinkkoWiki",
});
exports.default = connection;
