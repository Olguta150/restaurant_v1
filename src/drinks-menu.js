function drinks() {
    const container = document.getElementById('content');

    const drinksPage = document.createElement('div');
    drinksPage.classList.add('drinks-page');

    drinksPage.innerHTML = `
        <div class="menu-grid">
            <div class="item">
                <img src="https://twigscafe.com/wp-content/uploads/2021/06/americano-on-marble-table-edited.jpg" alt="item-image">
                <div class="item-description">Americano</div>
                <div class="item-price">$10</div>
            </div>
            <div class="item">
                <img src="https://twigscafe.com/wp-content/uploads/2021/06/cup-of-coffee-espresso-edited.jpg" alt="item-image">
                <div class="item-description">Espresso</div>
                <div class="item-price">$10</div>
            </div>
            <div class="item">
                <img src="https://twigscafe.com/wp-content/uploads/2021/06/glass-of-latte-macchiato-with-rich-milk-foam-in-cafe-edited.jpg" alt="item-image">
                <div class="item-description">Macchiato</div>
                <div class="item-price">$10</div>
            </div>
            <div class="item">
                <img src="https://twigscafe.com/wp-content/uploads/2021/06/capuccino-edited.jpg" alt="item-image">
                <div class="item-description">Cappuccino</div>
                <div class="item-price">$10</div>
            </div>
            <div class="item">
                <img src="https://twigscafe.com/wp-content/uploads/2021/06/cup-of-coffee-with-latte-art-edited.jpg" alt="item-image">
                <div class="item-description">Latte</div>
                <div class="item-price">$10</div>
            </div>
            <div class="item">
                <img src="https://twigscafe.com/wp-content/uploads/2021/06/iced-coffee-in-glasses-edited.jpg" alt="item-image">
                <div class="item-description">Iced Coffee</div>
                <div class="item-price">$10</div>
            </div>
            <div class="item">
                <img src="https://twigscafe.com/wp-content/uploads/2021/06/iced-coffee-espresso-edited.jpg" alt="item-image">
                <div class="item-description">Iced Espresso</div>
                <div class="item-price">$10</div>
            </div>
            <div class="item">
                <img src="https://twigscafe.com/wp-content/uploads/2021/06/taste-the-freshness-cold-brew-iced-coffee-edited.jpg" alt="item-image">
                <div class="item-description">Cold Brew</div>
                <div class="item-price">$10</div>
            </div>
            <div class="item">
                <img src="https://www.acouplecooks.com/wp-content/uploads/2020/05/Red-Wine-Sangria-051-735x919.jpg" alt="item-image">
                <div class="item-description">Red Sangria</div>
                <div class="item-price">$15</div>
            </div>
            <div class="item">
                <img src="https://www.acouplecooks.com/wp-content/uploads/2020/06/Rose-Sangria-011-735x919.jpg" alt="item-image">
                <div class="item-description">Rose Sangria</div>
                <div class="item-price">$15</div>
            </div>
            <div class="item">
                <img src="https://www.acouplecooks.com/wp-content/uploads/2019/12/Champagne-Cocktail-006-735x919.jpg" alt="item-image">
                <div class="item-description">Champagne Coctail</div>
                <div class="item-price">$20</div>
            </div>
            <div class="item">
                <img src="https://www.acouplecooks.com/wp-content/uploads/2020/05/Negroni-Sbagliato-002-735x919.jpg" alt="item-image">
                <div class="item-description">Negroni</div>
                <div class="item-price">$20</div>
            </div>
        </div>
    `;

    container.appendChild(drinksPage);
}

export { drinks };