import { Application, Request, Response } from "express";
import { NextServer } from "next/dist/server/next";
import connection from "./connection";
const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const next = require("next");
const dev = process.env.NODE_ENV !== "production";
const app: NextServer = next({ dev });
const session = require("express-session");
const MySQlStore = require("express-mysql-session")(session);
const port = process.env.NODE_ENV !== "production" ? 3000 : 80;
const handle = app.getRequestHandler();
const auth = require("./auth");
const headerData = require("./header-data");

// const sessionStore = new MySQlStore({
//   host: "localhost",
//   user: "root",
//   password: "Chan6864*",
//   database: "ttinkkoWiki",
// });

app.prepare().then(() => {
  const server: Application = express();
  server.use(
    session({
      secret: process.env.COOKIE_PASSWD,
      resave: false,
      // store:sessionStore,
      saveUninitialized: true,
      cookie: { httponly: true, maxAge: 60 * 60 * 24 * 30 },
      name: "ue-if",
    })
  );
  server.use(express.urlencoded({ extended: true }));
  server.use(auth);
  server.use(headerData);
  server.post("/api/write", (req: Request, res: Response) => {
    connection.query(
      `insert into contents(id, contents) values('','${JSON.stringify(
        req.body
      )}');`
    );
    res.status(200).redirect("/");
  });
  server.get("/api/bring-lists", async (req:Request, res:Response) => {
      const [rows] = await connection.query("SELECT * FROM contents");
      res.status(200).json(rows);
  })
  server.post("/api/edit", (req:Request, res:Response) => {
    const id = req.headers.referer?.split("/")[5];
    connection.query(
      `UPDATE contents SET id= '', contents ='${JSON.stringify(
        req.body
      )}' WHERE contentsId = ${id};`
    );
    res.status(200).redirect("/");
  })
  server.get("/api/contents/:id", async (req:Request, res:Response) => {
    const [rows] = await connection.query(
      `SELECT * FROM contents WHERE contentsId = ${req.params.id}`
    );
    res.status(200).json(rows[0]);
  })
  server.get("*", (req: Request, res: Response) => {
    return handle(req, res);
  });
  server.listen(port, () => {
    console.info(`port: ${port}`);
  });
});