"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/notice/[id]";
exports.ids = ["pages/notice/[id]"];
exports.modules = {

/***/ "./pages/notice/[id].tsx":
/*!*******************************!*\
  !*** ./pages/notice/[id].tsx ***!
  \*******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Notice)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"styled-jsx/style\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_2__]);\naxios__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\nfunction Notice() {\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const [notice, setNotice] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)({\n        id: 0,\n        title: \"\",\n        writer: \"\",\n        contents: \"\"\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        if (router.query.id) {\n            (async ()=>{\n                const { data: notice  } = await axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(`/api/notice/${router.query.id}`);\n                setNotice(notice);\n            })();\n        }\n    }, [\n        router.isReady,\n        router.query\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"jsx-40bab75418eb48ca\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"jsx-40bab75418eb48ca\",\n                        children: notice.title\n                    }, void 0, false, {\n                        fileName: \"/root/ttingkko/pages/notice/[id].tsx\",\n                        lineNumber: 26,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"jsx-40bab75418eb48ca\" + \" \" + \"writer\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"jsx-40bab75418eb48ca\",\n                                children: \"작성자: \"\n                            }, void 0, false, {\n                                fileName: \"/root/ttingkko/pages/notice/[id].tsx\",\n                                lineNumber: 28,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"jsx-40bab75418eb48ca\",\n                                children: notice.writer\n                            }, void 0, false, {\n                                fileName: \"/root/ttingkko/pages/notice/[id].tsx\",\n                                lineNumber: 29,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/root/ttingkko/pages/notice/[id].tsx\",\n                        lineNumber: 27,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/root/ttingkko/pages/notice/[id].tsx\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                dangerouslySetInnerHTML: {\n                    __html: notice.contents\n                },\n                className: \"jsx-40bab75418eb48ca\"\n            }, void 0, false, {\n                fileName: \"/root/ttingkko/pages/notice/[id].tsx\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, this),\n            (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n                id: \"40bab75418eb48ca\",\n                children: \"h1.jsx-40bab75418eb48ca{margin-bottom:20px;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;font-size:40px}.writer.jsx-40bab75418eb48ca{font-size:16px;font-weight:lighter}\"\n            }, void 0, false, void 0, this)\n        ]\n    }, void 0, true);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9ub3RpY2UvW2lkXS50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTBCO0FBQ2M7QUFDSTtBQUU3QixTQUFTSSxTQUFTO0lBQy9CLE1BQU1DLFNBQVNKLHNEQUFTQTtJQUN4QixNQUFNLENBQUNLLFFBQVFDLFVBQVUsR0FBR0osK0NBQVFBLENBS2pDO1FBQUVLLElBQUk7UUFBR0MsT0FBTztRQUFJQyxRQUFRO1FBQUlDLFVBQVU7SUFBRztJQUNoRFQsZ0RBQVNBLENBQUMsSUFBTTtRQUNkLElBQUlHLE9BQU9PLEtBQUssQ0FBQ0osRUFBRSxFQUFFO1lBQ2xCLFdBQVk7Z0JBQ1gsTUFBTSxFQUFFSyxNQUFNUCxPQUFNLEVBQUUsR0FBRyxNQUFNTixpREFBUyxDQUN0QyxDQUFDLFlBQVksRUFBRUssT0FBT08sS0FBSyxDQUFDSixFQUFFLENBQUMsQ0FBQztnQkFFbENELFVBQVVEO1lBQ1o7UUFDRixDQUFDO0lBQ0gsR0FBRztRQUFDRCxPQUFPVSxPQUFPO1FBQUVWLE9BQU9PLEtBQUs7S0FBQztJQUNqQyxxQkFDRTs7MEJBQ0UsOERBQUNJOzs7a0NBQ0MsOERBQUNDOztrQ0FBTVgsT0FBT0csS0FBSzs7Ozs7O2tDQUNuQiw4REFBQ1E7a0VBQWU7OzBDQUNkLDhEQUFDQTs7MENBQUs7Ozs7OzswQ0FDTiw4REFBQ0E7OzBDQUFNWCxPQUFPSSxNQUFNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBR3hCLDhEQUFDUTtnQkFBSUMseUJBQXlCO29CQUFFQyxRQUFRZCxPQUFPSyxRQUFRO2dCQUFDOzs7Ozs7Ozs7Ozs7O0FBaUI5RCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdHRpbmdra293aWtpLy4vcGFnZXMvbm90aWNlL1tpZF0udHN4P2Q4NjkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5vdGljZSgpIHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IFtub3RpY2UsIHNldE5vdGljZV0gPSB1c2VTdGF0ZTx7XG4gICAgaWQ6IG51bWJlcjtcbiAgICB0aXRsZTogc3RyaW5nO1xuICAgIHdyaXRlcjogc3RyaW5nO1xuICAgIGNvbnRlbnRzOiBzdHJpbmc7XG4gIH0+KHsgaWQ6IDAsIHRpdGxlOiBcIlwiLCB3cml0ZXI6IFwiXCIsIGNvbnRlbnRzOiBcIlwiIH0pO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChyb3V0ZXIucXVlcnkuaWQpIHtcbiAgICAgIChhc3luYyAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHsgZGF0YTogbm90aWNlIH0gPSBhd2FpdCBheGlvcy5nZXQoXG4gICAgICAgICAgYC9hcGkvbm90aWNlLyR7cm91dGVyLnF1ZXJ5LmlkfWBcbiAgICAgICAgKTtcbiAgICAgICAgc2V0Tm90aWNlKG5vdGljZSk7XG4gICAgICB9KSgpO1xuICAgIH1cbiAgfSwgW3JvdXRlci5pc1JlYWR5LCByb3V0ZXIucXVlcnldKTtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGgxPlxuICAgICAgICA8c3Bhbj57bm90aWNlLnRpdGxlfTwvc3Bhbj5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwid3JpdGVyXCI+XG4gICAgICAgICAgPHNwYW4+7J6R7ISx7J6QOiA8L3NwYW4+XG4gICAgICAgICAgPHNwYW4+e25vdGljZS53cml0ZXJ9PC9zcGFuPlxuICAgICAgICA8L3NwYW4+XG4gICAgICA8L2gxPlxuICAgICAgPGRpdiBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IG5vdGljZS5jb250ZW50cyB9fT48L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgIHtgXG4gICAgICAgICAgaDEge1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICBmb250LXNpemU6IDQwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC53cml0ZXIge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XG4gICAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8Lz5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJheGlvcyIsInVzZVJvdXRlciIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiTm90aWNlIiwicm91dGVyIiwibm90aWNlIiwic2V0Tm90aWNlIiwiaWQiLCJ0aXRsZSIsIndyaXRlciIsImNvbnRlbnRzIiwicXVlcnkiLCJkYXRhIiwiZ2V0IiwiaXNSZWFkeSIsImgxIiwic3BhbiIsImRpdiIsImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MIiwiX19odG1sIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/notice/[id].tsx\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = import("axios");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/notice/[id].tsx"));
module.exports = __webpack_exports__;

})();