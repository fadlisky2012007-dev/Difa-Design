// toggle clas active

const navbarNav = document.querySelector('.navbar-nav');

//ketika hamburger menu di tekan
document.querySelector('#hamburger-menu').onclick = () => {
  navbarNav.classList.toggle('active');
};

// Form WhatsApp
document.getElementById("wa-form").addEventListener("submit", function(e) {
  e.preventDefault();

  const nama = document.getElementById("nama").value;
  const ukuran = document.getElementById("ukuran").value;
  const detail = document.getElementById("detail").value;

  const nomorWA = "62895700104440";

  const pesan =
`Halo, saya ingin memesan desain.

Nama: ${nama}
Ukuran: ${ukuran}
Detail: ${detail}`;

  const url =
`https://wa.me/${nomorWA}?text=${encodeURIComponent(pesan)}`;

  window.open(url, "_blank");
});
