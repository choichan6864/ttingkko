"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require('express');
var router = express.Router();
router.get("/api/isAdmin", function (req, res) {
    var _a;
    var isAdmin = ((_a = req.session.user) === null || _a === void 0 ? void 0 : _a.email) === "changhas6864@gmail.com";
    res.send({ isAdmin: isAdmin });
});
module.exports = router;
