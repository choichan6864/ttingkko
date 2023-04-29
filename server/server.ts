import { Application, NextFunction, Request, Response } from "express";
import { NextServer } from "next/dist/server/next";
import { createServer } from "https";
import { FSWatcher } from "fs";

//라이브러리
const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const next = require("next");
const fs = require("fs");
const session = require("express-session");
const MySQlStore = require("express-mysql-session")(session);

//서버 세팅
const dev = process.env.NODE_ENV !== "production";
const app: NextServer = next({ dev });
const port = process.env.NODE_ENV !== "production" ? 3000 : 443;
const handle = app.getRequestHandler();

const options = {
  cert: fs.readFileSync("./key/certificate.crt"),
  ca: fs.readFileSync("./key/ca_bundle.crt"),
  key: fs.readFileSync("./key/private.key")
}

//라우터
const auth = require("./auth");
const search = require("./search");
const userInfo = require("./userInfo");
const notice = require("./notice");
const admin = require("./admin");
const contents = require("./contents");

const sessionStore = new MySQlStore({
  host: "localhost",
  user: "root",
  password: "Chan6864*",
  database: "ttinkkoWiki",
});

declare module "express-session" {
  interface SessionData {
    user?: {
      id: string;
      email: string;
    };
  }
}

app.prepare().then(() => {
  const server: Application = express();
  server.use(
    session({
      secret: process.env.COOKIE_PASSWD,
      resave: false,
      store: sessionStore,
      saveUninitialized: true,
      cookie: { httponly: true, maxAge: 60 * 60 * 1000 * 24 * 30 },
      name: "ue-if",
    })
  );
  server.use(express.urlencoded({ extended: true }));
  server.use((err: Error, req: Request, res: Response, next: NextFunction) => {
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

  server.get("*", (req: Request, res: Response) => {
    return handle(req, res);
  });
  if (port === 443) {
    createServer(options, server).listen(port);
    console.log(port);
  }
  else server.listen(port, () => {
    console.log(port);
  })
});
