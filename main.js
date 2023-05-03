/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "home": () => (/* binding */ home)
/* harmony export */ });
function home() {
    const container = document.getElementById('content');

    const homePage = document.createElement('div');
    homePage.classList.add('home');
    homePage.innerHTML = `
        <div class="heading">Welcome To Cip</div>
        <div class="main">
        <div class="description">Cip Restaurant specializes in delicious food featuring fresh ingredients and masterful preparation by the culinary team. Whether you're ordering a multi-course meal or grabbing a drink and pizza at the bar, Cip's lively, casual yet upscale atmosphere makes it perfect for dining with friends, family, clients and business associates.</div>
        <img class="img" src="/dist/images/—Pngtree—luxury gold background thai pattern_2455373.jpg" alt="description-background">
        </div>
    `;

    container.appendChild(homePage);
}



/***/ }),
/* 2 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "nav": () => (/* binding */ nav)
/* harmony export */ });
function nav() {
    const container = document.getElementById('content');

    const navigation = document.createElement('nav');
    navigation.classList.add('nav');
    navigation.innerHTML = `
        <div class="logo">Cip Restaurant</div>
        <ul>
            <li>Home</li>
            <li>Menu</li>
            <li>Contact</li>
        </ul>
    `;

    container.appendChild(navigation);
}



/***/ }),
/* 3 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "menu": () => (/* binding */ menu)
/* harmony export */ });
/* harmony import */ var _meals_menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);


function menu() {
    const container = document.getElementById('content');

    const menuPage = document.createElement('div');
    menuPage.classList.add('menu');

    menuPage.innerHTML = `
        <div class="title">Menu</div>
        <div class="options">
            <div id="meals" class="option">Meals</div>
            <div id="desserts" class="option">Desserts</div>
            <div id="drinks" class="option">Drinks</div>
        </div>
    `;

    container.appendChild(menuPage);
    (0,_meals_menu__WEBPACK_IMPORTED_MODULE_0__.meals)();
}







{/* <div class="menu-grid">
    <div class="item-">
        <img src="" alt="item-image">
        <div class="item-description"></div>
        <div class="item-price"></div>
    </div>
</div> */}

/***/ }),
/* 4 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "meals": () => (/* binding */ meals)
/* harmony export */ });
function meals() {
    const container = document.getElementById('content');

    const mealsPage = document.createElement('div');
    mealsPage.classList.add('meals-page');

    mealsPage.innerHTML = `
        <div class="menu-grid">
            <div class="item">
                <img src="https://www.tasteofhome.com/wp-content/uploads/2018/01/Eggplant-Rollatini_EXPS_THCA19_41566_B08_07_1b-6.jpg?resize=696,696" alt="item-image">
                <div class="item-description"></div>
                <div class="item-price"></div>
            </div>
            <div class="item">
                <img src="" alt="item-image">
                <div class="item-description"></div>
                <div class="item-price"></div>
            </div>
            <div class="item">
                <img src="" alt="item-image">
                <div class="item-description"></div>
                <div class="item-price"></div>
            </div>
            <div class="item">
                <img src="" alt="item-image">
                <div class="item-description"></div>
                <div class="item-price"></div>
            </div>
            <div class="item">
                <img src="" alt="item-image">
                <div class="item-description"></div>
                <div class="item-price"></div>
            </div>
            <div class="item">
                <img src="" alt="item-image">
                <div class="item-description"></div>
                <div class="item-price"></div>
            </div>
            <div class="item">
                <img src="" alt="item-image">
                <div class="item-description"></div>
                <div class="item-price"></div>
            </div>
            <div class="item">
                <img src="" alt="item-image">
                <div class="item-description"></div>
                <div class="item-price"></div>
            </div>
            <div class="item">
                <img src="" alt="item-image">
                <div class="item-description"></div>
                <div class="item-price"></div>
            </div>
            <div class="item">
                <img src="" alt="item-image">
                <div class="item-description"></div>
                <div class="item-price"></div>
            </div>
        </div>
    `;

    container.appendChild(mealsPage);
}



/***/ })
/******/ 	]);
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _nav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);




(0,_nav__WEBPACK_IMPORTED_MODULE_2__.nav)();
// home();
(0,_menu__WEBPACK_IMPORTED_MODULE_1__.menu)();
})();

/******/ })()
;