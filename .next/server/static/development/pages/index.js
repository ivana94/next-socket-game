module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Medium; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _socket__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./socket */ \"./pages/socket.js\");\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nObject(_socket__WEBPACK_IMPORTED_MODULE_1__[\"initSocket\"])();\nfunction Medium() {\n  const {\n    0: currentNumber,\n    1: setCurrentNumber\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])();\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    setTimeout(() => {\n      if (currentNumber) {\n        _socket__WEBPACK_IMPORTED_MODULE_1__[\"socket\"].emit(\"number\", currentNumber);\n      }\n    }, 3000);\n  }, [currentNumber]);\n  _socket__WEBPACK_IMPORTED_MODULE_1__[\"socket\"].on(\"firstNumber\", num => {\n    setCurrentNumber(num);\n  });\n  _socket__WEBPACK_IMPORTED_MODULE_1__[\"socket\"].on(\"nextNumber\", num => {\n    setCurrentNumber(num);\n  });\n  return __jsx(\"div\", null, __jsx(\"h1\", null, currentNumber));\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbImluaXRTb2NrZXQiLCJNZWRpdW0iLCJjdXJyZW50TnVtYmVyIiwic2V0Q3VycmVudE51bWJlciIsInVzZVN0YXRlIiwidXNlRWZmZWN0Iiwic2V0VGltZW91dCIsInNvY2tldCIsImVtaXQiLCJvbiIsIm51bSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFDQTtBQUVBQSwwREFBVTtBQUVLLFNBQVNDLE1BQVQsR0FBa0I7QUFDaEMsUUFBTTtBQUFBLE9BQUNDLGFBQUQ7QUFBQSxPQUFnQkM7QUFBaEIsTUFBb0NDLHNEQUFRLEVBQWxEO0FBRUFDLHlEQUFTLENBQUMsTUFBTTtBQUNmQyxjQUFVLENBQUMsTUFBTTtBQUNoQixVQUFJSixhQUFKLEVBQW1CO0FBQ2xCSyxzREFBTSxDQUFDQyxJQUFQLENBQVksUUFBWixFQUFzQk4sYUFBdEI7QUFDQTtBQUNELEtBSlMsRUFJUCxJQUpPLENBQVY7QUFLQSxHQU5RLEVBTU4sQ0FBQ0EsYUFBRCxDQU5NLENBQVQ7QUFRQUssZ0RBQU0sQ0FBQ0UsRUFBUCxDQUFVLGFBQVYsRUFBMEJDLEdBQUQsSUFBUztBQUNqQ1Asb0JBQWdCLENBQUNPLEdBQUQsQ0FBaEI7QUFDQSxHQUZEO0FBSUFILGdEQUFNLENBQUNFLEVBQVAsQ0FBVSxZQUFWLEVBQXlCQyxHQUFELElBQVM7QUFDaENQLG9CQUFnQixDQUFDTyxHQUFELENBQWhCO0FBQ0EsR0FGRDtBQUdBLFNBQ0MsbUJBQ0Msa0JBQUtSLGFBQUwsQ0FERCxDQUREO0FBS0EiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBzb2NrZXQsIGluaXRTb2NrZXQgfSBmcm9tIFwiLi9zb2NrZXRcIjtcblxuaW5pdFNvY2tldCgpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNZWRpdW0oKSB7XG5cdGNvbnN0IFtjdXJyZW50TnVtYmVyLCBzZXRDdXJyZW50TnVtYmVyXSA9IHVzZVN0YXRlKCk7XG5cblx0dXNlRWZmZWN0KCgpID0+IHtcblx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdGlmIChjdXJyZW50TnVtYmVyKSB7XG5cdFx0XHRcdHNvY2tldC5lbWl0KFwibnVtYmVyXCIsIGN1cnJlbnROdW1iZXIpO1xuXHRcdFx0fVxuXHRcdH0sIDMwMDApO1xuXHR9LCBbY3VycmVudE51bWJlcl0pO1xuXG5cdHNvY2tldC5vbihcImZpcnN0TnVtYmVyXCIsIChudW0pID0+IHtcblx0XHRzZXRDdXJyZW50TnVtYmVyKG51bSk7XG5cdH0pO1xuXG5cdHNvY2tldC5vbihcIm5leHROdW1iZXJcIiwgKG51bSkgPT4ge1xuXHRcdHNldEN1cnJlbnROdW1iZXIobnVtKTtcblx0fSk7XG5cdHJldHVybiAoXG5cdFx0PGRpdj5cblx0XHRcdDxoMT57Y3VycmVudE51bWJlcn08L2gxPlxuXHRcdDwvZGl2PlxuXHQpO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "./pages/socket.js":
/*!*************************!*\
  !*** ./pages/socket.js ***!
  \*************************/
/*! exports provided: socket, initSocket */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"socket\", function() { return socket; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initSocket\", function() { return initSocket; });\n/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! socket.io-client */ \"socket.io-client\");\n/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_0__);\n\nlet socket;\nconst initSocket = () => {\n  if (!socket) {\n    socket = socket_io_client__WEBPACK_IMPORTED_MODULE_0__[\"connect\"]();\n  }\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9zb2NrZXQuanM/M2ZlNiJdLCJuYW1lcyI6WyJzb2NrZXQiLCJpbml0U29ja2V0IiwiaW8iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVPLElBQUlBLE1BQUo7QUFFQSxNQUFNQyxVQUFVLEdBQUcsTUFBTTtBQUMvQixNQUFJLENBQUNELE1BQUwsRUFBYTtBQUNaQSxVQUFNLEdBQUdFLHdEQUFBLEVBQVQ7QUFDQTtBQUNELENBSk0iLCJmaWxlIjoiLi9wYWdlcy9zb2NrZXQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBpbyBmcm9tIFwic29ja2V0LmlvLWNsaWVudFwiO1xuXG5leHBvcnQgbGV0IHNvY2tldDtcblxuZXhwb3J0IGNvbnN0IGluaXRTb2NrZXQgPSAoKSA9PiB7XG5cdGlmICghc29ja2V0KSB7XG5cdFx0c29ja2V0ID0gaW8uY29ubmVjdCgpO1xuXHR9XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/socket.js\n");

/***/ }),

/***/ 4:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/ivanamatijevic/dev/game-of-three/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "socket.io-client":
/*!***********************************!*\
  !*** external "socket.io-client" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"socket.io-client\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzb2NrZXQuaW8tY2xpZW50XCI/OGJjNSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJzb2NrZXQuaW8tY2xpZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic29ja2V0LmlvLWNsaWVudFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///socket.io-client\n");

/***/ })

/******/ });