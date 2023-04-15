"use strict";
exports.id = 769;
exports.ids = [769];
exports.modules = {

/***/ 7667:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ FunctionButton)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9816);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);


function FunctionButton({ event , text , mod , title  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                type: mod,
                onClick: event,
                title: title,
                className: "jsx-cafc40fce5e7812f",
                children: text
            }),
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {
                id: "cafc40fce5e7812f",
                children: "button.jsx-cafc40fce5e7812f{height:40px;cursor:pointer;background-color:rgb(0,0,0,0);border:1px solid white;width:40px}"
            })
        ]
    });
}


/***/ }),

/***/ 840:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ListInput)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9816);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _functionButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7667);




function ListInput({ index , remove , Contents , ListText , setListToTrue , setListToFalse  }) {
    const [input, setInput] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({
        listText: ListText,
        contents: Contents
    });
    const [plusInput, setPlusInput] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(Contents === "");
    const contentsRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
    const listTextRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
    const { listText , contents  } = input;
    const onInputContents = (e)=>setInput({
            contents: e.target.innerHTML,
            listText
        });
    const onInputListName = (e)=>setInput({
            ...input,
            listText: e.target.innerHTML
        });
    const onClickCancelButton = ()=>{
        if (Contents === "" && ListText === "") remove(index);
        else {
            setInput({
                listText: ListText,
                contents: Contents
            });
            setPlusInput(false);
        }
    };
    const onClickSaveButton = ()=>{
        if (input.contents !== "" && input.listText !== "") {
            setPlusInput(false);
            setListToTrue();
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        contentsRef.current?.focus();
    }, [
        plusInput
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            plusInput ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "jsx-2542344ed30d5e41" + " " + "element-to-plus",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "jsx-2542344ed30d5e41" + " " + "input-group",
                                children: [
                                    listText === "" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "jsx-2542344ed30d5e41" + " " + "list-name-input-placeholder input-placeholder",
                                        children: "추가할 이름"
                                    }) : null,
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        onInput: onInputListName,
                                        contentEditable: true,
                                        onFocus: (e)=>{
                                            if (e.target.innerHTML !== listText) {
                                                e.target.innerHTML = listText;
                                            }
                                        },
                                        ref: listTextRef,
                                        className: "jsx-2542344ed30d5e41" + " " + "input list-name-input"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {
                                className: "jsx-2542344ed30d5e41"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "jsx-2542344ed30d5e41" + " " + "input-group",
                                children: [
                                    contents === "" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "jsx-2542344ed30d5e41" + " " + "input-placeholder contents-input-placeholder ",
                                        children: "내용"
                                    }) : null,
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        onInput: onInputContents,
                                        contentEditable: true,
                                        ref: contentsRef,
                                        onFocus: (e)=>{
                                            if (e.target.innerHTML !== contents) {
                                                e.target.innerHTML = contents;
                                                listTextRef.current?.focus();
                                            }
                                        },
                                        className: "jsx-2542344ed30d5e41" + " " + "input content-input"
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "jsx-2542344ed30d5e41",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                onClick: onClickCancelButton,
                                type: "button",
                                className: "jsx-2542344ed30d5e41" + " " + "cancel-button",
                                children: "취소"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                onClick: onClickSaveButton,
                                type: "button",
                                className: "jsx-2542344ed30d5e41" + " " + "save-button",
                                children: "저장"
                            })
                        ]
                    })
                ]
            }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "jsx-2542344ed30d5e41" + " " + "list",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                        className: "jsx-2542344ed30d5e41",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "jsx-2542344ed30d5e41",
                                children: index + 1
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "jsx-2542344ed30d5e41",
                                children: "."
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "jsx-2542344ed30d5e41" + " " + "listText",
                                children: listText
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_functionButton__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z //삭제 버튼
                            , {
                                text: "\uD83D\uDDD1",
                                mod: "button",
                                event: ()=>remove(index),
                                title: "수정"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_functionButton__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z //수정 버튼
                            , {
                                text: "\uD83D\uDD8D",
                                mod: "button",
                                event: ()=>{
                                    setPlusInput(true);
                                    setListToFalse();
                                },
                                title: "수정"
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {
                        className: "jsx-2542344ed30d5e41"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        dangerouslySetInnerHTML: {
                            __html: contents
                        },
                        className: "jsx-2542344ed30d5e41" + " " + "contents"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        type: "hidden",
                        name: "listText",
                        value: input.listText,
                        className: "jsx-2542344ed30d5e41"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        type: "hidden",
                        name: "contents",
                        value: input.contents,
                        className: "jsx-2542344ed30d5e41"
                    })
                ]
            }, index),
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {
                id: "2542344ed30d5e41",
                children: ".list-name-input-placeholder.jsx-2542344ed30d5e41{font-size:16px;padding-top:14px}.contents-input-placeholder.jsx-2542344ed30d5e41{font-size:12px;padding-top:7px}.input-placeholder.jsx-2542344ed30d5e41{position:absolute;padding-left:10px;color:rgb(255,255,255,.5)}.input-group.jsx-2542344ed30d5e41{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex}.input.jsx-2542344ed30d5e41{position:relative;left:0;width:100%;border:1px solid white;-webkit-border-radius:10px;-moz-border-radius:10px;border-radius:10px;margin-bottom:20px;color:white}.list-name-input.jsx-2542344ed30d5e41{padding:10px 0 10px 10px;font-size:25px;font-weight:bold}.content-input.jsx-2542344ed30d5e41{padding:5px 0 5px 10px}.element-to-plus.jsx-2542344ed30d5e41{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column}hr.jsx-2542344ed30d5e41{border-bottom:1px solid white;margin-bottom:20px}.plus-list-input.jsx-2542344ed30d5e41{padding-left:10px;height:35px;font-size:15px;-webkit-border-radius:8px;-moz-border-radius:8px;border-radius:8px}.cancel-button.jsx-2542344ed30d5e41{cursor:pointer;width:5rem;height:35px;color:black;-webkit-border-radius:10px;-moz-border-radius:10px;border-radius:10px}.save-button.jsx-2542344ed30d5e41{color:black;cursor:pointer;width:5rem;height:35px;-webkit-border-radius:10px;-moz-border-radius:10px;border-radius:10px}.contents.jsx-2542344ed30d5e41{padding-left:1.4rem}.list-group.jsx-2542344ed30d5e41{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.list.jsx-2542344ed30d5e41{margin-bottom:20px}.listText.jsx-2542344ed30d5e41{-webkit-box-flex:1;-webkit-flex:1;-moz-box-flex:1;-ms-flex:1;flex:1}h1.jsx-2542344ed30d5e41{font-size:25px;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;height:40px;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center}"
            })
        ]
    });
}


