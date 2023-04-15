"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var connection_1 = __importDefault(require("./connection"));
var dotenv = require("dotenv");
dotenv.config();
var express = require("express");
var next = require("next");
var dev = process.env.NODE_ENV !== "production";
var app = next({ dev: dev });
var session = require("express-session");
var MySQlStore = require("express-mysql-session")(session);
var port = process.env.NODE_ENV !== "production" ? 3000 : 80;
var handle = app.getRequestHandler();
var auth = require("./auth");
var headerData = require("./header-data");
// const sessionStore = new MySQlStore({
//   host: "localhost",
//   user: "root",
//   password: "Chan6864*",
//   database: "ttinkkoWiki",
// });
app.prepare().then(function () {
    var server = express();
    server.use(session({
        secret: process.env.COOKIE_PASSWD,
        resave: false,
        // store:sessionStore,
        saveUninitialized: true,
        cookie: { httponly: true, maxAge: 60 * 60 * 24 * 30 },
        name: "ue-if",
    }));
    server.use(express.urlencoded({ extended: true }));
    server.use(auth);
    server.use(headerData);
    server.post("/api/write", function (req, res) {
        connection_1.default.query("insert into contents(id, contents) values('','".concat(JSON.stringify(req.body), "');"));
        res.status(200).redirect("/");
    });
    server.get("/api/bring-lists", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var rows;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, connection_1.default.query("SELECT * FROM contents")];
                case 1:
                    rows = (_a.sent())[0];
                    res.status(200).json(rows);
                    return [2 /*return*/];
            }
        });
    }); });
    server.post("/api/edit", function (req, res) {
        var _a;
        var id = (_a = req.headers.referer) === null || _a === void 0 ? void 0 : _a.split("/")[5];
        connection_1.default.query("UPDATE contents SET id= '', contents ='".concat(JSON.stringify(req.body), "' WHERE contentsId = ").concat(id, ";"));
        res.status(200).redirect("/");
    });
    server.get("/api/contents/:id", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var rows;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, connection_1.default.query("SELECT * FROM contents WHERE contentsId = ".concat(req.params.id))];
                case 1:
                    rows = (_a.sent())[0];
                    res.status(200).json(rows[0]);
                    return [2 /*return*/];
            }
        });
    }); });
    server.get("*", function (req, res) {
        return handle(req, res);
    });
    server.listen(port, function () {
        console.info("port: ".concat(port));
    });
});
