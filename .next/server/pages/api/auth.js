"use strict";
(() => {
var exports = {};
exports.id = 508;
exports.ids = [508];
exports.modules = {

/***/ 2418:
/***/ ((module) => {

module.exports = require("mysql2/promise");

/***/ }),

/***/ 9648:
/***/ ((module) => {

module.exports = import("axios");;

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = import("iron-session");;

/***/ }),

/***/ 4661:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const mysql = __webpack_require__(2418);
const connection = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "Chan6864*",
    database: "ttinkkoWiki"
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connection);


/***/ }),

/***/ 3002:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mysql_connection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4661);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9648);
/* harmony import */ var iron_session_next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8534);
/* harmony import */ var _session_options__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7348);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_1__, iron_session_next__WEBPACK_IMPORTED_MODULE_2__]);
([axios__WEBPACK_IMPORTED_MODULE_1__, iron_session_next__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,iron_session_next__WEBPACK_IMPORTED_MODULE_2__/* .withIronSessionApiRoute */ .n)(async function Handler(req, res) {
    if (typeof req.query.code === "string") {
        const { code  } = req.query;
        const scope = [
            "identify",
            "email"
        ].join(" ");
        const body = new URLSearchParams({
            client_id: process.env.CLIENT_ID,
            client_secret: process.env.CLIENT_SECRET,
            redirect_uri: process.env.REDIRECT_URI,
            grant_type: "authorization_code",
            code,
            scope
        }).toString();
        const { data: auth  } = await axios__WEBPACK_IMPORTED_MODULE_1__["default"].post("https://discord.com/api/oauth2/token", body, {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            }
        });
        const { data: user  } = await axios__WEBPACK_IMPORTED_MODULE_1__["default"].get("https://discord.com/api/users/@me", {
            headers: {
                Authorization: `Bearer ${auth.access_token}`
            }
        });
        const [rows] = await _mysql_connection__WEBPACK_IMPORTED_MODULE_0__/* ["default"].query */ .Z.query(`SELECT * FROM userInfo WHERE email = '${user.email}'`);
        if (!rows[0]) {
            _mysql_connection__WEBPACK_IMPORTED_MODULE_0__/* ["default"].query */ .Z.query(`INSERT INTO userInfo(id, email) VALUES('${user.username}', '${user.email}')`);
        }
        req.session.user = {
            id: user.username,
            email: user.email
        };
        await req.session.save();
    }
    res.redirect("/");
}, _session_options__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7348:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const options = {
    cookieName: "ue-if",
    password: process.env.COOKIE_PASSWD,
    ttl: 60 * 60 * 24 * 30
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (options);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [534], () => (__webpack_exec__(3002)));
module.exports = __webpack_exports__;

})();