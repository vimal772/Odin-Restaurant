function loadHeader() {
    const header = document.createElement('header');
    const headerName = document.createElement('div');
    const name = document.createElement('h1');
    const list = document.createElement('ul');
        
    for(let i=0;i<3;i++) {
        const listItem = document.createElement('li');
        const listLink = document.createElement('a');
        listLink.href = '#';
        listItem.classList.add('menu-item');
        const textItem = ['HOME','MENU','CONTACT'];
        listLink.innerText = textItem[i];
        listLink.classList.add(textItem[i]);
        listItem.appendChild(listLink);
        list.appendChild(listItem);
    }

    list.classList.add('menu');
    headerName.classList.add('name');
    header.classList.add('header');

    name.innerText = "KANI TAVERN";
    headerName.appendChild(name);
    header.appendChild(headerName);
    header.appendChild(list);

    document.body.appendChild(header);
}

export default loadHeader;

