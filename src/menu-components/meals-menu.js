import { menu } from "../menu";
import { nav } from "../nav";

function meals() {
    const container = document.getElementById('content');

    container.replaceChildren();
    nav();
    menu();
    // const mealsReplace = document.querySelector('.meals-page');
    // const dessertsReplace = document.querySelector('.desserts-page');
    // const drinksReplace = document.querySelector('.drinks-page');

    // container.replaceChildren(mealsReplace);
    // container.replaceChildren(dessertsReplace);
    // container.replaceChildren(drinksReplace);

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

export { meals };