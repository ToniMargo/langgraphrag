"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/ml-array-sum";
exports.ids = ["vendor-chunks/ml-array-sum"];
exports.modules = {

/***/ "(rsc)/./node_modules/ml-array-sum/lib-es6/index.js":
/*!****************************************************!*\
  !*** ./node_modules/ml-array-sum/lib-es6/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ sum)\n/* harmony export */ });\n/* harmony import */ var is_any_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! is-any-array */ \"(rsc)/./node_modules/is-any-array/lib-esm/index.js\");\n\n\nfunction sum(input) {\n  if (!(0,is_any_array__WEBPACK_IMPORTED_MODULE_0__.isAnyArray)(input)) {\n    throw new TypeError('input must be an array');\n  }\n\n  if (input.length === 0) {\n    throw new TypeError('input must not be empty');\n  }\n\n  var sumValue = 0;\n\n  for (var i = 0; i < input.length; i++) {\n    sumValue += input[i];\n  }\n\n  return sumValue;\n}\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbWwtYXJyYXktc3VtL2xpYi1lczYvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBMEM7O0FBRTFDO0FBQ0EsT0FBTyx3REFBVTtBQUNqQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxrQkFBa0Isa0JBQWtCO0FBQ3BDO0FBQ0E7O0FBRUE7QUFDQTs7QUFFMEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kb2NzLXZlY3Rvci1zZWFyY2gtZGVtby8uL25vZGVfbW9kdWxlcy9tbC1hcnJheS1zdW0vbGliLWVzNi9pbmRleC5qcz8wNDkxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGlzQW55QXJyYXkgfSBmcm9tICdpcy1hbnktYXJyYXknO1xuXG5mdW5jdGlvbiBzdW0oaW5wdXQpIHtcbiAgaWYgKCFpc0FueUFycmF5KGlucHV0KSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2lucHV0IG11c3QgYmUgYW4gYXJyYXknKTtcbiAgfVxuXG4gIGlmIChpbnB1dC5sZW5ndGggPT09IDApIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdpbnB1dCBtdXN0IG5vdCBiZSBlbXB0eScpO1xuICB9XG5cbiAgdmFyIHN1bVZhbHVlID0gMDtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGlucHV0Lmxlbmd0aDsgaSsrKSB7XG4gICAgc3VtVmFsdWUgKz0gaW5wdXRbaV07XG4gIH1cblxuICByZXR1cm4gc3VtVmFsdWU7XG59XG5cbmV4cG9ydCB7IHN1bSBhcyBkZWZhdWx0IH07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/ml-array-sum/lib-es6/index.js\n");

/***/ })

};
;