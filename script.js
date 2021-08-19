const menu = document.querySelector('#menu_mobile');
const menuNavegacao = document.querySelector('.menu_navegacao');
const logoMenu = document.querySelector('#logo_menu');

// Mostra o menu Mobile
const mobileMenu = () => {
  menu.classList.toggle('esta-ativado');
  menuNavegacao.classList.toggle('ativado');
};

menu.addEventListener('click', mobileMenu);

// Close Mobile Menu when clicking on a menu item
const hideMobileMenu = () => {
  const menuBars = document.querySelector('.esta-ativado');
  if (window.innerWidth <= 768 && menuBars) {
    menu.classList.toggle('is-active');
    menuNavegacao.classList.remove('active');
  };
};


menuNavegacao.addEventListener('click', hideMobileMenu);
logoMenu.addEventListener('click', hideMobileMenu);

// Para ficar mostrando o menu enquanto está ativado
const highlightMenu = () => {
  const element = document.querySelector('.highlight');
  const homeMenu = document.querySelector('#home-page');
  const aboutMenu = document.querySelector('#about-page');
  const servicesMenu = document.querySelector('#services-page');
  let scrollPosition = window.scrollY;

  // Adds 'highlight' class to menu items
  if (window.innerWidth > 960 && scrollPosition < 600) {
    homeMenu.classList.add('highlight');
    aboutMenu.classList.remove('highlight');
    servicesMenu.classList.remove('highlight');
    return;
  } else if (window.innerWidth > 960 && scrollPosition < 1400) {
    aboutMenu.classList.add('highlight');
    homeMenu.classList.remove('highlight');
    servicesMenu.classList.remove('highlight');
    return;
  } else if (window.innerWidth > 960 && scrollPosition < 2345) {
    servicesMenu.classList.add('highlight');
    aboutMenu.classList.remove('highlight');
    homeMenu.classList.remove('highlight');
    return;
  };

  if ((element && window.innerWidth < 960 && scrollPosition < 600) || element) {
    element.classList.remove('highlight');
  }
};

window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);