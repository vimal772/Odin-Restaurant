import homeRender from "./home.page.js";
import loadHeader from './header.js';
import loadFooter from './footer.js';


function loader() {
    loadHeader();
    homeRender();
    loadFooter();
}

export default loader;

function clearRender() {
    const container = document.querySelector('#container');
    while(container.firstChild){
        container.removeChild(container.firstChild);
    }
}