import { Application, Request, Response } from "express";
import connection from "./connection";

const express = require("express");
const router: Application = express.Router();

router.get("/api/search/:text", async (req: Request, res: Response) => {
  const [rows] = await connection.query(
    `SELECT * FROM contents WHERE contents->\'$.personName\' LIKE '%${req.params.text}%'`
  );
  const arr: [] = rows.map(
    (data: { contentsId: number; contents: { personName: string } }) => {
      return {
        personName: data.contents.personName,
        contentsId: data.contentsId,
      };
    }
  );
  res.status(200).send(arr);
});

module.exports = router;