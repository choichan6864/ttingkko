import { NextApiRequest, NextApiResponse } from "next";
import connection from "@/mysql/connection";

export default async function handler(req:NextApiRequest, res:NextApiResponse) {
    const [rows] = await connection.query("SELECT * FROM contents");
    res.status(200).json(rows);
}