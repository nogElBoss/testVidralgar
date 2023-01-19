"use strict";
exports.id = 546;
exports.ids = [546];
exports.modules = {

/***/ 546:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "V": () => (/* binding */ BlankSection)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2210);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__]);
_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const BlankSection = ()=>{
    const isDesktop = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useBreakpointValue)({
        base: false,
        lg: true
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Grid, {
        templateColumns: [
            "100%",
            "100%",
            "100%",
            "12% 76% 12%"
        ],
        gap: "1px",
        bg: "gray",
        position: "relative",
        h: 120,
        children: [
            isDesktop ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.GridItem, {
                w: "100%",
                bg: "white"
            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.GridItem, {
                w: "100%",
                bg: "white"
            }),
            isDesktop ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.GridItem, {
                w: "100%",
                bg: "white"
            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {})
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;