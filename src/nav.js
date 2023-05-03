function nav() {
    const container = document.getElementById('content');

    const navigation = document.createElement('nav');
    navigation.classList.add('nav');
    navigation.innerHTML = `
        <div class="logo">Cip Restaurant</div>
        <ul>
            <li>Home</li>
            <li>Menu</li>
            <li>Contact</li>
        </ul>
    `;

    container.appendChild(navigation);
}

export { nav };