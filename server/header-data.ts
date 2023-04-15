import { SessionData } from "express-session";
import { Request, Response } from "express";
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

router.get("/api/header-data", async (req: Request<SessionData>, res: Response) => {
  res.send({
  });
});

module.exports = router