import { Application, Request, Response } from "express";
import { SessionData } from "express-session";

const express = require('express');
const router:Application = express.Router();


router.get("/api/isAdmin", (req:Request<SessionData>, res:Response) => {
    const isAdmin = req.session.user?.email === "changhas6864@gmail.com";
    res.send({isAdmin});
});

module.exports = router;