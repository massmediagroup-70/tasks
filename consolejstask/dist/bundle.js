/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./dist/Controller.js":
/*!****************************!*\
  !*** ./dist/Controller.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Controller; });\nclass Controller {\n  static changePlayer() {\n\n  }\n\n  static win() {\n\n  }\n}\n\n//# sourceURL=webpack:///./dist/Controller.js?");

/***/ }),

/***/ "./dist/Game.js":
/*!**********************!*\
  !*** ./dist/Game.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Game; });\n/* harmony import */ var _State__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./State */ \"./dist/State.js\");\n/* harmony import */ var _LogController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LogController */ \"./dist/LogController.js\");\n\n\n\nclass Game {\n  constructor(_user1, _user2) {\n    this.user1 = _user1;\n    this.user2 = _user2;\n    this.state = new _State__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n  }\n\n  makeMove(user, x, y) {\n    if (this.state.checkMatrixElement(x, y)) {\n      user.move(x, y);\n      this.state.setMatrixElement(x, y, user.item.sign);\n\n    }\n    if (this.state.checkMatrix(x, y)) {\n      _LogController__WEBPACK_IMPORTED_MODULE_1__[\"default\"].win(user.item.sign);\n      this.End();\n    }else this.state.changeCurrentUser();\n  }\n\n  getHits() {\n    _LogController__WEBPACK_IMPORTED_MODULE_1__[\"default\"].matrix(this.state.matrix);\n  }\n  /*\n  Start() {\n\n    /!* const stateObj = JSON.parse(localStorage.getItem('state'));\n    if (stateObj != null) {\n      this.state.currentUser = stateObj.currentUser;\n      this.state.matrix = stateObj.matrix;\n      this.field.restore(this.user1, this.user2, this.state);\n    } *!/\n    this.field.clickOn(this.canvas, this.user1, this.user2, this.state, this);\n  } */\n\n\n  /* DrawField() {\n    this.field = new Field(document.getElementById('field'));\n  } */\n\n  End() {\n    this.state.currentUser = 0;\n  }\n\n  /*  Restart() {\n      /!* localStorage.setItem('state', null); *!/\n      this.state = null;\n      /!* this.field.clearField();\n      this.DrawField(); *!/\n      this.Start();\n    } */\n}\n\n\n//# sourceURL=webpack:///./dist/Game.js?");

/***/ }),

/***/ "./dist/Item.js":
/*!**********************!*\
  !*** ./dist/Item.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Item; });\nclass Item {\n  constructor() {\n    this.sign = 0;\n  }\n\n  push(x, y) {\n\n  }\n}\n\n//# sourceURL=webpack:///./dist/Item.js?");

/***/ }),

/***/ "./dist/ItemCircle.js":
/*!****************************!*\
  !*** ./dist/ItemCircle.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ItemCircle; });\n/* harmony import */ var _Item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Item */ \"./dist/Item.js\");\n\n\nclass ItemCircle extends _Item__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor() {\n    super();\n    this.sign = 1;\n  }\n\n  push(x, y) {\n\n  }\n\n}\n\n//# sourceURL=webpack:///./dist/ItemCircle.js?");

/***/ }),

/***/ "./dist/ItemCross.js":
/*!***************************!*\
  !*** ./dist/ItemCross.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ItemCross; });\n/* harmony import */ var _Item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Item */ \"./dist/Item.js\");\n\n\nclass ItemCross extends _Item__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor() {\n    super();\n    this.sign = 2;\n  }\n\n  push(x, y) {\n\n  }\n}\n\n//# sourceURL=webpack:///./dist/ItemCross.js?");

/***/ }),

/***/ "./dist/LogController.js":
/*!*******************************!*\
  !*** ./dist/LogController.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return LogController; });\n/* harmony import */ var _Controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Controller */ \"./dist/Controller.js\");\n\n\nclass LogController extends _Controller__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  static changePlayer(number) {\n    console.log(`Player ${number} turn`);\n  }\n\n  static win(number) {\n    console.log(`Player ${number} is WINNER`);\n  }\n\n  static turn() {\n    console.log('Set coordinates');\n  }\n\n  static matrix(matrix) {\n    for (let i = 0; i < 3; i += 1) console.log(`${matrix[i][0]} ${matrix[i][1]} ${matrix[i][2]}`);\n    console.log('1 - Player with 0, 2 - Player with x');\n  }\n}\n\n//# sourceURL=webpack:///./dist/LogController.js?");

/***/ }),

