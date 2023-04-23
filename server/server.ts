import { Application, Request, Response } from "express";
import { NextServer } from "next/dist/server/next";

//라이브러리
const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const next = require("next");
const session = require("express-session");
const MySQlStore = require("express-mysql-session")(session);

//서버 세팅
const dev = process.env.NODE_ENV !== "production";
const app: NextServer = next({ dev });
const port = process.env.NODE_ENV !== "production" ? 3000 : 80;
const handle = app.getRequestHandler();

//라우터
const auth = require("./auth");
const search = require("./search");
const userInfo = require("./userInfo");
const notice = require("./notice");
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

  server.use(auth);
  server.use(search);
  server.use(notice);
  server.use(contents);
  server.use(userInfo);

  server.get("*", (req: Request, res: Response) => {
    return handle(req, res);
  });

  server.listen(port, () => {
    console.info(`port: ${port}`);
  });
});