/***/ }),

/***/ 5501:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ToolBar)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9816);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _functionButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7667);




function ToolBar({ onClickPlusButton  }) {
    const [fixedToolBar, setFixedToolBar] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        window.addEventListener("scroll", ()=>{
            if (window.scrollY > 150 && !fixedToolBar) setFixedToolBar(true);
            else setFixedToolBar(false);
        });
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
            [
                "7fede376adb27f15",
                [
                    fixedToolBar ? "position: fixed;" : "margin-bottom:20px;"
                ]
            ]
        ]) + " " + "tool-bar",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_functionButton__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                mod: "button",
                text: "+",
                event: onClickPlusButton,
                title: "목록 추가"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_functionButton__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                text: "\uD83D\uDCC4",
                mod: "submit",
                event: ()=>{},
                title: "저장"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_functionButton__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                text: "\uD83D\uDDBC",
                mod: "button",
                event: ()=>{},
                title: "이미지 추가"
            }),
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {
                id: "7fede376adb27f15",
                dynamic: [
                    fixedToolBar ? "position: fixed;" : "margin-bottom:20px;"
                ],
                children: `.tool-bar.__jsx-style-dynamic-selector{height:40px;${fixedToolBar ? "position: fixed;" : "margin-bottom:20px;"}
            background-color:rgb(0,0, 200);display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;z-index:1;max-width:1e3px;width:100%;top:90px}`
            })
        ]
    });
}


/***/ })

};
;