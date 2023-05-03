function desserts() {
    const container = document.getElementById('content');

    const dessertsPage = document.createElement('div');
    dessertsPage.classList.add('desserts-page');

    dessertsPage.innerHTML = `
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

    container.appendChild(dessertsPage);
}

export { desserts };