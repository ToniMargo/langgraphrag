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
exports.id = "app/api/vectorSearch/route";
exports.ids = ["app/api/vectorSearch/route"];
exports.modules = {

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "punycode":
/*!***************************!*\
  !*** external "punycode" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("punycode");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "worker_threads":
/*!*********************************!*\
  !*** external "worker_threads" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("worker_threads");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ "node:fs":
/*!**************************!*\
  !*** external "node:fs" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("node:fs");

/***/ }),

/***/ "node:stream":
/*!******************************!*\
  !*** external "node:stream" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("node:stream");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2FvectorSearch%2Froute&page=%2Fapi%2FvectorSearch%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2FvectorSearch%2Froute.ts&appDir=%2FUsers%2Fantoniomartinez%2FDocuments%2FEnsign%20College%2F5%20-%20Spring%202025%2FCS%20420%2FW5%2Flanggraphrag%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fantoniomartinez%2FDocuments%2FEnsign%20College%2F5%20-%20Spring%202025%2FCS%20420%2FW5%2Flanggraphrag&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2FvectorSearch%2Froute&page=%2Fapi%2FvectorSearch%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2FvectorSearch%2Froute.ts&appDir=%2FUsers%2Fantoniomartinez%2FDocuments%2FEnsign%20College%2F5%20-%20Spring%202025%2FCS%20420%2FW5%2Flanggraphrag%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fantoniomartinez%2FDocuments%2FEnsign%20College%2F5%20-%20Spring%202025%2FCS%20420%2FW5%2Flanggraphrag&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_antoniomartinez_Documents_Ensign_College_5_Spring_2025_CS_420_W5_langgraphrag_app_api_vectorSearch_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/vectorSearch/route.ts */ \"(rsc)/./app/api/vectorSearch/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/vectorSearch/route\",\n        pathname: \"/api/vectorSearch\",\n        filename: \"route\",\n        bundlePath: \"app/api/vectorSearch/route\"\n    },\n    resolvedPagePath: \"/Users/antoniomartinez/Documents/Ensign College/5 - Spring 2025/CS 420/W5/langgraphrag/app/api/vectorSearch/route.ts\",\n    nextConfigOutput,\n    userland: _Users_antoniomartinez_Documents_Ensign_College_5_Spring_2025_CS_420_W5_langgraphrag_app_api_vectorSearch_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/vectorSearch/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZ2ZWN0b3JTZWFyY2glMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRnZlY3RvclNlYXJjaCUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRnZlY3RvclNlYXJjaCUyRnJvdXRlLnRzJmFwcERpcj0lMkZVc2VycyUyRmFudG9uaW9tYXJ0aW5leiUyRkRvY3VtZW50cyUyRkVuc2lnbiUyMENvbGxlZ2UlMkY1JTIwLSUyMFNwcmluZyUyMDIwMjUlMkZDUyUyMDQyMCUyRlc1JTJGbGFuZ2dyYXBocmFnJTJGYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj0lMkZVc2VycyUyRmFudG9uaW9tYXJ0aW5leiUyRkRvY3VtZW50cyUyRkVuc2lnbiUyMENvbGxlZ2UlMkY1JTIwLSUyMFNwcmluZyUyMDIwMjUlMkZDUyUyMDQyMCUyRlc1JTJGbGFuZ2dyYXBocmFnJmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBc0c7QUFDdkM7QUFDYztBQUNvRTtBQUNqSjtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsZ0hBQW1CO0FBQzNDO0FBQ0EsY0FBYyx5RUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLGlFQUFpRTtBQUN6RTtBQUNBO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ3VIOztBQUV2SCIsInNvdXJjZXMiOlsid2VicGFjazovL2RvY3MtdmVjdG9yLXNlYXJjaC1kZW1vLz9iZWQ4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIi9Vc2Vycy9hbnRvbmlvbWFydGluZXovRG9jdW1lbnRzL0Vuc2lnbiBDb2xsZWdlLzUgLSBTcHJpbmcgMjAyNS9DUyA0MjAvVzUvbGFuZ2dyYXBocmFnL2FwcC9hcGkvdmVjdG9yU2VhcmNoL3JvdXRlLnRzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS92ZWN0b3JTZWFyY2gvcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS92ZWN0b3JTZWFyY2hcIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL3ZlY3RvclNlYXJjaC9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIi9Vc2Vycy9hbnRvbmlvbWFydGluZXovRG9jdW1lbnRzL0Vuc2lnbiBDb2xsZWdlLzUgLSBTcHJpbmcgMjAyNS9DUyA0MjAvVzUvbGFuZ2dyYXBocmFnL2FwcC9hcGkvdmVjdG9yU2VhcmNoL3JvdXRlLnRzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MgfSA9IHJvdXRlTW9kdWxlO1xuY29uc3Qgb3JpZ2luYWxQYXRobmFtZSA9IFwiL2FwaS92ZWN0b3JTZWFyY2gvcm91dGVcIjtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgc2VydmVySG9va3MsXG4gICAgICAgIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgb3JpZ2luYWxQYXRobmFtZSwgcGF0Y2hGZXRjaCwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2FvectorSearch%2Froute&page=%2Fapi%2FvectorSearch%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2FvectorSearch%2Froute.ts&appDir=%2FUsers%2Fantoniomartinez%2FDocuments%2FEnsign%20College%2F5%20-%20Spring%202025%2FCS%20420%2FW5%2Flanggraphrag%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fantoniomartinez%2FDocuments%2FEnsign%20College%2F5%20-%20Spring%202025%2FCS%20420%2FW5%2Flanggraphrag&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/api/vectorSearch/route.ts":
