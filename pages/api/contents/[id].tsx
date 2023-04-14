import connection from "@/mysql/connection";
import { NextApiRequest, NextApiResponse } from "next";

export default async function Api(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    const [rows] = await connection.query(
      `SELECT * FROM contents WHERE contentsId = ${req.query.id}`
    );
    res.status(200).json(rows[0]);
  }
}
