
const body =document.querySelector(".body");
const containerMenu = document.querySelector(".container-menu");
const enlaces = document.querySelector(".enlaces");
const containerNavbar = document.querySelector(".container-navbar");
const enlace = document.querySelector(".enlace");
const menu = document.querySelector(".menu");
const contenedorMenu = document.querySelector(".contenedor-botones-menu")
const btnMenu = document.querySelector(".btn-menu-barras");
const btnCerrar = document.querySelector(".btn-menu-cerrar");


btnMenu.addEventListener("click", () => {
    enlaces.style.display='grid';
    btnMenu.style.display='none'
    btnCerrar.style.diplay='block'
    body.style.overflow="hidden"

});
btnCerrar.addEventListener("click", () => {
    enlaces.style.display='none';
    btnMenu.style.display='block'
    btnCerrar.style.diplay='none'
    body.style.display='visible'
});