/***/ "./dist/State.js":
/*!***********************!*\
  !*** ./dist/State.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return State; });\n/* harmony import */ var _LogController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LogController */ \"./dist/LogController.js\");\n\n\nclass State {\n  constructor() {\n    this.currentUser = 1;\n    this.matrix = [\n      [0, 0, 0],\n      [0, 0, 0],\n      [0, 0, 0],\n    ];\n    this.setCurrentUser = function (userOption) {\n      this.currentUser = userOption;\n      /* this.saveInLocalStorage();*/\n      _LogController__WEBPACK_IMPORTED_MODULE_0__[\"default\"].changePlayer(this.currentUser);\n    };\n    this.getCurrentUser = function () {\n      return this.currentUser;\n    };\n    this.setMatrixElement = function (x, y, value) {\n      x = this.convertCoordinate(x);\n      y = this.convertCoordinate(y);\n      this.matrix[x][y] = value;\n      /*this.saveInLocalStorage();*/\n    };\n    this.getMatrixElement = function (x, y) {\n      return this.matrix[x][y];\n    }\n    _LogController__WEBPACK_IMPORTED_MODULE_0__[\"default\"].changePlayer(this.currentUser);\n\n  }\n\n  returnIndex(coordinate) {\n    if (coordinate <= 200) {\n      return 0;\n    }\n    if (coordinate <= 400) {\n      return 200;\n    } return 400;\n  }\n\n  convertCoordinate(x) {\n    return this.returnIndex(x) / 200;\n  }\n  /*\n  saveInLocalStorage() {\n    const stateJson = JSON.stringify(this);\n    window.localStorage.setItem('state', stateJson);\n  } */\n\n  checkMatrixElement(x, y) {\n    x = this.convertCoordinate(x);\n    y = this.convertCoordinate(y);\n    if (this.matrix[x][y] === 0) {\n      return true;\n    } return false;\n  }\n\n  changeCurrentUser() {\n    if(this.currentUser === 1) this.setCurrentUser(2);\n    else this.setCurrentUser(1);\n  }\n\n  checkMatrix(x, y) {\n    x = this.convertCoordinate(x);\n    y = this.convertCoordinate(y);\n    let check = true;\n    const userItem = this.matrix[x][y];\n    for (let i = 0; i < 3; i += 1) {\n      if (this.matrix[i][y] === userItem) {\n        check = true;\n      } else {\n        check = false;\n        break;\n      }\n    }\n    if (check) return true;\n    for (let i = 0; i < 3; i += 1) {\n      if (this.matrix[x][i] === userItem) {\n        check = true;\n      } else {\n        check = false;\n        break;\n      }\n    }\n    if (check) return true;\n    for (let i = 0, j = 0; i < 3; i += 1, j += 1) {\n      if (i === j && this.matrix[i][j] === userItem) {\n        check = true;\n      } else {\n        check = false;\n        break;\n      }\n    }\n    if (check) return true;\n    for (let i = 0, j = 2; i < 3; i += 1, j -= 1) {\n      if (this.matrix[i][j] === userItem) {\n        check = true;\n      } else {\n        check = false;\n        break;\n      }\n    }\n    if (check) return true;\n    return false;\n  }\n}\n\n\n//# sourceURL=webpack:///./dist/State.js?");

/***/ }),

/***/ "./dist/User.js":
/*!**********************!*\
  !*** ./dist/User.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return User; });\nclass User {\n  constructor(item) {\n    this.item = item;\n  }\n\n  move(x, y) {\n    this.item.push(x, y);\n  }\n}\n\n\n//# sourceURL=webpack:///./dist/User.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dist_Game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dist/Game */ \"./dist/Game.js\");\n/* harmony import */ var _dist_User__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dist/User */ \"./dist/User.js\");\n/* harmony import */ var _dist_ItemCross__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dist/ItemCross */ \"./dist/ItemCross.js\");\n/* harmony import */ var _dist_ItemCircle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dist/ItemCircle */ \"./dist/ItemCircle.js\");\n\n\n\n\n\nconst game = new _dist_Game__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\nconst cross = new _dist_ItemCross__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\nconst circle = new _dist_ItemCircle__WEBPACK_IMPORTED_MODULE_3__[\"default\"]();\nconst user1 = new _dist_User__WEBPACK_IMPORTED_MODULE_1__[\"default\"](cross);\nconst user2 = new _dist_User__WEBPACK_IMPORTED_MODULE_1__[\"default\"](circle);\ngame.makeMove(user1, 200, 500); // [x, y] - координата\ngame.makeMove(user2, 500, 500);\ngame.makeMove(user1, 100, 100);\ngame.makeMove(user2, 300, 300);\ngame.makeMove(user1, 100, 300);\n\ngame.getHits();\n\n\n/* const express = require('express');\n\nconst app = express();\n\napp.use(express.static(`${__dirname}/proj/public/`));\napp.get('/', (req, res) => {\n  res.sendFile('/home/dev/tasks/consolejstask/dist/index.html');\n});\n\nvar server = app.listen(1337, () => {\n  const host = server.address().address;\n  const { port } = server.address();\n\n  console.log('Listening at http://127.0.0.1:1337/');\n}); */\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });