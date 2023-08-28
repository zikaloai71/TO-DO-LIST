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

/***/ "./src/completeItem.js":
/*!*****************************!*\
  !*** ./src/completeItem.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   completeItem: () => (/* binding */ completeItem)\n/* harmony export */ });\nfunction completeItem() {\r\n  let lists = [...document.querySelectorAll(\".lists\")];\r\n  let complete = [...document.querySelectorAll(\".complete\")];\r\n  complete.forEach((button) => {\r\n    button.addEventListener(\"click\", () => {\r\n      lists[complete.indexOf(button)].innerHTML = `<h2>completed</h2>`;\r\n      lists[complete.indexOf(button)].style.backgroundColor = \"green\";\r\n      setTimeout(function () {\r\n        lists[complete.indexOf(button)].remove();\r\n      }, 3000);\r\n    });\r\n  });\r\n}\r\n\r\n\n\n//# sourceURL=webpack://to-do-list/./src/completeItem.js?");

/***/ }),

/***/ "./src/deleteItem.js":
/*!***************************!*\
  !*** ./src/deleteItem.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   deleteItem: () => (/* binding */ deleteItem)\n/* harmony export */ });\nfunction deleteItem() {\r\n  let lists = [...document.querySelectorAll(\".lists\")];\r\n  let deleteButtons = [...document.querySelectorAll(\".delete\")];\r\n  deleteButtons.forEach((button) => {\r\n    button.addEventListener(\"click\", () => {\r\n      lists[deleteButtons.indexOf(button)].remove();\r\n    });\r\n  });\r\n}\r\n\r\n\n\n//# sourceURL=webpack://to-do-list/./src/deleteItem.js?");

/***/ }),

/***/ "./src/description.js":
/*!****************************!*\
  !*** ./src/description.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   description: () => (/* binding */ description)\n/* harmony export */ });\nfunction description() {\r\n  let description = document.getElementById(\"description\");\r\n  return description.value;\r\n}\r\n\r\n\n\n//# sourceURL=webpack://to-do-list/./src/description.js?");

/***/ }),

/***/ "./src/draganddrop.js":
/*!****************************!*\
  !*** ./src/draganddrop.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   dragAndDrop: () => (/* binding */ dragAndDrop)\n/* harmony export */ });\n// import { deleteItem } from \"./deleteItem\";\r\n// import { completeItem } from \"./completeItem\";\r\n// import { setItem } from \"./setItem\";\r\n// import { editPriority } from \"./editPriority\";\r\n\r\n// let holder;\r\n// function eventListeners() {\r\n//   let set = setItem();\r\n//   deleteItem();\r\n//   completeItem();\r\n//   editPriority(set);\r\n// }\r\n\r\n// function handleDragStart(e) {\r\n\r\n//   this.style.opacity = \"0.4\";\r\n//   holder = this;\r\n//   e.dataTransfer.setData(\"text/html\", this.innerHTML);\r\n// }\r\n\r\n// // function handleDragOver(e) {\r\n// //   e.preventDefault();\r\n// // }\r\n\r\n// function handleDrop(e) {\r\n//   if (holder != this) {\r\n//     holder.innerHTML = this.innerHTML;\r\n//     this.innerHTML = e.dataTransfer.getData(\"text/html\");\r\n//     eventListeners();\r\n//   }\r\n//   eventListeners();\r\n// }\r\n\r\n// function handleDragEnd(e) {\r\n//   this.style.opacity = \"1\";\r\n// }\r\n\r\nfunction dragAndDrop() {\r\n  let lists = [...document.querySelectorAll(\".lists\")];\r\n  lists.forEach((list) => {\r\n    list.addEventListener(\"dragstart\", ()=>{\r\n      list.classList.add('dragging');\r\n    });\r\n    // list.addEventListener(\"dragover\", handleDragOver);\r\n    // list.addEventListener(\"drop\", handleDrop);\r\n    list.addEventListener(\"dragend\", ()=>{\r\n      list.classList.remove('dragging');\r\n    });\r\n  });\r\n  let container = document.querySelector('.container');\r\n  container.addEventListener('dragover',e=>{\r\n    e.preventDefault();\r\n    const afterElement = getDragAfterElement(container, e.clientY)\r\n    const draggable = document.querySelector('.dragging')\r\n    if (afterElement == null) {\r\n      container.appendChild(draggable)\r\n    } else {\r\n      container.insertBefore(draggable, afterElement)\r\n    }\r\n  })\r\n}\r\n\r\nfunction getDragAfterElement(container, y) {\r\n  const draggableElements = [...container.querySelectorAll('.lists:not(.dragging)')]\r\n\r\n  return draggableElements.reduce((closest, child) => {\r\n    const box = child.getBoundingClientRect();\r\n    const offset = y - box.top - box.height / 2;\r\n    if (offset < 0 && offset > closest.offset) {\r\n      return { offset: offset, element: child }\r\n    } else {\r\n      return closest\r\n    }\r\n  }, { offset: Number.NEGATIVE_INFINITY }).element\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://to-do-list/./src/draganddrop.js?");

