import homeRender from "./home.page.js";
import menuRender from "./menu.page.js";
import contactRender from "./contact.page.js";
import loadHeader from './header.js';
import loadFooter from './footer.js';


function loader() {
    loadHeader();
    homeRender();
    loadFooter();
    
    const home = document.querySelector('.HOME');
    const menu = document.querySelector('.MENU');
    const contact = document.querySelector('.CONTACT');

    home.onclick = function() {
        clearRender();
        homeRender();
        loadFooter();
    }

    menu.onclick = ()=> {
        clearRender();
        menuRender();
        loadFooter();
    }

    contact.addEventListener('click',()=> {
        clearRender();
        contactRender();
        loadFooter();
    });

}

export default loader;

function clearRender() {
    const container = document.querySelector('#container');
    const footer = document.querySelector('.footer');
    footer.remove();

    while(container.firstChild){
        container.removeChild(container.firstChild);
    }
}