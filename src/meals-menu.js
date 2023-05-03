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

export { meals };