/*!***************************************!*\
  !*** ./app/api/vectorSearch/route.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var _langchain_openai__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @langchain/openai */ \"(rsc)/./node_modules/@langchain/openai/index.js\");\n/* harmony import */ var _app_lib_mongodb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/app/lib/mongodb */ \"(rsc)/./app/lib/mongodb.ts\");\n/* harmony import */ var _langchain_mongodb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @langchain/mongodb */ \"(rsc)/./node_modules/@langchain/mongodb/index.js\");\n\n\n\nasync function POST(req) {\n    const client = await _app_lib_mongodb__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\n    const dbName = \"docs\";\n    const collectionName = \"embeddings\";\n    const collection = client.db(dbName).collection(collectionName);\n    const dbConfig = {\n        collection: collection,\n        indexName: \"vector_index\",\n        textKey: \"text\",\n        embeddingKey: \"embedding\"\n    };\n    const vectorStore = new _langchain_mongodb__WEBPACK_IMPORTED_MODULE_2__.MongoDBAtlasVectorSearch(new _langchain_openai__WEBPACK_IMPORTED_MODULE_0__.OpenAIEmbeddings({\n        stripNewLines: true\n    }), dbConfig);\n    const question = await req.text();\n    const retriever = await vectorStore.asRetriever({\n        searchType: \"mmr\",\n        searchKwargs: {\n            fetchK: 20,\n            lambda: 0.1\n        }\n    });\n    const retrievedResults = await retriever.getRelevantDocuments(question);\n    return Response.json(retrievedResults);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL3ZlY3RvclNlYXJjaC9yb3V0ZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQXFEO0FBQ0Y7QUFDVztBQUV2RCxlQUFlRyxLQUFLQyxHQUFZO0lBQ25DLE1BQU1DLFNBQVMsTUFBTUosd0RBQWtCQTtJQUN2QyxNQUFNSyxTQUFTO0lBQ2YsTUFBTUMsaUJBQWlCO0lBQ3ZCLE1BQU1DLGFBQWFILE9BQU9JLEVBQUUsQ0FBQ0gsUUFBUUUsVUFBVSxDQUFDRDtJQUVoRCxNQUFNRyxXQUFXO1FBQ2JGLFlBQVlBO1FBQ1pHLFdBQVc7UUFDWEMsU0FBUztRQUNUQyxjQUFjO0lBQ2xCO0lBQ0EsTUFBTUMsY0FBYyxJQUFJWix3RUFBd0JBLENBQzVDLElBQUlGLCtEQUFnQkEsQ0FBQztRQUNqQmUsZUFBZTtJQUNuQixJQUFJTDtJQUVSLE1BQU1NLFdBQVcsTUFBTVosSUFBSWEsSUFBSTtJQUMvQixNQUFNQyxZQUFZLE1BQU1KLFlBQVlLLFdBQVcsQ0FBQztRQUM1Q0MsWUFBWTtRQUNaQyxjQUFjO1lBQ1ZDLFFBQVE7WUFDUkMsUUFBUTtRQUNaO0lBQ0o7SUFDQSxNQUFNQyxtQkFBbUIsTUFBTU4sVUFBVU8sb0JBQW9CLENBQUNUO0lBRTlELE9BQU9VLFNBQVNDLElBQUksQ0FBQ0g7QUFDekIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kb2NzLXZlY3Rvci1zZWFyY2gtZGVtby8uL2FwcC9hcGkvdmVjdG9yU2VhcmNoL3JvdXRlLnRzP2NmOTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT3BlbkFJRW1iZWRkaW5ncyB9IGZyb20gXCJAbGFuZ2NoYWluL29wZW5haVwiO1xuaW1wb3J0IG1vbmdvQ2xpZW50UHJvbWlzZSBmcm9tIFwiQC9hcHAvbGliL21vbmdvZGJcIjtcbmltcG9ydCB7IE1vbmdvREJBdGxhc1ZlY3RvclNlYXJjaCB9IGZyb20gXCJAbGFuZ2NoYWluL21vbmdvZGJcIjtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIFBPU1QocmVxOiBSZXF1ZXN0KSB7XG4gICAgY29uc3QgY2xpZW50ID0gYXdhaXQgbW9uZ29DbGllbnRQcm9taXNlO1xuICAgIGNvbnN0IGRiTmFtZSA9IFwiZG9jc1wiO1xuICAgIGNvbnN0IGNvbGxlY3Rpb25OYW1lID0gXCJlbWJlZGRpbmdzXCI7XG4gICAgY29uc3QgY29sbGVjdGlvbiA9IGNsaWVudC5kYihkYk5hbWUpLmNvbGxlY3Rpb24oY29sbGVjdGlvbk5hbWUpO1xuXG4gICAgY29uc3QgZGJDb25maWcgPSB7XG4gICAgICAgIGNvbGxlY3Rpb246IGNvbGxlY3Rpb24sXG4gICAgICAgIGluZGV4TmFtZTogXCJ2ZWN0b3JfaW5kZXhcIixcbiAgICAgICAgdGV4dEtleTogXCJ0ZXh0XCIsXG4gICAgICAgIGVtYmVkZGluZ0tleTogXCJlbWJlZGRpbmdcIixcbiAgICB9O1xuICAgIGNvbnN0IHZlY3RvclN0b3JlID0gbmV3IE1vbmdvREJBdGxhc1ZlY3RvclNlYXJjaChcbiAgICAgICAgbmV3IE9wZW5BSUVtYmVkZGluZ3Moe1xuICAgICAgICAgICAgc3RyaXBOZXdMaW5lczogdHJ1ZSxcbiAgICAgICAgfSksIGRiQ29uZmlnKTtcblxuICAgIGNvbnN0IHF1ZXN0aW9uID0gYXdhaXQgcmVxLnRleHQoKTtcbiAgICBjb25zdCByZXRyaWV2ZXIgPSBhd2FpdCB2ZWN0b3JTdG9yZS5hc1JldHJpZXZlcih7XG4gICAgICAgIHNlYXJjaFR5cGU6IFwibW1yXCIsXG4gICAgICAgIHNlYXJjaEt3YXJnczoge1xuICAgICAgICAgICAgZmV0Y2hLOiAyMCxcbiAgICAgICAgICAgIGxhbWJkYTogMC4xLFxuICAgICAgICB9LCBcbiAgICB9KTtcbiAgICBjb25zdCByZXRyaWV2ZWRSZXN1bHRzID0gYXdhaXQgcmV0cmlldmVyLmdldFJlbGV2YW50RG9jdW1lbnRzKHF1ZXN0aW9uKTtcblxuICAgIHJldHVybiBSZXNwb25zZS5qc29uKHJldHJpZXZlZFJlc3VsdHMpO1xufVxuIl0sIm5hbWVzIjpbIk9wZW5BSUVtYmVkZGluZ3MiLCJtb25nb0NsaWVudFByb21pc2UiLCJNb25nb0RCQXRsYXNWZWN0b3JTZWFyY2giLCJQT1NUIiwicmVxIiwiY2xpZW50IiwiZGJOYW1lIiwiY29sbGVjdGlvbk5hbWUiLCJjb2xsZWN0aW9uIiwiZGIiLCJkYkNvbmZpZyIsImluZGV4TmFtZSIsInRleHRLZXkiLCJlbWJlZGRpbmdLZXkiLCJ2ZWN0b3JTdG9yZSIsInN0cmlwTmV3TGluZXMiLCJxdWVzdGlvbiIsInRleHQiLCJyZXRyaWV2ZXIiLCJhc1JldHJpZXZlciIsInNlYXJjaFR5cGUiLCJzZWFyY2hLd2FyZ3MiLCJmZXRjaEsiLCJsYW1iZGEiLCJyZXRyaWV2ZWRSZXN1bHRzIiwiZ2V0UmVsZXZhbnREb2N1bWVudHMiLCJSZXNwb25zZSIsImpzb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./app/api/vectorSearch/route.ts\n");

