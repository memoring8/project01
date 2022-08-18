'use strict';

// media screen
const toggleBtn = document.querySelector('.navbar_toggleBtn');
const menu = document.querySelector('.navbar_menu');
const sign = document.querySelector('.navbar_sign');

toogleBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
    sign.classList.toggle('active');
});