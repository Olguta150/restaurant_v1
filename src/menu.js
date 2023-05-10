import { desserts } from "./menu-components/desserts-menu";
import { meals } from "./menu-components/meals-menu";
import { drinks } from "./menu-components/drinks-menu";
import { nav } from "./nav";

function menu() {
    const container = document.getElementById('content');
    // meals();

    container.replaceChildren();

    nav();

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

    document.addEventListener('click', (e) => {
        console.log("the other e: ", e.target.id);
        if(e.target.id === 'meals') meals()
        if(e.target.id === 'desserts') desserts()
        if(e.target.id === 'drinks') drinks()
    })

    // mealsOption.onclick = () => meals();
    // dessertsOption.onclick = () => desserts();
    // drinksOption.onclick = () => drinks();
    // console.log(mealsOption, dessertsOption, drinksOption);

    // meals();
    // desserts();
    // drinks();
}

export { menu };





/* <div class="menu-grid">
    <div class="item-">
        <img src="" alt="item-image">
        <div class="item-description"></div>
        <div class="item-price"></div>
    </div>
</div> */