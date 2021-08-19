const menu = document.querySelector('#menu_mobile');
const menuNavegacao = document.querySelector('.menu_navegacao');
const logoMenu = document.querySelector('#logo_menu');

// Mostra o menu Mobile
const menuMobile = () => {
  menu.classList.toggle('esta-ativado');
  menuNavegacao.classList.toggle('ativado');
};

menu.addEventListener('click', menuMobile);

// Fecha o menu quando clicar na logo ou em algum item dentro dele
const hideMobileMenu = () => {
  const menuBars = document.querySelector('.esta-ativado');
  // window.innerWidth <= 768 && 
  if (menuBars) {
    menu.classList.toggle('esta-ativado');
    menuNavegacao.classList.remove('ativado');
  };
};

menuNavegacao.addEventListener('click', hideMobileMenu);
logoMenu.addEventListener('click', hideMobileMenu);

// Efeito de digitar no título
const tituloAreaInicial = document.querySelector("h2");
const a = document.querySelector("p");

function efeitoEscrever(el) {
  const textoNoArray = el.innerHTML.split("");
  el.innerHTML = '';
  textoNoArray.forEach((letra, index) => {
    setTimeout(() => el.innerHTML += letra, 50 * index);
  });
}

efeitoEscrever(a);

// Serve para ficar mostrando o menu seguindo a pessoa enquanto está ativado
// const highlightMenu = () => {
//   const element = document.querySelector('.highlight');
//   const homeMenu = document.querySelector('#home-page');
//   const aboutMenu = document.querySelector('#about-page');
//   const servicesMenu = document.querySelector('#services-page');
//   let scrollPosition = window.scrollY;

//   // Adds 'highlight' class to menu items
//   if (window.innerWidth > 960 && scrollPosition < 600) {
//     homeMenu.classList.add('highlight');
//     aboutMenu.classList.remove('highlight');
//     servicesMenu.classList.remove('highlight');
//     return;
//   } else if (window.innerWidth > 960 && scrollPosition < 1400) {
//     aboutMenu.classList.add('highlight');
//     homeMenu.classList.remove('highlight');
//     servicesMenu.classList.remove('highlight');
//     return;
//   } else if (window.innerWidth > 960 && scrollPosition < 2345) {
//     servicesMenu.classList.add('highlight');
//     aboutMenu.classList.remove('highlight');
//     homeMenu.classList.remove('highlight');
//     return;
//   };

//   if ((element && window.innerWidth < 960 && scrollPosition < 600) || element) {
//     element.classList.remove('highlight');
//   }
// };

// window.addEventListener('scroll', highlightMenu);
// window.addEventListener('click', highlightMenu);