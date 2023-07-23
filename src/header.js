import homePage from "./home";
import menuPage from "./menu";

const content = document.querySelector('#content');


function header(){
    const header = document.createElement('header');
    const h1 = document.createElement('h1');
    h1.textContent = "SF Restuarant";
    const nav = document.createElement('div');
    nav.classList.add('nav');
    const home = document.createElement('h3');
    home.classList.add('home');
    home.textContent= "Home";
    nav.appendChild(home);
    const menu = document.createElement('h3');
    menu.classList.add('menu');
    menu.textContent = 'Menu';
    nav.appendChild(menu);
    const aboutus = document.createElement('h3');
    aboutus.classList.add('aboutUs');
    aboutus.textContent = "About Us";
    nav.appendChild(aboutus);


    header.appendChild(h1);
    header.appendChild(nav);



   


   content.appendChild(header);

   

}

export function footer(){
    const footer = document.createElement('footer')
    const para = document.createElement('p');
    para.classList.add('footerP');
    para.textContent='Smon Ftwi 2023';

    footer.appendChild(para);

    return footer;
}




export default header;