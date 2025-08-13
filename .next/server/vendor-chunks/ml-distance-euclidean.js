"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/ml-distance-euclidean";
exports.ids = ["vendor-chunks/ml-distance-euclidean"];
exports.modules = {

/***/ "(rsc)/./node_modules/ml-distance-euclidean/lib-es6/euclidean.js":
/*!*****************************************************************!*\
  !*** ./node_modules/ml-distance-euclidean/lib-es6/euclidean.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   euclidean: () => (/* binding */ euclidean),\n/* harmony export */   squaredEuclidean: () => (/* binding */ squaredEuclidean)\n/* harmony export */ });\nfunction squaredEuclidean(p, q) {\r\n    let d = 0;\r\n    for (let i = 0; i < p.length; i++) {\r\n        d += (p[i] - q[i]) * (p[i] - q[i]);\r\n    }\r\n    return d;\r\n}\r\nfunction euclidean(p, q) {\r\n    return Math.sqrt(squaredEuclidean(p, q));\r\n}\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbWwtZGlzdGFuY2UtZXVjbGlkZWFuL2xpYi1lczYvZXVjbGlkZWFuLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQU87QUFDUDtBQUNBLG9CQUFvQixjQUFjO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZG9jcy12ZWN0b3Itc2VhcmNoLWRlbW8vLi9ub2RlX21vZHVsZXMvbWwtZGlzdGFuY2UtZXVjbGlkZWFuL2xpYi1lczYvZXVjbGlkZWFuLmpzPzk3ZDciXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIHNxdWFyZWRFdWNsaWRlYW4ocCwgcSkge1xyXG4gICAgbGV0IGQgPSAwO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgZCArPSAocFtpXSAtIHFbaV0pICogKHBbaV0gLSBxW2ldKTtcclxuICAgIH1cclxuICAgIHJldHVybiBkO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBldWNsaWRlYW4ocCwgcSkge1xyXG4gICAgcmV0dXJuIE1hdGguc3FydChzcXVhcmVkRXVjbGlkZWFuKHAsIHEpKTtcclxufVxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/ml-distance-euclidean/lib-es6/euclidean.js\n");

/***/ })

};
;