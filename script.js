let headerBurger = document.querySelector('.header_burger');
let headerMenu = document.querySelector('.header_menu');
let Body = document.querySelector('.body')
headerBurger.addEventListener('click', function() {
    headerBurger.classList.toggle('active');
    headerMenu.classList.toggle('active');
    Body.classList.toggle('lock');
})



