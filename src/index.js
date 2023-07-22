
import './styles/style.css';
import exampleImage from './bur6.jpeg';


console.log('hello world');

function header(){
    const header = document.createElement('header');
    const h1 = document.createElement('h1');
    h1.textContent = "Ammaf Restuarant";
    const nav = document.createElement('div');
    nav.classList.add('nav');
    const home = document.createElement('h3');
    home.textContent= "Home";
    nav.appendChild(home);
    const menu = document.createElement('h3');
    menu.textContent = 'Menu';
    nav.appendChild(menu);
    const aboutus = document.createElement('h3');
    aboutus.textContent = "About Us";
    nav.appendChild(aboutus);


    header.appendChild(h1);
    header.appendChild(nav);


   return header;
}

function componenet(){
    const element = document.createElement('div');
      
    element.appendChild(header())
   
   const imgElement = document.createElement('img');
    imgElement.src = exampleImage;
    element.appendChild(imgElement); 
    

    return element;
} 



document.body.appendChild(componenet());