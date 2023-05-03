function drinks() {
    const container = document.getElementById('content');

    const drinksPage = document.createElement('div');
    drinksPage.classList.add('drinks-page');

    drinksPage.innerHTML = `
        <div class="menu-grid">
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
            <div class="item">
                <img src="" alt="item-image">
                <div class="item-description"></div>
                <div class="item-price"></div>
            </div>
        </div>
    `;

    container.appendChild(drinksPage);
}

export { drinks };