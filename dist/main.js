/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_example__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/example */ \"./src/scripts/example.js\");\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  // console.log(\"Hello World!\");\n  var main = document.getElementById(\"main\");\n  new _scripts_example__WEBPACK_IMPORTED_MODULE_0__.default(main);\n});\nvar canvas = document.querySelector('canvas'); // console.log(canvas);\n\nvar ctx = canvas.getContext('2d');\nctx.fillStyle = 'green';\nctx.fillRect(10, 10, 150, 100);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUdBQyxRQUFRLENBQUNDLGdCQUFULENBQTBCLGtCQUExQixFQUE4QyxZQUFLO0FBQ2hEO0FBQ0EsTUFBTUMsSUFBSSxHQUFHRixRQUFRLENBQUNHLGNBQVQsQ0FBd0IsTUFBeEIsQ0FBYjtBQUNBLE1BQUlKLHFEQUFKLENBQVlHLElBQVo7QUFDRixDQUpEO0FBTUEsSUFBTUUsTUFBTSxHQUFHSixRQUFRLENBQUNLLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBZixFQUNBOztBQUNBLElBQU1DLEdBQUcsR0FBR0YsTUFBTSxDQUFDRyxVQUFQLENBQWtCLElBQWxCLENBQVo7QUFFQUQsR0FBRyxDQUFDRSxTQUFKLEdBQWdCLE9BQWhCO0FBQ0FGLEdBQUcsQ0FBQ0csUUFBSixDQUFhLEVBQWIsRUFBaUIsRUFBakIsRUFBcUIsR0FBckIsRUFBMEIsR0FBMUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qc3Byb2ovLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRXhhbXBsZSBmcm9tIFwiLi9zY3JpcHRzL2V4YW1wbGVcIjtcclxuXHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKT0+IHtcclxuICAgLy8gY29uc29sZS5sb2coXCJIZWxsbyBXb3JsZCFcIik7XHJcbiAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5cIik7XHJcbiAgIG5ldyBFeGFtcGxlKG1haW4pO1xyXG59KTtcclxuXHJcbmNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2NhbnZhcycpO1xyXG4vLyBjb25zb2xlLmxvZyhjYW52YXMpO1xyXG5jb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcclxuXHJcbmN0eC5maWxsU3R5bGUgPSAnZ3JlZW4nO1xyXG5jdHguZmlsbFJlY3QoMTAsIDEwLCAxNTAsIDEwMCk7XHJcblxyXG5cclxuXHJcbiJdLCJuYW1lcyI6WyJFeGFtcGxlIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwibWFpbiIsImdldEVsZW1lbnRCeUlkIiwiY2FudmFzIiwicXVlcnlTZWxlY3RvciIsImN0eCIsImdldENvbnRleHQiLCJmaWxsU3R5bGUiLCJmaWxsUmVjdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/example.js":
/*!********************************!*\
  !*** ./src/scripts/example.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Example = /*#__PURE__*/function () {\n  function Example(ele) {\n    _classCallCheck(this, Example);\n\n    this.ele = ele;\n    this.ele.innerHTML = \"<h1>It's Alive!!!</H1>\";\n    this.handleClick = this.handleClick.bind(this);\n    this.ele.addEventListener(\"click\", this.handleClick);\n  }\n\n  _createClass(Example, [{\n    key: \"handleClick\",\n    value: function handleClick() {\n      // this.ele.children[0].innerText = \"Ouch!\";\n      this.ele.children[0].innerText = \"WTF?!\";\n    }\n  }]);\n\n  return Example;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Example);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9leGFtcGxlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7SUFBTUE7QUFDSCxtQkFBWUMsR0FBWixFQUFpQjtBQUFBOztBQUNkLFNBQUtBLEdBQUwsR0FBV0EsR0FBWDtBQUNBLFNBQUtBLEdBQUwsQ0FBU0MsU0FBVCxHQUFxQix3QkFBckI7QUFDQSxTQUFLQyxXQUFMLEdBQW1CLEtBQUtBLFdBQUwsQ0FBaUJDLElBQWpCLENBQXNCLElBQXRCLENBQW5CO0FBQ0EsU0FBS0gsR0FBTCxDQUFTSSxnQkFBVCxDQUEwQixPQUExQixFQUFtQyxLQUFLRixXQUF4QztBQUNGOzs7O1dBRUQsdUJBQWM7QUFDWDtBQUNBLFdBQUtGLEdBQUwsQ0FBU0ssUUFBVCxDQUFrQixDQUFsQixFQUFxQkMsU0FBckIsR0FBaUMsT0FBakM7QUFDRjs7Ozs7O0FBT0osK0RBQWVQLE9BQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qc3Byb2ovLi9zcmMvc2NyaXB0cy9leGFtcGxlLmpzP2ZjZWUiXSwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgRXhhbXBsZSB7XHJcbiAgIGNvbnN0cnVjdG9yKGVsZSkge1xyXG4gICAgICB0aGlzLmVsZSA9IGVsZTtcclxuICAgICAgdGhpcy5lbGUuaW5uZXJIVE1MID0gXCI8aDE+SXQncyBBbGl2ZSEhITwvSDE+XCI7XHJcbiAgICAgIHRoaXMuaGFuZGxlQ2xpY2sgPSB0aGlzLmhhbmRsZUNsaWNrLmJpbmQodGhpcyk7XHJcbiAgICAgIHRoaXMuZWxlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLmhhbmRsZUNsaWNrKTsgICBcclxuICAgfVxyXG5cclxuICAgaGFuZGxlQ2xpY2soKSB7XHJcbiAgICAgIC8vIHRoaXMuZWxlLmNoaWxkcmVuWzBdLmlubmVyVGV4dCA9IFwiT3VjaCFcIjtcclxuICAgICAgdGhpcy5lbGUuY2hpbGRyZW5bMF0uaW5uZXJUZXh0ID0gXCJXVEY/IVwiXHJcbiAgIH1cclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEV4YW1wbGU7XHJcbiJdLCJuYW1lcyI6WyJFeGFtcGxlIiwiZWxlIiwiaW5uZXJIVE1MIiwiaGFuZGxlQ2xpY2siLCJiaW5kIiwiYWRkRXZlbnRMaXN0ZW5lciIsImNoaWxkcmVuIiwiaW5uZXJUZXh0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/example.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2Nzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qc3Byb2ovLi9zcmMvaW5kZXguc2Nzcz85NzQ1Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.scss\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.scss");
/******/ 	
/******/ })()
;