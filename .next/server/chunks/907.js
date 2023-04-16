"use strict";
exports.id = 907;
exports.ids = [907];
exports.modules = {

/***/ 6907:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "b": () => (/* binding */ getUserInfo),
/* harmony export */   "h": () => (/* binding */ store)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9648);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_1__]);
axios__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const getUserInfo = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("slice/userInfo", async ()=>{
    const { data: userInfo  } = await axios__WEBPACK_IMPORTED_MODULE_1__["default"].get("/api/userInfo");
    return userInfo;
});
const slice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "slice",
    initialState: {
        activeLogin: false,
        loginLink: "/",
        userInfo: {
            id: "",
            email: ""
        }
    },
    reducers: {},
    extraReducers: (builder)=>{
        builder.addCase(getUserInfo.fulfilled, (state, action)=>{
            const { user , loginLink  } = action.payload;
            if (user) {
                state.userInfo = user;
                state.activeLogin = true;
            }
            state.loginLink = loginLink;
        });
    }
});
const store = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.configureStore)(slice);


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;