/***/ }),

/***/ "./src/due-date.js":
/*!*************************!*\
  !*** ./src/due-date.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   dueDate: () => (/* binding */ dueDate)\n/* harmony export */ });\nfunction dueDate() {\r\n  let today = new Date().toISOString().slice(0, 10);\r\n  let dueDate = document.getElementById(\"due-date\");\r\n  dueDate.min = today;\r\n  return dueDate.value;\r\n}\r\n\r\n\n\n//# sourceURL=webpack://to-do-list/./src/due-date.js?");

/***/ }),

/***/ "./src/editPriority.js":
/*!*****************************!*\
  !*** ./src/editPriority.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   editPriority: () => (/* binding */ editPriority)\n/* harmony export */ });\nfunction editPriority(set) {\r\n  let lists = [...document.querySelectorAll(\".lists\")];\r\n  let edit = [...document.querySelectorAll(\".edit\")];\r\n\r\n  edit.forEach((button) => {\r\n    button.addEventListener(\"click\", (e) => {\r\n      if (set.priority === \"#FF3636\") {\r\n        lists[edit.indexOf(button)].style.backgroundColor = \"#282A7A\";\r\n        set.priority = \"#282A7A\";\r\n      } else if (set.priority === \"#282A7A\") {\r\n        lists[edit.indexOf(button)].style.backgroundColor = \"#1C7A22\";\r\n        set.priority = \"#1C7A22\";\r\n      } else if (set.priority === \"#1C7A22\") {\r\n        lists[edit.indexOf(button)].style.backgroundColor = \"#FF3636\";\r\n        set.priority = \"#FF3636\";\r\n      }\r\n    });\r\n  });\r\n}\r\n\r\n\n\n//# sourceURL=webpack://to-do-list/./src/editPriority.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _deleteItem_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./deleteItem.js */ \"./src/deleteItem.js\");\n/* harmony import */ var _completeItem_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./completeItem.js */ \"./src/completeItem.js\");\n/* harmony import */ var _setItem_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./setItem.js */ \"./src/setItem.js\");\n/* harmony import */ var _due_date_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./due-date.js */ \"./src/due-date.js\");\n/* harmony import */ var _editPriority_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./editPriority.js */ \"./src/editPriority.js\");\n/* harmony import */ var _draganddrop_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./draganddrop.js */ \"./src/draganddrop.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst submit = document.getElementById(\"submit\");\r\nconst addToDo = document.getElementById(\"todo\");\r\nconst toDoForm = document.getElementById(\"todo-form\");\r\n\r\n(0,_due_date_js__WEBPACK_IMPORTED_MODULE_3__.dueDate)();\r\n\r\naddToDo.addEventListener(\"click\", () => {\r\n  if (toDoForm.classList.contains(\"display-none\") == true) {\r\n    toDoForm.classList.remove(\"display-none\");\r\n  } else {\r\n    toDoForm.classList.add(\"display-none\");\r\n  }\r\n});\r\n\r\nsubmit.addEventListener(\"click\", (e) => {\r\n  e.preventDefault();\r\n  let set = (0,_setItem_js__WEBPACK_IMPORTED_MODULE_2__.setItem)();\r\n  (0,_setItem_js__WEBPACK_IMPORTED_MODULE_2__.createItem)(set);\r\n  (0,_draganddrop_js__WEBPACK_IMPORTED_MODULE_5__.dragAndDrop)();\r\n  (0,_deleteItem_js__WEBPACK_IMPORTED_MODULE_0__.deleteItem)();\r\n  (0,_completeItem_js__WEBPACK_IMPORTED_MODULE_1__.completeItem)();\r\n  (0,_editPriority_js__WEBPACK_IMPORTED_MODULE_4__.editPriority)(set);\r\n});\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://to-do-list/./src/index.js?");

/***/ }),

