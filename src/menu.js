import { meals } from "./meals-menu";

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
    meals();
}

export { menu };





{/* <div class="menu-grid">
    <div class="item-">
        <img src="" alt="item-image">
        <div class="item-description"></div>
        <div class="item-price"></div>
    </div>
</div> */}