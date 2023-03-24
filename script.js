const menu = document.querySelector('#menu-btn');
const nav = document.querySelector('.navbar');

menu.onclick = () => {
  nav.classList.toggle('mobile-menu');
  menu.classList.toggle('bx-x');
}