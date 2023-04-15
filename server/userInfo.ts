import { Application, Request, Response } from "express";

const express = require("express");
const router: Application = express.Router();

router.get("/api/userInfo", (req: Request, res: Response) => {
  res.send({
    user: req.session.user,
    loginLink: process.env.API_ENDPOINT,
  });
});

module.exports = router;
