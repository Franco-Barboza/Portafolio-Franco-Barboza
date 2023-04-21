const menu = document.querySelector('.menu');
const nav = document.querySelector('.nav')
const menuClose = document.querySelector('.menu-close');
const navList = document.querySelector('.nav-list');

menu.addEventListener('click', () =>{
    nav.classList.add('visible');
})

menuClose.addEventListener('click', ()=>{
    nav.classList.remove('visible');
})

navList.addEventListener('click', () =>{
    nav.classList.remove('visible');
});