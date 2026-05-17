// toggle clas aktive

const navbarNav = document.querySelector('.navbar-nav');

//ketika hamburger menu di tekan
document.querySelector('#hamburger-menu').onclick = () => {
  navbarNav.classList.toggle('active');
};