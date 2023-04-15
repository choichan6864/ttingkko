"use strict";
(() => {
var exports = {};
exports.id = 874;
exports.ids = [874];
exports.modules = {

/***/ 2418:
/***/ ((module) => {

module.exports = require("mysql2/promise");

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

/***/ 2608:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Api)
/* harmony export */ });
/* harmony import */ var _mysql_connection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4661);

async function Api(req, res) {
    if (req.method === "GET") {
        const [rows] = await _mysql_connection__WEBPACK_IMPORTED_MODULE_0__/* ["default"].query */ .Z.query(`SELECT * FROM contents WHERE contentsId = ${req.query.id}`);
        res.status(200).json(rows[0]);
    }
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(2608));
module.exports = __webpack_exports__;

})();