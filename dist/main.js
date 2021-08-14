/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function() {

eval("// import Example from \"./scripts/example\";\n// document.addEventListener(\"DOMContentLoaded\", ()=> {\n//    // console.log(\"Hello World!\");\n//    // const main = document.getElementById(\"main\");\n//    // new Example(main);\n// }); \nvar canvas = document.querySelector('canvas'); //find the <canvas> element in the HTML\n// canvas.width = window.innerWidth;\n// canvas.hight = window.innerHeight;\n\nvar ctx = canvas.getContext('2d'); // Conventionally, ctx defined as our 2d canvas\n\ndocument.addEventListener(\"keydown\", function () {\n  if (event.code === 'ArrowLeft') {\n    console.log(\"ArrowLeft\");\n  }\n\n  if (event.code === 'ArrowRight') {\n    console.log(\"ArrowRight\");\n  }\n\n  if (event.code === 'ArrowDown') {\n    console.log(\"ArrowDown\");\n  }\n\n  if (event.code === 'ArrowUp') {\n    console.log(\"ArrowUp\");\n  }\n}); // Field\n\nctx.fillStyle = 'green';\nctx.fillRect(40, 40, 200, 100); // Left goal\n\nctx.fillStyle = 'white';\nctx.fillRect(20, 70, 20, 40); // Right goal\n\nctx.fillStyle = 'white';\nctx.fillRect(240, 70, 20, 40); // Right goal\n\nctx.fillStyle = 'white';\nctx.fillRect(240, 70, 20, 40); // ^^ctx.fillRect(x, y, Width, Hight); ([x=0, y=0] is the top left corner)\n// function animate() { //Recursive function that    \n//    ctx.clearRect(0, 0, innerWidth, innerHeight);\n//    let x = Math.random() * 300;\n//    let y = Math.random() * 150;\n//    ctx.beginPath();\n//    ctx.lineWidth = 5;\n//    ctx.strokeStyle = \"red\"\n//    ctx.arc(x, y, 5, Math.PI * 2, false);\n//    ctx.stroke();   \n//    ctx.fill();   \n// }\n// animate();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qc3Byb2ovLi9zcmMvaW5kZXguanM/YjYzNSJdLCJuYW1lcyI6WyJjYW52YXMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJjdHgiLCJnZXRDb250ZXh0IiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwiY29kZSIsImNvbnNvbGUiLCJsb2ciLCJmaWxsU3R5bGUiLCJmaWxsUmVjdCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBTUEsTUFBTSxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBZixDLENBQWlEO0FBQ2pEO0FBQ0E7O0FBQ0EsSUFBTUMsR0FBRyxHQUFHSCxNQUFNLENBQUNJLFVBQVAsQ0FBa0IsSUFBbEIsQ0FBWixDLENBQWdEOztBQUdoREgsUUFBUSxDQUFDSSxnQkFBVCxDQUEwQixTQUExQixFQUFxQyxZQUFVO0FBQzVDLE1BQUlDLEtBQUssQ0FBQ0MsSUFBTixLQUFjLFdBQWxCLEVBQThCO0FBQzNCQyxJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxXQUFaO0FBQ0Y7O0FBQ0QsTUFBSUgsS0FBSyxDQUFDQyxJQUFOLEtBQWMsWUFBbEIsRUFBK0I7QUFDNUJDLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFlBQVo7QUFDRjs7QUFDRCxNQUFJSCxLQUFLLENBQUNDLElBQU4sS0FBYyxXQUFsQixFQUE4QjtBQUMzQkMsSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksV0FBWjtBQUNGOztBQUNELE1BQUlILEtBQUssQ0FBQ0MsSUFBTixLQUFjLFNBQWxCLEVBQTRCO0FBQ3pCQyxJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxTQUFaO0FBQ0Y7QUFDSCxDQWJELEUsQ0FlQTs7QUFDQU4sR0FBRyxDQUFDTyxTQUFKLEdBQWdCLE9BQWhCO0FBQ0FQLEdBQUcsQ0FBQ1EsUUFBSixDQUFhLEVBQWIsRUFBaUIsRUFBakIsRUFBcUIsR0FBckIsRUFBMEIsR0FBMUIsRSxDQUNBOztBQUNBUixHQUFHLENBQUNPLFNBQUosR0FBZ0IsT0FBaEI7QUFDQVAsR0FBRyxDQUFDUSxRQUFKLENBQWEsRUFBYixFQUFpQixFQUFqQixFQUFxQixFQUFyQixFQUF5QixFQUF6QixFLENBQ0E7O0FBQ0FSLEdBQUcsQ0FBQ08sU0FBSixHQUFnQixPQUFoQjtBQUNBUCxHQUFHLENBQUNRLFFBQUosQ0FBYSxHQUFiLEVBQWtCLEVBQWxCLEVBQXNCLEVBQXRCLEVBQTBCLEVBQTFCLEUsQ0FDQTs7QUFDQVIsR0FBRyxDQUFDTyxTQUFKLEdBQWdCLE9BQWhCO0FBQ0FQLEdBQUcsQ0FBQ1EsUUFBSixDQUFhLEdBQWIsRUFBa0IsRUFBbEIsRUFBc0IsRUFBdEIsRUFBMEIsRUFBMUIsRSxDQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IEV4YW1wbGUgZnJvbSBcIi4vc2NyaXB0cy9leGFtcGxlXCI7XHJcblxyXG5cclxuLy8gZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCk9PiB7XHJcbi8vICAgIC8vIGNvbnNvbGUubG9nKFwiSGVsbG8gV29ybGQhXCIpO1xyXG4vLyAgICAvLyBjb25zdCBtYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluXCIpO1xyXG4vLyAgICAvLyBuZXcgRXhhbXBsZShtYWluKTtcclxuLy8gfSk7IFxyXG5jb25zdCBjYW52YXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdjYW52YXMnKTsgLy9maW5kIHRoZSA8Y2FudmFzPiBlbGVtZW50IGluIHRoZSBIVE1MXHJcbi8vIGNhbnZhcy53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xyXG4vLyBjYW52YXMuaGlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XHJcbmNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpOyAgICAgICAgICAgIC8vIENvbnZlbnRpb25hbGx5LCBjdHggZGVmaW5lZCBhcyBvdXIgMmQgY2FudmFzXHJcblxyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgZnVuY3Rpb24oKXtcclxuICAgaWYgKGV2ZW50LmNvZGUgPT09J0Fycm93TGVmdCcpe1xyXG4gICAgICBjb25zb2xlLmxvZyhcIkFycm93TGVmdFwiKVxyXG4gICB9XHJcbiAgIGlmIChldmVudC5jb2RlID09PSdBcnJvd1JpZ2h0Jyl7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiQXJyb3dSaWdodFwiKVxyXG4gICB9XHJcbiAgIGlmIChldmVudC5jb2RlID09PSdBcnJvd0Rvd24nKXtcclxuICAgICAgY29uc29sZS5sb2coXCJBcnJvd0Rvd25cIilcclxuICAgfVxyXG4gICBpZiAoZXZlbnQuY29kZSA9PT0nQXJyb3dVcCcpe1xyXG4gICAgICBjb25zb2xlLmxvZyhcIkFycm93VXBcIilcclxuICAgfVxyXG59KTtcclxuXHJcbi8vIEZpZWxkXHJcbmN0eC5maWxsU3R5bGUgPSAnZ3JlZW4nO1xyXG5jdHguZmlsbFJlY3QoNDAsIDQwLCAyMDAsIDEwMCk7XHJcbi8vIExlZnQgZ29hbFxyXG5jdHguZmlsbFN0eWxlID0gJ3doaXRlJztcclxuY3R4LmZpbGxSZWN0KDIwLCA3MCwgMjAsIDQwKTtcclxuLy8gUmlnaHQgZ29hbFxyXG5jdHguZmlsbFN0eWxlID0gJ3doaXRlJztcclxuY3R4LmZpbGxSZWN0KDI0MCwgNzAsIDIwLCA0MCk7XHJcbi8vIFJpZ2h0IGdvYWxcclxuY3R4LmZpbGxTdHlsZSA9ICd3aGl0ZSc7XHJcbmN0eC5maWxsUmVjdCgyNDAsIDcwLCAyMCwgNDApO1xyXG4vLyBeXmN0eC5maWxsUmVjdCh4LCB5LCBXaWR0aCwgSGlnaHQpOyAoW3g9MCwgeT0wXSBpcyB0aGUgdG9wIGxlZnQgY29ybmVyKVxyXG5cclxuLy8gZnVuY3Rpb24gYW5pbWF0ZSgpIHsgLy9SZWN1cnNpdmUgZnVuY3Rpb24gdGhhdCAgICBcclxuLy8gICAgY3R4LmNsZWFyUmVjdCgwLCAwLCBpbm5lcldpZHRoLCBpbm5lckhlaWdodCk7XHJcbi8vICAgIGxldCB4ID0gTWF0aC5yYW5kb20oKSAqIDMwMDtcclxuLy8gICAgbGV0IHkgPSBNYXRoLnJhbmRvbSgpICogMTUwO1xyXG4vLyAgICBjdHguYmVnaW5QYXRoKCk7XHJcbi8vICAgIGN0eC5saW5lV2lkdGggPSA1O1xyXG4vLyAgICBjdHguc3Ryb2tlU3R5bGUgPSBcInJlZFwiXHJcbi8vICAgIGN0eC5hcmMoeCwgeSwgNSwgTWF0aC5QSSAqIDIsIGZhbHNlKTtcclxuLy8gICAgY3R4LnN0cm9rZSgpOyAgIFxyXG4vLyAgICBjdHguZmlsbCgpOyAgIFxyXG4vLyB9XHJcbi8vIGFuaW1hdGUoKTtcclxuXHJcblxyXG4iXSwiZmlsZSI6Ii4vc3JjL2luZGV4LmpzLmpzIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2Nzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qc3Byb2ovLi9zcmMvaW5kZXguc2Nzcz85NzQ1Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.scss\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
/******/ 	__webpack_modules__["./src/index.js"](0, {}, __webpack_require__);
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.scss"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;