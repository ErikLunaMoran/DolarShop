const shopContent = document.getElementById("shopContent");

/* Carrito vacío */

let carrito = [];

/* Recorrido de Productos */

productos.forEach((product) => {
  let content = document.createElement("div");
  content.className = "card";
  {
    content.innerHTML = `<div class="card-header">
  <img src="${product.img}">
  </div>

  <div class="card-body">
  <h3 class="card-title">${product.titulo}</h3>
  <p class="card-description">$ ${product.precio}</p>
  </div>
  `;
  }

  /* <a href="#" id="comprar" class="btn">Comprar</a> */
  shopContent.append(content);

  /* Botón */
  let comprar = document.createElement("button");
  comprar.innerText = "Comprar";
  comprar.className = "btn";

  content.append(comprar);

  comprar.addEventListener("click", () => {
    carrito.push({
      id: product.id,
      img: product.img,
      titulo: product.titulo,
      precio: product.precio,
    });
    console.log(carrito);
  });
});

verCarrito.addEventListener("click", () => {
  console.log("Hola funciona");
});
