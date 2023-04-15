"use strict";
(() => {
var exports = {};
exports.id = 719;
exports.ids = [719];
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

/***/ 9146:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _mysql_connection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4661);

function handler(req, res) {
    if (req.method === "POST") {
        const id = req.headers.referer?.split("/")[5];
        _mysql_connection__WEBPACK_IMPORTED_MODULE_0__/* ["default"].query */ .Z.query(`UPDATE contents SET id= '', contents ='${JSON.stringify(req.body)}' WHERE contentsId = ${id};`);
        res.status(200).redirect("/");
    }
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(9146));
module.exports = __webpack_exports__;

})();