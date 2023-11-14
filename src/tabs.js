import homeRender from "./home.page.js";
import menuRender from "./menu.page.js";
import contactRender from "./contact.page.js";
import loadHeader from './header.js';
import loadFooter from './footer.js';


function loader() {
    loadHeader();
    homeRender();
    loadFooter();

    document.querySelector('.HOME').addEventListener('click',()=> {
        clearRender();

        loadHeader();
        homeRender();
        loadFooter();
    });


    document.querySelector('.MENU').addEventListener('click',()=> {
        clearRender();

        loadHeader();
        menuRender();
        loadFooter();
    });

    document.querySelector('.CONTACT').addEventListener('click',()=> {
        clearRender();

        loadHeader();
        contactRender();
        loadFooter();
    });

}

export default loader;

function clearRender() {
    const container = document.querySelector('#container');
    const header = document.querySelector('.header');
    const footer = document.querySelector('.footer');

    while(container.firstChild){
        container.removeChild(container.firstChild);
    }
    
    while(header.firstChild){
        header.removeChild(header.firstChild)
    }

    while(footer.firstChild){
        footer.removeChild(footer.firstChild)
    }
}