import { desserts } from "./menu-components/desserts-menu";
import { meals } from "./menu-components/meals-menu";
import { drinks } from "./menu-components/drinks-menu";
import { nav } from "./nav";

function menu() {
    const container = document.getElementById('content');
    const menuPage = document.createElement('div');
    menuPage.classList.add('menu');
    
    container.replaceChildren();
    nav();

    menuPage.innerHTML = `
        <div class="title">Menu</div>
        <div class="options">
            <div id="meals" class="option option1">Meals</div>
            <div id="desserts" class="option">Desserts</div>
            <div id="drinks" class="option">Drinks</div>
        </div>
    `;

    container.appendChild(menuPage);

    document.addEventListener('click', (e) => {
        if(e.target.id === 'meals') {
            meals();
        }
        if(e.target.id === 'desserts') desserts()
        if(e.target.id === 'drinks') drinks()
    })
}

export { menu };