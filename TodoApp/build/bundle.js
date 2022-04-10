/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module './image/logo.png'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module './index.css'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n\r\n\r\n\r\nlet root=document.getElementById('root');\r\n\r\nlet image=document.createElement('img');\r\nimage.src=Object(function webpackMissingModule() { var e = new Error(\"Cannot find module './image/logo.png'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\r\nlet div=document.createElement('div');\r\ndiv.setAttribute(\"class\",\"imageContainer\");\r\ndiv.append(image);\r\n\r\nroot.append(div);\r\n\r\nlet form=document.createElement('form');\r\nform.setAttribute('id','form');\r\n\r\nlet input=document.createElement(\"input\");\r\ninput.setAttribute(\"type\", \"text\");\r\ninput.setAttribute(\"id\", \"text\");\r\ninput.setAttribute('placeholder', 'Enter your task to Add');\r\n\r\nlet submit=document.createElement(\"input\");\r\nsubmit.setAttribute(\"type\",\"submit\");\r\nsubmit.setAttribute(\"id\", \"submit\");\r\nsubmit.setAttribute(\"value\", \"Add\");\r\n\r\nlet div1=document.createElement('div');\r\ndiv1.append(input,submit);\r\nform.append(div1);\r\nroot.append(form);\r\n\r\n\r\nlet table=document.createElement(\"table\");\r\ntable.setAttribute('id','table');\r\nlet caption=document.createElement('caption');\r\ncaption.setAttribute('id','caption');\r\ncaption.textContent=\"My Todo List\";\r\ntable.append(caption);\r\nroot.append(table);\r\n\r\nlet thead=document.createElement('thead');\r\nlet task=document.createElement('th');\r\ntask.textContent=\"Task\";\r\n\r\nlet del=document.createElement('th');\r\ndel.textContent=\"Delet It?\";\r\nlet tr1=document.createElement('tr');\r\ntr1.append(task,del);\r\nthead.append(tr1);\r\ntable.append(thead);\r\nroot.append(table);\r\n\r\nlet tbody=document.createElement('tbody');\r\n\r\n\r\nsubmit.addEventListener(\"click\", getValue);\r\n\r\n\r\nlet todoArr=JSON.parse(localStorage.getItem('task')) || [];\r\ndisplayTodos(todoArr);\r\nfunction getValue(event){\r\n\r\n    event.preventDefault();\r\n    let yourTask=document.getElementById('text').value;\r\n    let obj={\r\n        task:yourTask,\r\n    }\r\n    todoArr.push(obj);\r\n    localStorage.setItem('task', JSON.stringify(todoArr));\r\n    displayTodos(todoArr);\r\n}\r\n\r\n\r\nfunction displayTodos(arr){\r\n    tbody.innerHTML=\"\";\r\n    arr.map((el,index)=>{\r\n        let tr=document.createElement('tr');\r\n        let td1=document.createElement('td');\r\n        td1.textContent=el.task;\r\n        let td2=document.createElement('td');\r\n        td2.setAttribute('id','del');\r\n        td2.textContent=\"Delete\";\r\n        tr.append(td1,td2);\r\n        tbody.appendChild(tr);\r\n        table.appendChild(tbody);\r\n        root.appendChild(table);\r\n        td2.addEventListener('click',function (){\r\n            deletTask(index);\r\n        });         \r\n        \r\n    });\r\n\r\n    function deletTask(index){\r\n        todoArr.splice(index,1);\r\n        localStorage.setItem('task',JSON.stringify(todoArr));\r\n        displayTodos(todoArr);\r\n    }\r\n}\r\n\r\n\n\n//# sourceURL=webpack://todoapp/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;