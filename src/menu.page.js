import './style.css';
import noodle from './asset/menu/noodle-min.jpg';
import corn from './asset/menu/corn-min.jpg';
import ribbs from './asset/menu/ribbs-min.jpg';
import scrimbs from './asset/menu/srimbs-min.jpg';
import sushi from './asset/menu/sushi-min.jpg';
import eggs from './asset/menu/egg-min.jpg';
import greenPlater from './asset/menu/green_platter-min.jpg';
import fruitPlater from './asset/menu/fruit_platter-min.jpg';


function menuRender() {
    const container = document.querySelector('#container');
    const wrapper = document.createElement('div');
    wrapper.classList.add('menu-wrapper');

    const menuArr = [
        { name: 'NOODLES',img: noodle ,description: "Our noodles are expertly cooked to a perfect al dente texture, tossed in a rich and flavorful sauce that strikes a delightful balance of savory and aromatic spices. It's a harmonious blend of textures and tastes, sure to satisfy your cravings." },
        { name: 'Corn & Potatto',img: corn,description: "Our boiled corn is a simple yet satisfying treat. Each kernel is tender and bursting with natural sweetness. It's a classic comfort food that brings back memories of summer days. Served with a touch of butter, it's the perfect side dish to complement any meal." },
        { name: 'BBQ Ribbs',img:ribbs , description: "Indulge in our succulent ribs, slow-cooked to perfection. The meat is fall-off-the-bone tender, glazed with a savory barbecue sauce that's a harmonious blend of smoky and sweet flavors. Each bite is a savory symphony, making our ribs a mouthwatering delight for barbecue enthusiasts." },
        { name: 'Boiled Shrimps',img: scrimbs, description: "Savor the exquisite taste of our shrimp, cooked to a tender perfection. These succulent bites are delicately seasoned, offering a burst of freshness with every mouthful. Whether grilled, sautéed, or fried, our shrimp dish is a delectable choice that captures the essence of the sea, bringing a delightful seafood experience to your table." },
        { name: 'Japanesse Sushi',img: sushi, description: "Savor the artistry of our sushi—fresh, flavorful bites expertly crafted for a delightful culinary experience. From classic nigiri to inventive rolls, each piece is a masterpiece of taste and texture." },
        { name: 'Porched Eggs',img: eggs, description: "Indulge in the simplicity of our poached eggs. Expertly prepared, the eggs feature velvety, runny yolks nestled within a perfectly cooked egg white. Whether served atop toast or accompanied by a savory sauce, each bite is a delightful symphony of textures and flavors." },
        { name: 'Vegees',img: greenPlater, description: "Experience the vibrant medley of flavors with our veggie platter. A colorful assortment of fresh, crisp vegetables, lightly seasoned and perfectly grilled or roasted. It's a wholesome and satisfying dish that celebrates the goodness of nature on your plate." },
        { name: 'Fruit Desert',img: fruitPlater, description: "Refresh your palate with our enticing fruit platter. A vibrant array of seasonal fruits, meticulously sliced and beautifully arranged for a burst of natural sweetness. From juicy watermelon to succulent berries, it's a delightful and healthy indulgence perfect for any occasion." }
      ];
      

    for(let i=0;i<menuArr.length;i++){

        const wrap = document.createElement('div');
        wrap.classList.add('wrap-menu');

        const menuName = document.createElement('h2');
        menuName.textContent = menuArr[i].name;

        const menuImg = document.createElement('img');
        menuImg.classList.add('menu-img');
        menuImg.src = menuArr[i].img;

        const menuDescription = document.createElement('p');
        menuDescription.textContent = menuArr[i].description;

        const orderButton = document.createElement('button');
        orderButton.classList.add('order-btn');
        orderButton.textContent = "Order Now";
        
        wrap.appendChild(menuName);
        wrap.appendChild(menuImg);
        wrap.appendChild(menuDescription);
        wrap.appendChild(orderButton);

        wrapper.appendChild(wrap);

    }
    container.appendChild(wrapper);
    document.body.appendChild(container);
}

export default menuRender;