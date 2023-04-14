import connection from "@/mysql/connection";
import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

export default async function Handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const [rows] = await connection.query(
    `SELECT * FROM contents WHERE contents->\'$.personName\' LIKE '%${req.query.text}%'`
  );
  console.log(rows);
  const arr: [] = rows.map(
    (data: { contentsId: number; contents: { personName: string } }) => {
      return {personName: data.contents.personName, contentsId:data.contentsId};
    }
  );
  res.status(200).send(arr);
}
