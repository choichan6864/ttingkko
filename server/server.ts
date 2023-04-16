import { Application, Request, Response } from "express";
import { NextServer } from "next/dist/server/next";
import connection from "./connection";

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
const headerData = require("./header-data");
const search = require("./search");
const userInfo = require("./userInfo");

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
  server.use(headerData);
  server.use(search);

  server.post("/api/write", (req: Request, res: Response) => {
    if (req.session.user) {
      connection.query(
        `insert into contents(id, contents) values('${req.session.user.id}','${JSON.stringify(
          req.body
        )}');`
      );
      res.status(200).redirect("/");
    }
    else res.status(404);
  });
  server.get("/api/bring-lists", async (req: Request, res: Response) => {
    const [rows] = await connection.query("SELECT * FROM contents");
    res.status(200).json(rows);
  });

  server.post("/api/edit", (req: Request, res: Response) => {
    if(req.session.user) {
      const id = req.headers.referer?.split("/")[5];
      connection.query(
      `UPDATE contents SET id= ${req.session.user?.id}, contents ='${JSON.stringify(
        req.body
      )}' WHERE contentsId = ${id};`
      );
      res.status(200).redirect("/");
    } else res.status(404);
  });
  server.use(userInfo);
  server.get("/api/contents/:id", async (req: Request, res: Response) => {
    const [rows] = await connection.query(
      `SELECT * FROM contents WHERE contentsId = ${req.params.id}`
    );
    res.status(200).json(rows[0]);
  });
  server.get("*", (req: Request, res: Response) => {
    return handle(req, res);
  });
  server.listen(port, () => {
    console.info(`port: ${port}`);
  });
});
