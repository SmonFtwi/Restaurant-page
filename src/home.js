import './styles/style.css';
//import exampleImage from './bur6.jpeg';
import {footer} from './header';



function homePage(){
    const content = document.querySelector('#content');
    const element = document.createElement('div');
    element.classList.add('mainPage');
    const homePageContent = document.createElement('div');
    homePageContent.classList.add('homeContent');
    const welcome = document.createElement('h1');
    
    welcome.textContent= 'Indulge your senses at SF Restaurant  where culinary delights await! 🍽️🍷 Welcome! 🥂';
    const images = document.createElement('div');
    images.classList.add('images');

    const orderNow = document.createElement('button');
    orderNow.classList.add('orderNow');
    orderNow.textContent= 'Order Now';
   
    homePageContent.appendChild(welcome);
    homePageContent.appendChild(images);
    homePageContent.appendChild(orderNow);
    
    element.appendChild(homePageContent);
    content.appendChild(element);

    
}


 





export default homePage;