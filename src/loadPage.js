import homePage from "./home";
import menuPage from "./menu";
import header from "./header";




function intialize(){
    header();
    homePage();
   
   
    const content = document.querySelector('#content');
    const home = document.querySelector(".home");
    const menu= document.querySelector(".menu");
    
   
    

    home.addEventListener('click', () => {
        clearContent();
        homePage();
        home.style.color ='#f38a34';
        menu.style.color ='white';
        
      });

    menu.addEventListener('click', () => {
        clearContent();
        menuPage();
        menu.style.color ='#f38a34';
        home.style.color ='white';
        
      });


      function clearContent() {
        const mainPage = document.querySelector('.mainPage');
        if(mainPage){
          content.removeChild(mainPage);
        }
      }   
      
}



export default intialize;


