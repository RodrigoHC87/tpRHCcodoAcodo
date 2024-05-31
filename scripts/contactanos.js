
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




//  Validar Campos del Formulario

const nombre = document.getElementById('nombre')
const apellido = document.getElementById('apellido')
const email = document.getElementById('email')
const telefono = document.getElementById('telefono')
const asunto = document.getElementById('asunto')
const comentario = document.getElementById('comentario')

const formulario = document.getElementById('formulario')

const parrafo = document.getElementById('avisoForm')

formulario.addEventListener('submit', e => {
    e.preventDefault()

    let warnings = ""
    let entrar = false;
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/

    parrafo.innerHTML = ""

    if (nombre.value.length === 0 || apellido.value.length === 0 || email.value.length === 0 || telefono.value.length === 0 || asunto.value.length === 0 || comentario.value.length === 0) {
        warnings += 'Todos los campos son obligatorios <br>';
        entrar = true;
    }else {
        if (nombre.value.length < 3) {
            warnings += 'El nombre no es válido <br>'
            entrar = true
            nombre.value = "";
        }
        if (apellido.value.length < 3) {
            warnings += 'El apellido no es válido <br>'
            entrar = true
            apellido.value = "";
        }
        if(!regexEmail.test(email.value)) {
            warnings += 'El email no es válido <br>'
            entrar = true
            email.value = "";
        }
        if (telefono.value.length < 10 || isNaN(telefono.value)) {
            warnings += 'El telefono no es válido <br>'
            entrar = true
            telefono.value = "";
        }
        if (asunto.value.length < 3) {
            warnings += 'El asunto no es válido <br>'
            entrar = true
            asunto.value = "";
        }
        if (comentario.value.length < 10) {
            warnings += 'El comentario no es válido <br>'
            entrar = true
            comentario.value = "";
        }
    }


    if (entrar) {
        parrafo.innerHTML = warnings;

    }else{
        parrafo.innerHTML = "Muchas gracias por contactarnos!"
        // Limpiar campos
        nombre.value = "";
        apellido.value = "";
        email.value = "";
        telefono.value = "";
        asunto.value = "";
        comentario.value = "";
    }

})

