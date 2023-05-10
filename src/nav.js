function nav() {
    const container = document.getElementById('content');

    const navigation = document.createElement('nav');
    navigation.classList.add('nav');
    navigation.innerHTML = `
        <div class="logo">Cip Restaurant</div>
        <ul>
            <li id="homeBtn">Home</li>
            <li id="menuBtn">Menu</li>
            <li id="contactBtn">Contact</li>
        </ul>
    `;

    container.appendChild(navigation);
}

export { nav };