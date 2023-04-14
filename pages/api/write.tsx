import { NextApiRequest, NextApiResponse } from "next";
import connection from "@/mysql/connection";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST")  {
    connection.query(
      `insert into contents(id, contents) values('','${JSON.stringify(req.body)}');`
    );
    res.status(200).redirect("/").end();
  }
}
