/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

/*
    Appending accessable atributes to HTML5 tags
*/

document.addEventListener("DOMContentLoaded", () => {

    const appendAttributes = () => {
        const navElements = document.getElementsByTagName('nav');
        loopOverTag(navElements, "role", "navigation");
    }

    const loopOverTag = (collection, attribute, value) => {
        for (const tag of collection) {
            tag.setAttribute(attribute, value);
        }
    }
    
    appendAttributes();

    const body = document.getElementsByTagName("body")[0];
    
    const config = {
        attributes: false,
        childList: true
    }

    const mutationObserved = (mutationsList) => {
        for(const mutation of mutationsList) {
            if (mutation.type === 'childList') {
                appendAttributes();
                return;
            }
        }
    };

    const observer = new MutationObserver(mutationObserved);
    observer.observe(body, config);

});

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/*
    Adding user-is-tabbing class to the body if the user starts tabbing.
    This way we can know when to show outlines on for keyboard-users.
*/

const handleFirstClick = (e) => {
    document.body.classList.remove('user-is-tabbing');
    window.removeEventListener('mousedown', handleFirstClick);
    window.addEventListener('keydown', handleFirstTab);
}

const handleFirstTab = (e) => {
    if (e.keyCode === 9) {
        document.body.classList.add('user-is-tabbing');
        window.removeEventListener('keydown', handleFirstTab);
        window.addEventListener('mousedown', handleFirstClick);
    }
}

window.addEventListener('keydown', handleFirstTab);

/* unused harmony default export */ var _unused_webpack_default_export = (handleFirstTab);

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tabbing__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__accessibleAttributes__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__accessibleAttributes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__accessibleAttributes__);



/***/ })
/******/ ]);