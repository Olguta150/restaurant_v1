import './style.css';
import { home } from "./home";
import { menu } from "./menu";
import { nav } from "./nav";
import { meals } from "./menu-components/meals-menu";
import { desserts } from "./menu-components/desserts-menu";
import { drinks } from "./menu-components/drinks-menu";

// menu();

nav();
home();

const switchModule = (function() {
    const container = document.getElementById('content');

    container.addEventListener('click', (e) => {
        console.log("e: ", e.target.id);

        if(e.target.id === 'homeBtn' || e.target.id === 'logo') {
            home();
        } else if(e.target.id === 'menuBtn') {
            menu();
        }
    })
    // const homeBtn = document.getElementById('homeBtn');
    // console.log(homeBtn);
    // // homeBtn.addEventListener('click', home);

    // const menuBtn = document.getElementById('menuBtn');
    // // menuBtn.addEventListener('click', menu);
    // console.log(menuBtn);

})();

// const mealsOption = document.getElementById('meals');
// const dessertsOption = document.getElementById('desserts');
// const drinksOption = document.getElementById('drinks');

// // meals();

// mealsOption.addEventListener('click', meals);
// dessertsOption.addEventListener('click', desserts);
// drinksOption.addEventListener('click', drinks);