


// FORMATO DE PRECIO le damos el formato de precio automatico internacional
// y le vamos añadiendo el formatPrecio a todo lo que tiene que ver con moneda

const formatPrecio = (moneda) => {
  const newMoneda = new window.Intl.NumberFormat("es-SP", {
      style: "currency",
      currency: "XAF"
  }).format(moneda);
  return newMoneda;
}

formatPrecio.moneda


function calcularPrecioConDescuento (precio, descuento) {
    const precioConDescuento =  (precio * descuento) / 100;
    return precioConDescuento;
  }
  
  
  function onClickButtonPriceDiscount() {  //  Llamada de la function con el boton creado en html paara sacarnos el resultado
  const inputPrice = document.getElementById("InputPrice"); // El input del precio interactuado con el id del html
  const priceValue = inputPrice.value;
  const inputDiscount = 10; // El input del descuento interactuado con el id del html
  
  const precioConDescuento =  calcularPrecioConDescuento(priceValue, inputDiscount);   // Aquí llamamos la function de la operación arriba realizada
  const ResultPrice = document.getElementById("ResultPrice");   // interactuamos con el espacio que hemos creado en html para sacar el resultado
  ResultPrice.innerText = `Tienes que pagar:   ${precioConDescuento } Francos CFA. 
   
 Que Dios te bendiga`;

  }
  