/***/ "./src/priority.js":
/*!*************************!*\
  !*** ./src/priority.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   priority: () => (/* binding */ priority)\n/* harmony export */ });\nfunction priority() {\r\n  let option = [...document.getElementsByTagName(\"option\")];\r\n\r\n  for (let i = 0; i < option.length; i++) {\r\n    if (option[i].selected === true) {\r\n      if (option[i].value === \"red\") {\r\n        return \"#FF3636\";\r\n      } else if (option[i].value === \"blue\") {\r\n        return \"#282A7A\";\r\n      } else if (option[i].value === \"green\") {\r\n        return \"#1C7A22\";\r\n      }\r\n    }\r\n  }\r\n}\r\n\r\n\n\n//# sourceURL=webpack://to-do-list/./src/priority.js?");

/***/ }),

/***/ "./src/setItem.js":
/*!************************!*\
  !*** ./src/setItem.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createItem: () => (/* binding */ createItem),\n/* harmony export */   setItem: () => (/* binding */ setItem)\n/* harmony export */ });\n/* harmony import */ var _title_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./title.js */ \"./src/title.js\");\n/* harmony import */ var _description_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./description.js */ \"./src/description.js\");\n/* harmony import */ var _due_date_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./due-date.js */ \"./src/due-date.js\");\n/* harmony import */ var _priority_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./priority.js */ \"./src/priority.js\");\n\r\n\r\n\r\n\r\n\r\nlet ul = document.createElement(\"ul\");\r\nul.classList.add('container');\r\nlet body = document.getElementsByTagName(\"body\")[0];\r\nbody.appendChild(ul);\r\n\r\nfunction Todo(title, description, date, priority) {\r\n  this.title = title;\r\n  this.description = description;\r\n  this.date = date;\r\n  this.priority = priority;\r\n}\r\nfunction setItem() {\r\n  let list = new Todo((0,_title_js__WEBPACK_IMPORTED_MODULE_0__.title)(), (0,_description_js__WEBPACK_IMPORTED_MODULE_1__.description)(), (0,_due_date_js__WEBPACK_IMPORTED_MODULE_2__.dueDate)(), (0,_priority_js__WEBPACK_IMPORTED_MODULE_3__.priority)());\r\n  if ((0,_title_js__WEBPACK_IMPORTED_MODULE_0__.title)() == \"\" || (0,_description_js__WEBPACK_IMPORTED_MODULE_1__.description)() == \"\" || (0,_due_date_js__WEBPACK_IMPORTED_MODULE_2__.dueDate)() == \"\") {\r\n    return;\r\n  }\r\n  return list;\r\n}\r\n\r\nfunction createItem(list) {\r\n  let li = document.createElement(\"li\");\r\n  li.setAttribute(\"draggable\", \"true\");\r\n  ul.appendChild(li);\r\n  li.classList.add(\"lists\");\r\n  li.innerHTML += `<p> <span>title :  ${list.title}</span>\r\n    <span> description :  ${list.description}</span>\r\n     <span>due-date : ${list.date}</span></p>\r\n    <aside>\r\n    <button class=\"delete\"><i class=\"fa-solid fa-trash\"></i></button><button class='edit'><i class=\"fa-solid fa-pen-to-square\"></i></button><button class='complete'><i class=\"fa-solid fa-check\"></i></button></aside> \r\n    `;\r\n  li.style.backgroundColor = list.priority;\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://to-do-list/./src/setItem.js?");

/***/ }),

/***/ "./src/title.js":
/*!**********************!*\
  !*** ./src/title.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   title: () => (/* binding */ title)\n/* harmony export */ });\nfunction title() {\r\n  let title = document.getElementById(\"title\");\r\n  return title.value;\r\n}\r\n\r\n\n\n//# sourceURL=webpack://to-do-list/./src/title.js?");

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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;