import { desserts } from "./desserts-menu";
import { meals } from "./meals-menu";
import { drinks } from "./drinks-menu";

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

export { menu };





{/* <div class="menu-grid">
    <div class="item-">
        <img src="" alt="item-image">
        <div class="item-description"></div>
        <div class="item-price"></div>
    </div>
</div> */}