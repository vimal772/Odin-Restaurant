import github from './asset/icons/github.svg';


function loadFooter() {
    const footer = document.createElement('footer');
    footer.classList.add('footer');

    const copyRight = document.createElement('div');
    const copyRightTxt = document.createElement('p');
    const copyRightLink = document.createElement('a');
    copyRightLink.setAttribute('target','_blank');
    copyRightLink.href = 'https://github.com/vimal772';
    const copyRightImg = document.createElement('img');
    
    copyRightImg.src = github;
    copyRightLink.appendChild(copyRightImg);
    copyRightTxt.innerText = "Copy Right @2023 ";

    copyRight.appendChild(copyRightTxt);
    copyRight.appendChild(copyRightLink);

    footer.appendChild(copyRight);

    document.body.appendChild(footer);

}

export default loadFooter;