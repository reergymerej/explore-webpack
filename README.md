# webpack

Webpack is complex and it is often jumped into too quickly.  This shows step by
step how it works.  Check the branches.

## Branches

### 01.basic

This is the most basic setup.  There are no plugins or loaders, just an input
file and an output.

When building - `yarn webpack` -  you can see the bundle is created with the imported files.

```
funktacular.bundle.js  2.63 kB       0  [emitted]  main
   [0] ./src/index.js 57 bytes {0} [built]
   [1] ./src/i-am-included.js 30 bytes {0} [built]
 ```

### 02.loaders

[Loaders](https://webpack.js.org/concepts/#loaders) convert files into modules
Webpack can understand.

You can see how the loaders convert stuff into Webpack modules in this excerpt
from the bundle.

```
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1)
console.log('I am index.js.')


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__some_text_txt__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__some_text_txt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__some_text_txt__);

console.log('I am included.')


/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = "I was imported!\n"

/***/ })
/******/ ]);

```

