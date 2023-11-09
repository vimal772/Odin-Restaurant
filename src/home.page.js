import './style.css';
import noodle from './asset/menu/noodle-min.jpg';
import interior from './asset/menu/interior-min.jpg';
import plate from './asset/menu/plate-min.png';
import corn from './asset/menu/corn-min.jpg';
import ribbs from './asset/menu/ribbs-min.jpg';
import scrimbs from './asset/menu/srimbs-min.jpg';
import sushi from './asset/menu/sushi-min.jpg';
import fb from './asset/icons/facebook.svg';
import insta from './asset/icons/instagram.svg';
import uber from './asset/icons/uber.svg';
import twitter from './asset/icons/twitter.svg';
import github from './asset/icons/github.svg';

function render() {
    const header = document.createElement('header');
    const headerName = document.createElement('div');
    const name = document.createElement('h1');
    const list = document.createElement('ul');
    
    for(let i=0;i<3;i++) {
        const listItem = document.createElement('li');
        listItem.classList.add('menu-item');
        const textItem = ['HOME','MENU','CONTACT'];
        listItem.innerText = textItem[i];
        list.appendChild(listItem);
    }

    list.classList.add('menu');
    headerName.classList.add('name');
    header.classList.add('header');

    name.innerText = "KANI TAVERN";
    headerName.appendChild(name);
    header.appendChild(headerName);
    header.appendChild(list);

    const container = document.createElement('div');
    container.classList.add('container');
    container.style.backgroundImage = `url('${noodle}')`;

    const title = document.createElement('p');
    title.classList.add('invisiable-container');
    title.innerText = `YOU HAVE COME TO A RIGHT PLACE TO EXPERIENCE THE RICH TASTE OF FOOD`;
    container.appendChild(title);

    const divWrap = document.createElement('div');
    const div = document.createElement('div');
    const img = document.createElement('img');
    const rotate = document.createElement('img');
    rotate.src = plate;
    rotate.classList.add('rotate');
    img.src = interior;
    img.classList.add('interior');
    const para = document.createElement('p');
    para.innerText = "We have Dedicated Candle Light SetUp to make your important Night into Unforgattable Night";
    const btn = document.createElement('button');
    btn.innerText = "Reserver For The Table";
    div.appendChild(para);
    div.appendChild(btn);
    divWrap.appendChild(rotate);
    divWrap.appendChild(div);
    divWrap.appendChild(img);
    divWrap.classList.add('wrap-content');


    const div2 = document.createElement('div');
    div2.classList.add('flex-box');

    const imgArr = [corn,ribbs,scrimbs,sushi];
    for(let i=0;i<imgArr.length;i++){
        const menu = document.createElement('img');
        menu.src = imgArr[i];
        menu.classList.add('menu-food');
        div2.appendChild(menu);
    }

    const support = document.createElement('div');
    support.classList.add('support');
    const supportTxt = document.createElement('h2');
    supportTxt.innerText = "The Best Way To Show Support is To Review Our Food And Posting It";
    support.appendChild(supportTxt);
    const iconArr = [fb,insta,twitter,uber];
    const unOrderedList = document.createElement('ul');
    unOrderedList.classList.add('support-list')

    for(let i=0;i<iconArr.length;i++){
        const list = document.createElement('li');
        const link = document.createElement('a');
        const linkIcon = document.createElement('img');
        linkIcon.classList.add('icon-img');
        linkIcon.src = iconArr[i];
        link.href = `#`;
        link.appendChild(linkIcon);
        list.appendChild(link);
        unOrderedList.appendChild(list);
    }

    support.appendChild(unOrderedList);


    
    const footer = document.createElement('footer');
    footer.classList.add('footer');

    const copyRight = document.createElement('div');
    const copyRightTxt = document.createElement('p');
    const copyRightLink = document.createElement('a');
    copyRightLink.href = '#';
    const copyRightImg = document.createElement('img');
    
    copyRightImg.src = github;
    copyRightLink.appendChild(copyRightImg);
    copyRightTxt.innerText = "Copy Right @2023 ";

    copyRight.appendChild(copyRightTxt);
    copyRight.appendChild(copyRightLink);

    footer.appendChild(copyRight);

    const elements = [header,container,divWrap,div2,support,footer];

    for (const element of elements) {
        document.body.appendChild(element)
    }

    window.onscroll = function() {
        changeColorNavBar();
    };
    
    let lastScrollPosition = 0;
    
    function changeColorNavBar() {
        const header = document.querySelector('.header');
        const stickyOffset = 20; // Adjust this value to set the offset lower
    
        const sticky = header.offsetTop - stickyOffset;
        const currentScrollPosition = window.pageYOffset;
    
        if (currentScrollPosition >= sticky) {
            header.classList.add('fixed');
            header.classList.add('change-color');
        } else {
            header.classList.remove('fixed');
            header.classList.remove('change-color');
        }
    
        // Check if scrolling direction changed
        if (currentScrollPosition < lastScrollPosition) {
            header.classList.remove('change-color');
        }
    
        lastScrollPosition = currentScrollPosition;
    }
    
}


export default render;