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
    setTimeout(() => el.innerHTML += letra, 35 * index);
  });
}

efeitoEscrever(a);