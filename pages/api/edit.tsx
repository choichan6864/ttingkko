import { NextApiRequest, NextApiResponse } from "next";
import connection from "@/mysql/connection";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const id = req.headers.referer?.split("/")[5];
    connection.query(
      `UPDATE contents SET id= '', contents ='${JSON.stringify(
        req.body
      )}' WHERE contentsId = ${id};`
    );
    res.status(200).redirect("/");
  }
}
