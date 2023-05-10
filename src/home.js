import { nav } from "./nav";

function home() {
    const container = document.getElementById('content');

    container.replaceChildren();
    nav();

    const homePage = document.createElement('div');
    homePage.classList.add('home');
    homePage.innerHTML = `
        <div class="heading">Welcome To Cip</div>
        <div class="main">
        <div class="description">Cip Restaurant specializes in delicious food featuring fresh ingredients and masterful preparation by the culinary team. Whether you're ordering a multi-course meal or grabbing a drink and pizza at the bar, Cip's lively, casual yet upscale atmosphere makes it perfect for dining with friends, family, clients and business associates.</div>
        <img class="img" src="../dist/images/—Pngtree—luxury gold background thai pattern_2455373.jpg" alt="description-background">
        </div>
    `;

    container.appendChild(homePage);
}

export { home };