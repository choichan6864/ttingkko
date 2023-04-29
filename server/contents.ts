import { Application, Request, Response } from "express";
import connection from "./connection";

const express = require("express");
const router: Application = express.Router();

router.post("/api/write", (req: Request, res: Response) => {
  if (req.session.user) {
    connection.query(
      `insert into contents(id, contents) values('${
        req.session.user.id
      }','${JSON.stringify(req.body)}');`
    );
    res.status(200).redirect("/");
  } else res.status(404);
});
router.get("/api/bring-list/:page", async (req: Request, res: Response) => {
  const page = parseInt(req.params.page);
  if (typeof page === "number" && page > 0) {
    const [pageLen] = await connection.query(
      "SELECT COUNT(*) as cnt FROM contents"
    );
    const len = pageLen[0].cnt;
    const maxLen = len - Math.floor(20 * (page - 1));
    const minLen = maxLen - 20 > 0 ? maxLen - 20 : 0;
    const [rows] = await connection.query(
      `SELECT * FROM contents LIMIT ${minLen}, ${maxLen}`
    );
    const array: { contentsId: number; personName: string }[] = [];
    rows.map(
      (data: {
        contentsId: number;
        contents: {
          personName: string;
        };
      }) => {
        array.push({
          contentsId: data.contentsId,
          personName: data.contents.personName,
        });
      }
    );
    const pageLenArr = [];
    const condition = len / 20 === 1 ? 1 : len / 20 + 1;
    for (let i = 1; i <= condition; i++) pageLenArr.push(i);
    res.status(200).json({ contents: array, len: pageLenArr });
  } else res.status(404).send({ ok: false });
});

router.post("/api/edit", (req: Request, res: Response) => {
  if (req.session.user) {
    const id = req.headers.referer?.split("/")[5];
    connection.query(
      `UPDATE contents SET id= '${
        req.session.user?.id
      }', contents ='${JSON.stringify(req.body)}' WHERE contentsId = ${id};`
    );
    res.status(200).redirect("/");
  } else res.status(404);
});

router.get("/api/contents/:id", async (req: Request, res: Response) => {
  const page = parseInt(req.params.id);
  if (typeof page === "number" && page > 0) {
    const [rows] = await connection.query(
      `SELECT * FROM contents WHERE contentsId = ${req.params.id}`
    );
    res.status(200).json(rows[0]);
  }
});

module.exports = router;
