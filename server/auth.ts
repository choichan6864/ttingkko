import { SessionData } from "express-session";
import axios from "axios";
import { Request, Response } from "express";
import connection from "./connection";

const express = require("express");
const router = express.Router();

declare module "express-session" {
  interface SessionData {
    user?: {
      id: string;
      email: string;
    };
  }
}

router.get("/api/auth", async (req: Request<SessionData>, res: Response) => {
  if (typeof req.query.code === "string") {
    const { code } = req.query;
    const scope = ["identify", "email"].join(" ");
    const body = new URLSearchParams({
      client_id: process.env.CLIENT_ID!,
      client_secret: process.env.CLIENT_SECRET!,
      redirect_uri: process.env.REDIRECT_URI!,
      grant_type: "authorization_code",
      code,
      scope,
    }).toString();
    const { data: auth } = await axios.post<{
      access_token: string;
      token_type: string;
    }>("https://discord.com/api/oauth2/token", body, {
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
    });
    const { data: user } = await axios.get(
      "https://discord.com/api/users/@me",
      { headers: { Authorization: `Bearer ${auth.access_token}` } }
    );
    const [rows] = await connection.query(
      `SELECT * FROM userInfo WHERE email = '${user.email}'`
    );
    if (!rows[0]) {
      connection.query(
        `INSERT INTO userInfo(id, email) VALUES('${user.username}', '${user.email}')`
      );
    }
    req.session.user = { id: user.username, email: user.email };
  }
  res.redirect("/");
});

module.exports = router;
