
//->VARIABLES - DARK MODE<-//

let body = document.getElementById('body');
let url = window.location.pathname;
let darkModeStorage = localStorage.getItem("darkMode");
let darkModeBtn = document.getElementById('menu-modo');
darkModeBtn.addEventListener('click', cambioMode);

let darkModeActivado = () => {
    body.classList.add('body-dark');
    darkModeBtn.innerHTML = "Modo diurno";

//------------------------------------------------------------------------------------------------//


    //-> HOME
    if (url === "/index.html" || url === "/gifos/index.html") {
        //FUNCION PARA CAMBIAR EL ICONO DE LA LUPA VIOLETA
        cambioIconosBusqueda();
    }

    //-> CREAR GIFOS
    if (url === "/creargifo.html" || url === "/gifos/creargifo.html") {
        
        //FUNCION CAMBIO CAMARAS
        cambioCamaras();
    }

    localStorage.setItem("darkMode", null);
}
//------------------------------------------------------------------------------------------------//
//MIRO CUANDO CARGO LA PAGINA EL ESTADO DEL localStorage
if (darkModeStorage === "activado") {
    darkModeActivado();
}
//------------------------------------------------------------------------------------------------//

//-> FUNCION CAMBIO MODE
function cambioMode() {
    darkModeStorage = localStorage.getItem("darkMode");

    if (darkModeStorage !== "activado") {
        darkModeActivado();
    } else {
        darkModeDesactivado();
    }
}

//------------------------------------------------------------------------------------------------//

//-> FUNCIONES AGREGADAS PARA CAMBIAR SRC DE IMG O ICONOS

function cambioLogos() {
    let logoMobile = document.getElementById('logo');
    let logoDesktop = document.getElementById('logo-desktop');

    if (darkModeBtn.innerHTML == 'Modo nocturno') {
        logoDesktop.setAttribute("src", "./assets/logo-desktop.svg");
        logoMobile.setAttribute("src", "./assets/logo-mobile.svg");
    } else {
        logoDesktop.setAttribute("src", "./assets/logo-desktop-modo-noc.svg");
        logoMobile.setAttribute("src", "./assets/logo-mobile-modo-noc.svg");
    }
}

function cambioIconoCrearGifo() {
    let iconoCrearGifo = document.querySelector('.mas-violeta');
    let iconoCrearGifoHover = document.querySelector('.mas-blanco');

    if (darkModeBtn.innerHTML == 'Modo nocturno') {
        iconoCrearGifo.setAttribute("src", "./assets/button-crear-gifo.svg");
        iconoCrearGifoHover.setAttribute("src", "./assets/button-crear-gifo-hover.svg");
    } else {
        iconoCrearGifo.setAttribute("src", "./assets/button-crear-gifo-hover.svg");
        iconoCrearGifoHover.setAttribute("src", "./assets/button-crear-gifo-dark.svg");
    }

}

function cambioIconosBusqueda() {

    if (darkModeBtn.innerHTML == 'Modo nocturno') {
        iconBuscar.setAttribute("src", "./assets/icon-search.svg");
        btnCerrarBusqueda.setAttribute("src", "./assets/button-close.svg");
    } else {
        iconBuscar.setAttribute("src", "./assets/icon-search-mod-noc.svg");
        btnCerrarBusqueda.setAttribute("src", "./assets/button-close-modo-noc.svg");
    }

}

function cambioCamaras() {
    let camaraIlus = document.getElementById('camara-ilustracion');
    let peliculaIlus = document.getElementById('pelicula-ilus');

    if (darkModeBtn.innerHTML == 'Modo nocturno') {
        camaraIlus.setAttribute("src", "./assets/camara.svg");
        peliculaIlus.setAttribute("src", "./assets/pelicula.svg");
    } else {
        camaraIlus.setAttribute("src", "./assets/camara-modo-noc.svg");
        peliculaIlus.setAttribute("src", "./assets/pelicula-modo-noc.svg");
    }
}
