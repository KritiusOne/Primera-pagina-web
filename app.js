const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".header__nav");
hamburger.addEventListener('click', ()=>{
    menu.classList.toggle("spred");
})
window.addEventListener('click',e=>{
    if(menu.classList.contains('spred') && e.target != menu && e.target != hamburger){
        menu.classList.toggle("spred");
    }
})