/***/ }),

/***/ "(rsc)/./app/lib/mongodb.ts":
/*!****************************!*\
  !*** ./app/lib/mongodb.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n\nconst uri = process.env.MONGODB_ATLAS_URI; // your mongodb connection string\nconst options = {\n    appName: \"devrel.workshop.javascript\"\n};\nlet client;\nlet mongoClientPromise;\nif (!uri) {\n    throw new Error(\"Please add your Mongo URI to .env.local\");\n}\nif (true) {\n    // In development mode, use a global variable so that the value\n    // is preserved across module reloads caused by HMR (Hot Module Replacement).\n    if (!global._mongoClientPromise) {\n        client = new mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient(uri, options);\n        global._mongoClientPromise = client.connect();\n    }\n    mongoClientPromise = global._mongoClientPromise;\n} else {}\n// Export a module-scoped MongoClient promise. By doing this in a\n// separate module, the client can be shared across functions.\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mongoClientPromise);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvbGliL21vbmdvZGIudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXNDO0FBRXRDLE1BQU1DLE1BQU1DLFFBQVFDLEdBQUcsQ0FBQ0MsaUJBQWlCLEVBQVksaUNBQWlDO0FBQ3RGLE1BQU1DLFVBQVU7SUFBQ0MsU0FBUztBQUE0QjtBQUV0RCxJQUFJQztBQUNKLElBQUlDO0FBTUosSUFBSSxDQUFDUCxLQUFLO0lBQ1IsTUFBTSxJQUFJUSxNQUFNO0FBQ2xCO0FBRUEsSUFBSVAsSUFBc0MsRUFBRTtJQUMxQywrREFBK0Q7SUFDL0QsNkVBQTZFO0lBQzdFLElBQUksQ0FBQ1EsT0FBT0MsbUJBQW1CLEVBQUU7UUFDL0JKLFNBQVMsSUFBSVAsZ0RBQVdBLENBQUNDLEtBQUtJO1FBQzlCSyxPQUFPQyxtQkFBbUIsR0FBR0osT0FBT0ssT0FBTztJQUM3QztJQUNBSixxQkFBcUJFLE9BQU9DLG1CQUFtQjtBQUNqRCxPQUFPLEVBSU47QUFFRCxpRUFBaUU7QUFDakUsOERBQThEO0FBQzlELGlFQUFlSCxrQkFBa0JBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kb2NzLXZlY3Rvci1zZWFyY2gtZGVtby8uL2FwcC9saWIvbW9uZ29kYi50cz84MmU5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vbmdvQ2xpZW50IH0gZnJvbSBcIm1vbmdvZGJcIjtcblxuY29uc3QgdXJpID0gcHJvY2Vzcy5lbnYuTU9OR09EQl9BVExBU19VUkkgYXMgc3RyaW5nOyAvLyB5b3VyIG1vbmdvZGIgY29ubmVjdGlvbiBzdHJpbmdcbmNvbnN0IG9wdGlvbnMgPSB7YXBwTmFtZTogJ2RldnJlbC53b3Jrc2hvcC5qYXZhc2NyaXB0J307XG5cbmxldCBjbGllbnQ7XG5sZXQgbW9uZ29DbGllbnRQcm9taXNlOiBQcm9taXNlPGFueT47XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgdmFyIF9tb25nb0NsaWVudFByb21pc2U6IFByb21pc2U8YW55Pjtcbn1cblxuaWYgKCF1cmkpIHtcbiAgdGhyb3cgbmV3IEVycm9yKFwiUGxlYXNlIGFkZCB5b3VyIE1vbmdvIFVSSSB0byAuZW52LmxvY2FsXCIpO1xufVxuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwiZGV2ZWxvcG1lbnRcIikge1xuICAvLyBJbiBkZXZlbG9wbWVudCBtb2RlLCB1c2UgYSBnbG9iYWwgdmFyaWFibGUgc28gdGhhdCB0aGUgdmFsdWVcbiAgLy8gaXMgcHJlc2VydmVkIGFjcm9zcyBtb2R1bGUgcmVsb2FkcyBjYXVzZWQgYnkgSE1SIChIb3QgTW9kdWxlIFJlcGxhY2VtZW50KS5cbiAgaWYgKCFnbG9iYWwuX21vbmdvQ2xpZW50UHJvbWlzZSkge1xuICAgIGNsaWVudCA9IG5ldyBNb25nb0NsaWVudCh1cmksIG9wdGlvbnMpO1xuICAgIGdsb2JhbC5fbW9uZ29DbGllbnRQcm9taXNlID0gY2xpZW50LmNvbm5lY3QoKTtcbiAgfVxuICBtb25nb0NsaWVudFByb21pc2UgPSBnbG9iYWwuX21vbmdvQ2xpZW50UHJvbWlzZTtcbn0gZWxzZSB7XG4gIC8vIEluIHByb2R1Y3Rpb24gbW9kZSwgaXQncyBiZXN0IHRvIG5vdCB1c2UgYSBnbG9iYWwgdmFyaWFibGUuXG4gIGNsaWVudCA9IG5ldyBNb25nb0NsaWVudCh1cmksIG9wdGlvbnMpO1xuICBtb25nb0NsaWVudFByb21pc2UgPSBjbGllbnQuY29ubmVjdCgpO1xufVxuXG4vLyBFeHBvcnQgYSBtb2R1bGUtc2NvcGVkIE1vbmdvQ2xpZW50IHByb21pc2UuIEJ5IGRvaW5nIHRoaXMgaW4gYVxuLy8gc2VwYXJhdGUgbW9kdWxlLCB0aGUgY2xpZW50IGNhbiBiZSBzaGFyZWQgYWNyb3NzIGZ1bmN0aW9ucy5cbmV4cG9ydCBkZWZhdWx0IG1vbmdvQ2xpZW50UHJvbWlzZTtcbiJdLCJuYW1lcyI6WyJNb25nb0NsaWVudCIsInVyaSIsInByb2Nlc3MiLCJlbnYiLCJNT05HT0RCX0FUTEFTX1VSSSIsIm9wdGlvbnMiLCJhcHBOYW1lIiwiY2xpZW50IiwibW9uZ29DbGllbnRQcm9taXNlIiwiRXJyb3IiLCJnbG9iYWwiLCJfbW9uZ29DbGllbnRQcm9taXNlIiwiY29ubmVjdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./app/lib/mongodb.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/formdata-node","vendor-chunks/ms","vendor-chunks/@langchain","vendor-chunks/ml-distance","vendor-chunks/zod-to-json-schema","vendor-chunks/form-data-encoder","vendor-chunks/node-fetch","vendor-chunks/uuid","vendor-chunks/agentkeepalive","vendor-chunks/retry","vendor-chunks/p-queue","vendor-chunks/ml-tree-similarity","vendor-chunks/js-tiktoken","vendor-chunks/zod","vendor-chunks/web-streams-polyfill","vendor-chunks/p-timeout","vendor-chunks/p-retry","vendor-chunks/p-finally","vendor-chunks/num-sort","vendor-chunks/ml-distance-euclidean","vendor-chunks/ml-array-sum","vendor-chunks/ml-array-mean","vendor-chunks/is-any-array","vendor-chunks/humanize-ms","vendor-chunks/eventemitter3","vendor-chunks/event-target-shim","vendor-chunks/decamelize","vendor-chunks/camelcase","vendor-chunks/binary-search","vendor-chunks/base64-js","vendor-chunks/abort-controller"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2FvectorSearch%2Froute&page=%2Fapi%2FvectorSearch%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2FvectorSearch%2Froute.ts&appDir=%2FUsers%2Fantoniomartinez%2FDocuments%2FEnsign%20College%2F5%20-%20Spring%202025%2FCS%20420%2FW5%2Flanggraphrag%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fantoniomartinez%2FDocuments%2FEnsign%20College%2F5%20-%20Spring%202025%2FCS%20420%2FW5%2Flanggraphrag&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();