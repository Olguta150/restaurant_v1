import './style.css';
import { home } from "./home";
import { menu } from "./menu";
import { nav } from "./nav";
import { meals } from "./menu-components/meals-menu";
import { contact } from './contact';

nav();
home();

const switchModule = (function() {
    const container = document.getElementById('content');

    container.addEventListener('click', (e) => {
        if(e.target.id === 'homeBtn' || e.target.id === 'logo') home();
        if(e.target.id === 'menuBtn') {
            menu();
            meals();
        }
        if(e.target.id === 'contactBtn') contact();
    })
})();