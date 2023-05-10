import { nav } from "./nav";

function contact() {
    const container = document.getElementById('content');

    container.replaceChildren();
    nav();

    const contactPage = document.createElement('div');
    contactPage.classList.add('contact');

    contactPage.innerHTML = `
        <div class="contact-container">
            <div class="title-container">Contact</div>
            <div class="main-container">
                <div class="program">
                    <div>Monday - Friday : 7 AM - 11 PM </div>
                    <div>Saturday - Sunday : 9 AM - 11 PM</div>
                </div>
                <div class="details"> Phone: 122-433-1789</div>
                <div class="details"> Mail: sendmail@gmail.com</div>
                <div class="details"> Location: 272 Sycamore Fork Road, Florida, USA</div>
            </div>
        </div>
    `;

    container.appendChild(contactPage);
}

export { contact };