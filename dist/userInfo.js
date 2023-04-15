"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var router = express.Router();
router.get("/api/userInfo", function (req, res) {
    res.send({
        user: req.session.user,
        loginLink: process.env.API_ENDPOINT,
    });
});
module.exports = router;
