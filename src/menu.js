import './styles/style.css';




function menuPage(){
    const content = document.querySelector('#content');
    const element = document.createElement('div');
    element.classList.add('mainPage');
    element.id='menu';
    const menuContent = document.createElement('div');
    menuContent.classList.add('menuContent');
    const welcome = document.createElement('h1');
    
    welcome.textContent= 'Menu';

    const menuItems = document.createElement('div');
    menuItems.classList ('manuItems')
    
    menuContent.appendChild(welcome);

    element.appendChild(menuContent);
    content.appendChild(element);

    
}

export default menuPage;