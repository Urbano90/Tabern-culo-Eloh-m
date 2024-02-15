const body = document.querySelector(".body");
const main =document.querySelector(".main");
const containerMenu = document.querySelector(".container-menu");
const enlaces = document.querySelector(".enlaces");
const containerNavbar = document.querySelector(".container-navbar");
const enlace = document.querySelector(".enlace");
const menu = document.querySelector(".menu");
const contenedorMenu = document.querySelector(".contenedor-botones-menu")
const btnMenu = document.querySelector(".btn-menu-barras");
const btnCerrar = document.querySelector(".btn-menu-cerrar");
const  esDispositivoMovil = () => window.innerWidth <= 780;   /* cuando es un dispositivo movil y la pantalla es menor a 800px */


btnMenu.addEventListener("click", () => {
    if(esDispositivoMovil()) {
        enlaces.style.display='grid';
        btnMenu.style.display='none';
        btnCerrar.style.display='block';
        enlaces.style.right="0";
        enlaces.style.transition= "5s ease all";
        body.style.overflow='hidden';
    }
});

btnCerrar.addEventListener("click", () => {
    if(esDispositivoMovil())  {
        enlaces.style.display='none';
        btnMenu.style.display='block';
        btnCerrar.style.display='none';
        body.style.overflow= 'visible';
    }
});

main.addEventListener("click", () => {
    if(esDispositivoMovil()) {
        enlaces.style.display='none';
        btnMenu.style.display='block';
        btnCerrar.style.display='none';
        body.style.overflow= 'visible';
    }
});
