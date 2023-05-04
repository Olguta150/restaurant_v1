function desserts() {
    const container = document.getElementById('content');

    const dessertsPage = document.createElement('div');
    dessertsPage.classList.add('desserts-page');

    dessertsPage.innerHTML = `
        <div class="menu-grid">
            <div class="item">
                <img src="https://img.sndimg.com/food/image/upload/w_621,h_349,fl_progressive,c_fill,q_80/v1/img/recipes/26/37/0/bzwUWgTTGZ83fb1AbjMQ_CC%208%20-%20final_6.jpg" alt="item-image">
                <div class="item-description">Devil's Food Cake</div>
                <div class="item-price">$15</div>
            </div>
            <div class="item">
                <img src="https://img.sndimg.com/food/image/upload/w_621,h_349,fl_progressive,c_fill,q_80/v1/img/recipes/10/52/28/XQM8uRFoR3OLUsRuhV0D_17.jpg" alt="item-image">
                <div class="item-description">White Chocolate Raspberry Cheesecake</div>
                <div class="item-price">$15</div>
            </div>
            <div class="item">
                <img src="https://img.sndimg.com/food/image/upload/w_621,h_349,fl_progressive,c_fill,q_80/v1/img/recipes/54/87/2/adfOwroyTgGY7wlrsn6a_baklava-1294.jpg" alt="item-image">
                <div class="item-description">Baklava</div>
                <div class="item-price">$15</div>
            </div>
            <div class="item">
                <img src="https://img.sndimg.com/food/image/upload/w_621,h_349,c_fill,fl_progressive,q_80/v1/img/recipes/40/07/97/12ArB6DRTRaWHxVBTvda_lavafood.jpg" alt="item-image">
                <div class="item-description">Molten Chocolate Lava Cake</div>
                <div class="item-price">$13</div>
            </div>
            <div class="item">
                <img src="https://img.sndimg.com/food/image/upload/w_621,h_349,fl_progressive,c_fill,q_80/v1/img/recipes/63/47/0/FkXtyxzTWqy9XLXkbqbr_icecream-1072.jpg" alt="item-image">
                <div class="item-description">Fried Ice Cream</div>
                <div class="item-price">$16</div>
            </div>
            <div class="item">
                <img src="https://img.sndimg.com/food/image/upload/fl_progressive,c_fill,q_80,h_349,w_621/v1/img/recipes/63/89/7/PWIFUkFXR5mi07yJWf6r_Strawberry%20Shortcake_final%203.jpg" alt="item-image">
                <div class="item-description">Strawberry Shortcake</div>
                <div class="item-price">$18</div>
            </div>
            <div class="item">
                <img src="https://img.sndimg.com/food/image/upload/fl_progressive,c_fill,q_80,h_349,w_621/v1/img/recipes/18/63/32/GxCIsA31SruPbqlF2df3_raspberry%20torte%20SITE-3.jpg" alt="item-image">
                <div class="item-description">Raspberry Walnut Torte</div>
                <div class="item-price">$20</div>
            </div>
            <div class="item">
                <img src="https://img.sndimg.com/food/image/upload/w_621,h_349,fl_progressive,c_fill,q_80/v1/img/recipes/32/35/24/picG6XGvR.jpg" alt="item-image">
                <div class="item-description">Frozen Hot Chocolate</div>
                <div class="item-price">$16</div>
            </div>
            <div class="item">
                <img src="https://img.sndimg.com/food/image/upload/w_621,h_349,fl_progressive,c_fill,q_80/v1/img/recipes/18/41/0/mlUJhy1T3CFzP1eDMACA_DSC_0003.jpg" alt="item-image">
                <div class="item-description">Crepes</div>
                <div class="item-price">$18</div>
            </div>
        </div>
    `;

    container.appendChild(dessertsPage);
}

export { desserts };