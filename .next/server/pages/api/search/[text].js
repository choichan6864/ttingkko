"use strict";
(() => {
var exports = {};
exports.id = 286;
exports.ids = [286];
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

/***/ 5218:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Handler)
/* harmony export */ });
/* harmony import */ var _mysql_connection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4661);

async function Handler(req, res) {
    const [rows] = await _mysql_connection__WEBPACK_IMPORTED_MODULE_0__/* ["default"].query */ .Z.query(`SELECT * FROM contents WHERE contents->\'$.personName\' LIKE '%${req.query.text}%'`);
    console.log(rows);
    const arr = rows.map((data)=>{
        return {
            personName: data.contents.personName,
            contentsId: data.contentsId
        };
    });
    res.status(200).send(arr);
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(5218));
module.exports = __webpack_exports__;

})();