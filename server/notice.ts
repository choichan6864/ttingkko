import { Application, Request, Response } from "express";
import connection from "./connection";
import { error } from "console";

const express = require("express");
const router: Application = express.Router();

router.post("/api/plus-notice", (req: Request, res: Response) => {
  if (req.session.user) {
    connection.query(
      `INSERT INTO notice (type, contents, title, writer) VALUES ('${req.body.type}', '${req.body.text}', '${req.body.title}', '${req.session.user.id}');`
    );
  }
  res.redirect("/");
});

router.get("/api/notice/:id", async (req: Request, res: Response) => {
  if (req.params.id) {
    const [rows] = await connection.query(
      `SELECT * FROM notice WHERE id=${req.params.id}`
    );
    res.send(rows[0]);
  }
});

router.get("/api/notice-list/:page", async (req: Request, res: Response) => {
  const page = parseInt(req.params.page);
  if (typeof page === "number" && page > 0 && !isNaN(page)) {
    const [pageLen] = await connection.query(
      "SELECT COUNT(*) as cnt FROM notice"
    );
    const len = pageLen[0].cnt;
    const maxLen = len - Math.floor(20 * (page - 1));
    const minLen = maxLen - 20 > 0 ? maxLen - 20 : 0;
    const [rows] = await connection.query(
      `SELECT type, title, id FROM notice LIMIT ${minLen}, ${maxLen}`
    );
    const pageLenArr = [];
    const condition = len / 20 === 1 ? 1 : len / 20 + 1;
    for (let i = 1; i <= condition; i++) pageLenArr.push(i);
    res.send({ notice: rows, len: pageLenArr });
  } else res.status(404).send({ ok: false });
});

module.exports = router;
