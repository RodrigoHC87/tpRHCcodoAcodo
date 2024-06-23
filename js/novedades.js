document.addEventListener('DOMContentLoaded', function() {
    const currentLocation = window.location.pathname.split("/").pop();
    const links = document.querySelectorAll('.nav-link');

    links.forEach(link => {
        if (link.getAttribute('href') === currentLocation) {
            link.classList.add('active');
        }
    });
});



//  header -->
// max-width: 550px -->

//  MENU HAMBURGUESA
const navegador = document.querySelector('#navegador');
const abrir = document.querySelector('#abrir');
const cerrar = document.querySelector('#cerrar');

abrir.addEventListener('click', () => {
    navegador.classList.add('visible');
});

cerrar.addEventListener('click', () => {
    navegador.classList.remove('visible');
});




