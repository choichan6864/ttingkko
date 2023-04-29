"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var https_1 = require("https");
//라이브러리
var dotenv = require("dotenv");
dotenv.config();
var express = require("express");
var next = require("next");
var fs = require("fs");
var session = require("express-session");
var MySQlStore = require("express-mysql-session")(session);
//서버 세팅
var dev = process.env.NODE_ENV !== "production";
var app = next({ dev: dev });
var port = process.env.NODE_ENV !== "production" ? 3000 : 443;
var handle = app.getRequestHandler();
var options = {
    cert: fs.readFileSync("./key/certificate.crt"),
    ca: fs.readFileSync("./key/ca_bundle.crt"),
    key: fs.readFileSync("./key/private.key")
};
//라우터
var auth = require("./auth");
var search = require("./search");
var userInfo = require("./userInfo");
var notice = require("./notice");
var admin = require("./admin");
var contents = require("./contents");
var sessionStore = new MySQlStore({
    host: "localhost",
    user: "root",
    password: "Chan6864*",
    database: "ttinkkoWiki",
});
app.prepare().then(function () {
    var server = express();
    server.use(session({
        secret: process.env.COOKIE_PASSWD,
        resave: false,
        store: sessionStore,
        saveUninitialized: true,
        cookie: { httponly: true, maxAge: 60 * 60 * 1000 * 24 * 30 },
        name: "ue-if",
    }));
    server.use(express.urlencoded({ extended: true }));
    server.use(function (err, req, res, next) {
        console.error(err.message);
        res.send({ message: err.message });
        process.exit(1);
    });
    server.use(auth);
    server.use(search);
    server.use(notice);
    server.use(admin);
    server.use(contents);
    server.use(userInfo);
    server.get("*", function (req, res) {
        return handle(req, res);
    });
    if (port === 443)
        (0, https_1.createServer)(options, server).listen(port);
    else
        server.listen(port, function () {
            console.log(port);
        });
});
