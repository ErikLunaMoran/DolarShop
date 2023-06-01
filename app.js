/* const productos = [
  { nombre: "DolarOficial", precio: 10 },
  { nombre: "DolarBlue", precio: 20 },
  { nombre: "DolarTarjeta", precio: 30 },
  { nombre: "DolarMEP", precio: 40 },
];

let carrito = [];

let seleccion = prompt("Desea comprar algún producto si o no?");

while (seleccion != "si" && seleccion != "no") {
  alert("por favor ingresa si o no");
  seleccion = prompt("hola desea comprar algo si o no?");
}

if (seleccion == "si") {
  alert("a continuación nuestra lista de Dolares");
  let todosLosProductos = productos.map(
    (producto) => producto.nombre + " " + producto.precio + "$"
  );
  alert(todosLosProductos.join(" - "));
} else if (seleccion == "no") {
  alert("graciar por venir, hasta pronto!!");
}

while (seleccion != "no") {
  let producto = prompt("Agrega un producto a tu carrito de compra");
  let precio = 0;

  if (
    producto == "DolarOficial" ||
    producto == "DolarBlue" ||
    producto == "DolarTarjeta" ||
    producto == "DolarMEP"
  ) {
    switch (producto) {
      case "DolarOficial":
        precio = 10;
        break;
      case "DolarBlue":
        precio = 20;
        break;
      case "DolarTarjeta":
        precio = 30;
        break;
      case "DolarMEP":
        precio = 40;
        break;
      default:
        break;
    }
    let unidades = parseInt(prompt("cuantas unidades quiere llevar?"));

    carrito.push({ producto, unidades, precio });
    console.log(carrito);
  } else {
    alert("no tenemos ese producto");
  }

  seleccion = prompt("Desea seguir comprando?");

  while (seleccion === "no") {
    alert("Gracias por la compra!, hasta pronto");
    carrito.forEach((carritoFinal) => {
      console.log(
        `producto: ${carritoFinal.producto}, unidades: ${
          carritoFinal.unidades
        }, total a pagar por producto: ${
          carritoFinal.unidades * carritoFinal.precio
        }`
      );
    });
    break;
  }
}

const total = carrito.reduce((acc, el) => acc + el.precio * el.unidades, 0);
console.log(`el total a pagar por su compra es: ${total}`);
 */
