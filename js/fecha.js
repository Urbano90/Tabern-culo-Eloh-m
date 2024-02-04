/*****************Fecha y hora start *****************/
let fechaHora = new Date();
let fecha = `${fechaHora.getDate().toString().padStart(2,'0')}/${(fechaHora.getMonth()+1).toString().padStart(2,'0')}/${fechaHora.getFullYear().toString()}`;
document.getElementById("fecha").innerText = `Hora de Malabo: ${fecha}`;

/*****************Fecha y hora ends *****************/