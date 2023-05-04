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
/* harmony export */   "menu": () => (/* binding */ menu)
/* harmony export */ });
/* harmony import */ var _desserts_menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var _meals_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _drinks_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);




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

    // const mealsOption = document.getElementById('meals');
    // const dessertsOption = document.getElementById('desserts');
    // const drinksOption = document.getElementById('drinks');

    // // meals();

    // mealsOption.addEventListener('click', meals);
    // dessertsOption.addEventListener('click', desserts);
    // drinksOption.addEventListener('click', drinks);

    // document.addEventListener('click', (e) => {
    //     console.log(e);
    //     if(e === mealsOption) meals()
    //     if(e === dessertsOption) desserts()
    //     if(e === drinksOption) drinks()
    // })

    // mealsOption.onclick = () => meals();
    // dessertsOption.onclick = () => desserts();
    // drinksOption.onclick = () => drinks();
    // console.log(mealsOption, dessertsOption, drinksOption);

    // meals();
    // desserts();
    // drinks();
}







{/* <div class="menu-grid">
    <div class="item-">
        <img src="" alt="item-image">
        <div class="item-description"></div>
        <div class="item-price"></div>
    </div>
</div> */}

/***/ }),
/* 3 */
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
                <div class="item-description">Eggplant Rollatini</div>
                <div class="item-price">$20</div>
            </div>
            <div class="item">
                <img src="https://www.tasteofhome.com/wp-content/uploads/2018/01/California-Sushi-Rolls_EXPS_FT20_142244_F_0806_1-18.jpg?resize=700,700" alt="item-image">
                <div class="item-description">Sushi Rolls</div>
                <div class="item-price">$25</div>
            </div>
            <div class="item">
                <img src="https://www.tasteofhome.com/wp-content/uploads/2018/01/exps17019_GPW2337930B12_09_6b_WEB-12.jpg?resize=700,700" alt="item-image">
                <div class="item-description">Broccoli Shrimp Alfredo</div>
                <div class="item-price">$25</div>
            </div>
            <div class="item">
                <img src="https://www.tasteofhome.com/wp-content/uploads/2018/01/Potato-Sausage-Kale-Soup_EXPS_TOHcom22_74273_P2_MD_05_12_6b.jpg?resize=700,700" alt="item-image">
                <div class="item-description">Potato, Sausage & Kale Soup</div>
                <div class="item-price">$20</div>
            </div>
            <div class="item">
                <img src="https://www.tasteofhome.com/wp-content/uploads/2018/01/Garlic-Butter-Steak_EXPS_SDFM18_45362_C10_11_4b-7.jpg?resize=696,696" alt="item-image">
                <div class="item-description">Garlic-Butter Steak</div>
                <div class="item-price">$28</div>
            </div>
            <div class="item">
                <img src="https://www.tasteofhome.com/wp-content/uploads/2018/01/Beef-Stew-Provencal_exps156084_ESC3139121B03_27_2bC_RMS-2.jpg?resize=696,696" alt="item-image">
                <div class="item-description">Beef Stew Provencal</div>
                <div class="item-price">$28</div>
            </div>
            <div class="item">
                <img src="https://www.tasteofhome.com/wp-content/uploads/2018/01/Pat-s-King-of-Steaks-Philly-Cheese-Steak_exps150749_CW2376963B12_20_7bC_RMS-9.jpg?resize=700,700" alt="item-image">
                <div class="item-description">Philly Cheesesteak</div>
                <div class="item-price">$15</div>
            </div>
            <div class="item">
                <img src="https://www.tasteofhome.com/wp-content/uploads/2018/01/Favorite-Cheeseburger-Pizza_exps27679_SD143203D10__25_3bC_RMS.jpg?resize=700,700" alt="item-image">
                <div class="item-description">Cheeseburger Pizza</div>
                <div class="item-price">$18</div>
            </div>
            <div class="item">
                <img src="https://www.tasteofhome.com/wp-content/uploads/2018/01/exps174884_SD153208A08_08_1b-1.jpg?resize=696,696" alt="item-image">
                <div class="item-description">Cheesy Chili Fries</div>
                <div class="item-price">$20</div>
            </div>
            <div class="item">
                <img src="https://www.tasteofhome.com/wp-content/uploads/2018/01/Cajun-Sirloin-with-Mushroom-Leek-Sauce_EXPS_THAM18_45962_B10_08_3b.jpg?resize=700,700" alt="item-image">
                <div class="item-description">Cajun Sirloin with Mushroom Leek Sauce</div>
                <div class="item-price">$25</div>
            </div>
        </div>
    `;

    container.appendChild(mealsPage);
}



/***/ }),
/* 4 */
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
/* 5 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "desserts": () => (/* binding */ desserts)
/* harmony export */ });
function desserts() {
    const container = document.getElementById('content');

    const dessertsPage = document.createElement('div');
    dessertsPage.classList.add('desserts-page');

    dessertsPage.innerHTML = `
        <div class="menu-grid">
            <div class="item">
                <img src="https://img.sndimg.com/food/image/upload/w_621,h_349,fl_progressive,c_fill,q_80/v1/img/recipes/26/37/0/bzwUWgTTGZ83fb1AbjMQ_CC%208%20-%20final_6.jpg" alt="item-image">
                <div class="item-description">Devil's Food Cake</div>
                <div class="item-price">$15</div>
            </div>
            <div class="item">
                <img src="https://img.sndimg.com/food/image/upload/w_621,h_349,fl_progressive,c_fill,q_80/v1/img/recipes/10/52/28/XQM8uRFoR3OLUsRuhV0D_17.jpg" alt="item-image">
                <div class="item-description">White Chocolate Raspberry Cheesecake</div>
                <div class="item-price">$15</div>
            </div>
            <div class="item">
                <img src="https://img.sndimg.com/food/image/upload/w_621,h_349,fl_progressive,c_fill,q_80/v1/img/recipes/54/87/2/adfOwroyTgGY7wlrsn6a_baklava-1294.jpg" alt="item-image">
                <div class="item-description">Baklava</div>
                <div class="item-price">$15</div>
            </div>
            <div class="item">
                <img src="https://img.sndimg.com/food/image/upload/w_621,h_349,c_fill,fl_progressive,q_80/v1/img/recipes/40/07/97/12ArB6DRTRaWHxVBTvda_lavafood.jpg" alt="item-image">
                <div class="item-description">Molten Chocolate Lava Cake</div>
                <div class="item-price">$13</div>
            </div>
            <div class="item">
                <img src="https://img.sndimg.com/food/image/upload/w_621,h_349,fl_progressive,c_fill,q_80/v1/img/recipes/63/47/0/FkXtyxzTWqy9XLXkbqbr_icecream-1072.jpg" alt="item-image">
                <div class="item-description">Fried Ice Cream</div>
                <div class="item-price">$16</div>
            </div>
            <div class="item">
                <img src="https://img.sndimg.com/food/image/upload/fl_progressive,c_fill,q_80,h_349,w_621/v1/img/recipes/63/89/7/PWIFUkFXR5mi07yJWf6r_Strawberry%20Shortcake_final%203.jpg" alt="item-image">
                <div class="item-description">Strawberry Shortcake</div>
                <div class="item-price">$18</div>
            </div>
            <div class="item">
                <img src="https://img.sndimg.com/food/image/upload/fl_progressive,c_fill,q_80,h_349,w_621/v1/img/recipes/18/63/32/GxCIsA31SruPbqlF2df3_raspberry%20torte%20SITE-3.jpg" alt="item-image">
                <div class="item-description">Raspberry Walnut Torte</div>
                <div class="item-price">$20</div>
            </div>
            <div class="item">
                <img src="https://img.sndimg.com/food/image/upload/w_621,h_349,fl_progressive,c_fill,q_80/v1/img/recipes/32/35/24/picG6XGvR.jpg" alt="item-image">
                <div class="item-description">Frozen Hot Chocolate</div>
                <div class="item-price">$16</div>
            </div>
            <div class="item">
                <img src="https://img.sndimg.com/food/image/upload/w_621,h_349,fl_progressive,c_fill,q_80/v1/img/recipes/18/41/0/mlUJhy1T3CFzP1eDMACA_DSC_0003.jpg" alt="item-image">
                <div class="item-description">Crepes</div>
                <div class="item-price">$18</div>
            </div>
        </div>
    `;

    container.appendChild(dessertsPage);
}



/***/ }),
/* 6 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "drinks": () => (/* binding */ drinks)
/* harmony export */ });
function drinks() {
    const container = document.getElementById('content');

    const drinksPage = document.createElement('div');
    drinksPage.classList.add('drinks-page');

    drinksPage.innerHTML = `
        <div class="menu-grid">
            <div class="item">
                <img src="https://twigscafe.com/wp-content/uploads/2021/06/americano-on-marble-table-edited.jpg" alt="item-image">
                <div class="item-description">Americano</div>
                <div class="item-price">$10</div>
            </div>
            <div class="item">
                <img src="https://twigscafe.com/wp-content/uploads/2021/06/cup-of-coffee-espresso-edited.jpg" alt="item-image">
                <div class="item-description">Espresso</div>
                <div class="item-price">$10</div>
            </div>
            <div class="item">
                <img src="https://twigscafe.com/wp-content/uploads/2021/06/glass-of-latte-macchiato-with-rich-milk-foam-in-cafe-edited.jpg" alt="item-image">
                <div class="item-description">Macchiato</div>
                <div class="item-price">$10</div>
            </div>
            <div class="item">
                <img src="https://twigscafe.com/wp-content/uploads/2021/06/capuccino-edited.jpg" alt="item-image">
                <div class="item-description">Cappuccino</div>
                <div class="item-price">$10</div>
            </div>
            <div class="item">
                <img src="https://twigscafe.com/wp-content/uploads/2021/06/cup-of-coffee-with-latte-art-edited.jpg" alt="item-image">
                <div class="item-description">Latte</div>
                <div class="item-price">$10</div>
            </div>
            <div class="item">
                <img src="https://twigscafe.com/wp-content/uploads/2021/06/iced-coffee-in-glasses-edited.jpg" alt="item-image">
                <div class="item-description">Iced Coffee</div>
                <div class="item-price">$10</div>
            </div>
            <div class="item">
                <img src="https://twigscafe.com/wp-content/uploads/2021/06/iced-coffee-espresso-edited.jpg" alt="item-image">
                <div class="item-description">Iced Espresso</div>
                <div class="item-price">$10</div>
            </div>
            <div class="item">
                <img src="https://twigscafe.com/wp-content/uploads/2021/06/taste-the-freshness-cold-brew-iced-coffee-edited.jpg" alt="item-image">
                <div class="item-description">Cold Brew</div>
                <div class="item-price">$10</div>
            </div>
            <div class="item">
                <img src="https://www.acouplecooks.com/wp-content/uploads/2020/05/Red-Wine-Sangria-051-735x919.jpg" alt="item-image">
                <div class="item-description">Red Sangria</div>
                <div class="item-price">$15</div>
            </div>
            <div class="item">
                <img src="https://www.acouplecooks.com/wp-content/uploads/2020/06/Rose-Sangria-011-735x919.jpg" alt="item-image">
                <div class="item-description">Rose Sangria</div>
                <div class="item-price">$15</div>
            </div>
            <div class="item">
                <img src="https://www.acouplecooks.com/wp-content/uploads/2019/12/Champagne-Cocktail-006-735x919.jpg" alt="item-image">
                <div class="item-description">Champagne Coctail</div>
                <div class="item-price">$20</div>
            </div>
            <div class="item">
                <img src="https://www.acouplecooks.com/wp-content/uploads/2020/05/Negroni-Sbagliato-002-735x919.jpg" alt="item-image">
                <div class="item-description">Negroni</div>
                <div class="item-price">$20</div>
            </div>
        </div>
    `;

    container.appendChild(drinksPage);
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
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _nav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var _meals_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);
/* harmony import */ var _desserts_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5);
/* harmony import */ var _drinks_menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6);







(0,_nav__WEBPACK_IMPORTED_MODULE_2__.nav)();
(0,_home__WEBPACK_IMPORTED_MODULE_0__.home)();
// menu();

const switchModule = (function() {
    const homeBtn = document.querySelector('.home');
    homeBtn.addEventListener('click', _home__WEBPACK_IMPORTED_MODULE_0__.home);

    const menuBtn = document.querySelector('.menu');
    // menuBtn.addEventListener('click', menu);
    console.log((0,_menu__WEBPACK_IMPORTED_MODULE_1__.menu)());

})();

// const mealsOption = document.getElementById('meals');
// const dessertsOption = document.getElementById('desserts');
// const drinksOption = document.getElementById('drinks');

// // meals();

// mealsOption.addEventListener('click', meals);
// dessertsOption.addEventListener('click', desserts);
// drinksOption.addEventListener('click', drinks);
})();

/******/ })()
;