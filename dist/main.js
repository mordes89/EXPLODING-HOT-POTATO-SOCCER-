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

eval("// import Example from \"./scripts/example\";\n// document.addEventListener(\"DOMContentLoaded\", ()=> {\n//    // console.log(\"Hello World!\");\n//    // const main = document.getElementById(\"main\");\n//    // new Example(main);\n// }); \nvar canvas = document.querySelector('canvas'); //find the <canvas> element in the HTML\n\ncanvas.width = window.innerWidth;\ncanvas.height = window.innerHeight;\nvar ctx = canvas.getContext('2d'); // Conventionally, ctx defined as our 2d canvas\n\nrequestAnimationFrame(play); //Loop gameplay\n// User\n\nvar user = {\n  x: 20,\n  y: 30,\n  w: 50,\n  h: 20,\n  move: 10\n};\ndocument.addEventListener(\"keydown\", keyDowns);\ndocument.addEventListener(\"keyup\", keyUps);\n\nfunction keyDowns() {\n  if (event.code === 'ArrowLeft') {\n    user.x -= user.move;\n    console.log(event.code);\n  }\n\n  if (event.code === 'ArrowRight') {\n    user.x += user.move;\n    console.log(event.code);\n  }\n\n  if (event.code === 'ArrowDown') {\n    user.y += user.move;\n    console.log(event.code);\n  }\n\n  if (event.code === 'ArrowUp') {\n    user.y -= user.move;\n    console.log(event.code);\n  }\n}\n\nfunction keyUps() {\n  if (event.code === 'ArrowLeft') {\n    user.x -= user.move;\n    console.log(event.code);\n  }\n\n  if (event.code === 'ArrowRight') {\n    user.x += user.move;\n    console.log(event.code);\n  }\n\n  if (event.code === 'ArrowDown') {\n    user.y += user.move;\n    console.log(event.code);\n  }\n\n  if (event.code === 'ArrowUp') {\n    user.y -= user.move;\n    console.log(event.code);\n  }\n}\n\nfunction play() {\n  // Clear the board before making a move:\n  ctx.clearRect(0, 0, window.innerWidth, window.innerHeight); // User's new position printed:\n\n  ctx.fillStyle = 'red';\n  ctx.fillRect(user.x, user.y, user.w, user.h); // Continue playing:\n\n  requestAnimationFrame(play); //Loop gameplay\n} // // Field\n// ctx.fillStyle = 'green';\n// ctx.fillRect(40, 40, 200, 100);\n// // Left goal\n// ctx.fillStyle = 'white';\n// ctx.fillRect(20, 70, 20, 40);\n// // Right goal\n// ctx.fillStyle = 'white';\n// ctx.fillRect(240, 70, 20, 40);\n// // Right goal\n// ctx.fillStyle = 'white';\n// ctx.fillRect(240, 70, 20, 40);\n// function animate() { //Recursive function that    \n//    ctx.clearRect(0, 0, innerWidth, innerHeight);\n//    let x = Math.random() * 300;\n//    let y = Math.random() * 150;\n//    ctx.beginPath();\n//    ctx.lineWidth = 5;\n//    ctx.strokeStyle = \"red\"\n//    ctx.arc(x, y, 5, Math.PI * 2, false);\n//    ctx.stroke();   \n//    ctx.fill();   \n// }\n// animate();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qc3Byb2ovLi9zcmMvaW5kZXguanM/YjYzNSJdLCJuYW1lcyI6WyJjYW52YXMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJ3aWR0aCIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJoZWlnaHQiLCJpbm5lckhlaWdodCIsImN0eCIsImdldENvbnRleHQiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJwbGF5IiwidXNlciIsIngiLCJ5IiwidyIsImgiLCJtb3ZlIiwiYWRkRXZlbnRMaXN0ZW5lciIsImtleURvd25zIiwia2V5VXBzIiwiZXZlbnQiLCJjb2RlIiwiY29uc29sZSIsImxvZyIsImNsZWFyUmVjdCIsImZpbGxTdHlsZSIsImZpbGxSZWN0Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFNQSxNQUFNLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixRQUF2QixDQUFmLEMsQ0FBaUQ7O0FBQ2pERixNQUFNLENBQUNHLEtBQVAsR0FBZUMsTUFBTSxDQUFDQyxVQUF0QjtBQUNBTCxNQUFNLENBQUNNLE1BQVAsR0FBZ0JGLE1BQU0sQ0FBQ0csV0FBdkI7QUFDQSxJQUFNQyxHQUFHLEdBQUdSLE1BQU0sQ0FBQ1MsVUFBUCxDQUFrQixJQUFsQixDQUFaLEMsQ0FBZ0Q7O0FBQ2hEQyxxQkFBcUIsQ0FBQ0MsSUFBRCxDQUFyQixDLENBQTZCO0FBQzdCOztBQUNBLElBQUlDLElBQUksR0FBRztBQUNSQyxFQUFBQSxDQUFDLEVBQUUsRUFESztBQUVSQyxFQUFBQSxDQUFDLEVBQUUsRUFGSztBQUdSQyxFQUFBQSxDQUFDLEVBQUUsRUFISztBQUlSQyxFQUFBQSxDQUFDLEVBQUUsRUFKSztBQUtSQyxFQUFBQSxJQUFJLEVBQUU7QUFMRSxDQUFYO0FBUUFoQixRQUFRLENBQUNpQixnQkFBVCxDQUEwQixTQUExQixFQUFxQ0MsUUFBckM7QUFDQWxCLFFBQVEsQ0FBQ2lCLGdCQUFULENBQTBCLE9B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IGltcG9ydCBFeGFtcGxlIGZyb20gXCIuL3NjcmlwdHMvZXhhbXBsZVwiO1xyXG5cclxuXHJcbi8vIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpPT4ge1xyXG4vLyAgICAvLyBjb25zb2xlLmxvZyhcIkhlbGxvIFdvcmxkIVwiKTtcclxuLy8gICAgLy8gY29uc3QgbWFpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpblwiKTtcclxuLy8gICAgLy8gbmV3IEV4YW1wbGUobWFpbik7XHJcbi8vIH0pOyBcclxuY29uc3QgY2FudmFzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignY2FudmFzJyk7IC8vZmluZCB0aGUgPGNhbnZhcz4gZWxlbWVudCBpbiB0aGUgSFRNTFxyXG5jYW52YXMud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcclxuY2FudmFzLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcclxuY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7ICAgICAgICAgICAgLy8gQ29udmVudGlvbmFsbHksIGN0eCBkZWZpbmVkIGFzIG91ciAyZCBjYW52YXNcclxucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHBsYXkpOyAvL0xvb3AgZ2FtZXBsYXlcclxuLy8gVXNlclxyXG5sZXQgdXNlciA9IHtcclxuICAgeDogMjAsXHJcbiAgIHk6IDMwLFxyXG4gICB3OiA1MCxcclxuICAgaDogMjAsXHJcbiAgIG1vdmU6IDEwXHJcbn1cclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGtleURvd25zKTtcclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIGtleVVwcyk7XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIGtleURvd25zKCl7XHJcbiAgIGlmIChldmVudC5jb2RlID09PSdBcnJvd0xlZnQnKXtcclxuICAgICAgdXNlci54IC09IHVzZXIubW92ZTtcclxuICAgICAgY29uc29sZS5sb2coZXZlbnQuY29kZSlcclxuICAgfVxyXG4gICBpZiAoZXZlbnQuY29kZSA9PT0nQXJyb3dSaWdodCcpe1xyXG4gICAgICB1c2VyLnggKz0gdXNlci5tb3ZlO1xyXG4gICAgICBjb25zb2xlLmxvZyhldmVudC5jb2RlKVxyXG4gICB9XHJcbiAgIGlmIChldmVudC5jb2RlID09PSdBcnJvd0Rvd24nKXtcclxuICAgICAgdXNlci55ICs9IHVzZXIubW92ZTtcclxuICAgICAgY29uc29sZS5sb2coZXZlbnQuY29kZSlcclxuICAgfVxyXG4gICBpZiAoZXZlbnQuY29kZSA9PT0nQXJyb3dVcCcpe1xyXG4gICAgICB1c2VyLnkgLT0gdXNlci5tb3ZlO1xyXG4gICAgICBjb25zb2xlLmxvZyhldmVudC5jb2RlKVxyXG4gICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGtleVVwcygpe1xyXG4gICBpZiAoZXZlbnQuY29kZSA9PT0nQXJyb3dMZWZ0Jyl7XHJcbiAgICAgIHVzZXIueCAtPSB1c2VyLm1vdmU7XHJcbiAgICAgIGNvbnNvbGUubG9nKGV2ZW50LmNvZGUpXHJcbiAgIH1cclxuICAgaWYgKGV2ZW50LmNvZGUgPT09J0Fycm93UmlnaHQnKXtcclxuICAgICAgdXNlci54ICs9IHVzZXIubW92ZTtcclxuICAgICAgY29uc29sZS5sb2coZXZlbnQuY29kZSlcclxuICAgfVxyXG4gICBpZiAoZXZlbnQuY29kZSA9PT0nQXJyb3dEb3duJyl7XHJcbiAgICAgIHVzZXIueSArPSB1c2VyLm1vdmU7XHJcbiAgICAgIGNvbnNvbGUubG9nKGV2ZW50LmNvZGUpXHJcbiAgIH1cclxuICAgaWYgKGV2ZW50LmNvZGUgPT09J0Fycm93VXAnKXtcclxuICAgICAgdXNlci55IC09IHVzZXIubW92ZTtcclxuICAgICAgY29uc29sZS5sb2coZXZlbnQuY29kZSlcclxuICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBwbGF5KCl7XHJcbiAgIC8vIENsZWFyIHRoZSBib2FyZCBiZWZvcmUgbWFraW5nIGEgbW92ZTpcclxuICAgY3R4LmNsZWFyUmVjdCgwLCAwLCB3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0KVxyXG5cclxuICAgLy8gVXNlcidzIG5ldyBwb3NpdGlvbiBwcmludGVkOlxyXG4gICBjdHguZmlsbFN0eWxlID0gJ3JlZCc7XHJcbiAgIGN0eC5maWxsUmVjdCh1c2VyLngsIHVzZXIueSwgdXNlci53LCB1c2VyLmgpO1xyXG5cclxuICAgLy8gQ29udGludWUgcGxheWluZzpcclxuICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHBsYXkpOyAvL0xvb3AgZ2FtZXBsYXlcclxuXHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG4vLyAvLyBGaWVsZFxyXG4vLyBjdHguZmlsbFN0eWxlID0gJ2dyZWVuJztcclxuLy8gY3R4LmZpbGxSZWN0KDQwLCA0MCwgMjAwLCAxMDApO1xyXG4vLyAvLyBMZWZ0IGdvYWxcclxuLy8gY3R4LmZpbGxTdHlsZSA9ICd3aGl0ZSc7XHJcbi8vIGN0eC5maWxsUmVjdCgyMCwgNzAsIDIwLCA0MCk7XHJcbi8vIC8vIFJpZ2h0IGdvYWxcclxuLy8gY3R4LmZpbGxTdHlsZSA9ICd3aGl0ZSc7XHJcbi8vIGN0eC5maWxsUmVjdCgyNDAsIDcwLCAyMCwgNDApO1xyXG4vLyAvLyBSaWdodCBnb2FsXHJcbi8vIGN0eC5maWxsU3R5bGUgPSAnd2hpdGUnO1xyXG4vLyBjdHguZmlsbFJlY3QoMjQwLCA3MCwgMjAsIDQwKTtcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4vLyBmdW5jdGlvbiBhbmltYXRlKCkgeyAvL1JlY3Vyc2l2ZSBmdW5jdGlvbiB0aGF0ICAgIFxyXG4vLyAgICBjdHguY2xlYXJSZWN0KDAsIDAsIGlubmVyV2lkdGgsIGlubmVySGVpZ2h0KTtcclxuLy8gICAgbGV0IHggPSBNYXRoLnJhbmRvbSgpICogMzAwO1xyXG4vLyAgICBsZXQgeSA9IE1hdGgucmFuZG9tKCkgKiAxNTA7XHJcbi8vICAgIGN0eC5iZWdpblBhdGgoKTtcclxuLy8gICAgY3R4LmxpbmVXaWR0aCA9IDU7XHJcbi8vICAgIGN0eC5zdHJva2VTdHlsZSA9IFwicmVkXCJcclxuLy8gICAgY3R4LmFyYyh4LCB5LCA1LCBNYXRoLlBJICogMiwgZmFsc2UpO1xyXG4vLyAgICBjdHguc3Ryb2tlKCk7ICAgXHJcbi8vICAgIGN0eC5maWxsKCk7ICAgXHJcbi8vIH1cclxuLy8gYW5pbWF0ZSgpO1xyXG5cclxuXHJcbiJdLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

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