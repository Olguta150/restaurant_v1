import { home } from "./home";
import { menu } from "./menu";
import { nav } from "./nav";
import { meals } from "./meals-menu";
import { desserts } from "./desserts-menu";
import { drinks } from "./drinks-menu";

nav();
home();
// menu();

const switchModule = (function() {
    const homeBtn = document.querySelector('.home');
    homeBtn.addEventListener('click', home);

    const menuBtn = document.querySelector('.menu');
    // menuBtn.addEventListener('click', menu);
    console.log(menu());

})();

// const mealsOption = document.getElementById('meals');
// const dessertsOption = document.getElementById('desserts');
// const drinksOption = document.getElementById('drinks');

// // meals();

// mealsOption.addEventListener('click', meals);
// dessertsOption.addEventListener('click', desserts);
// drinksOption.addEventListener('click', drinks);