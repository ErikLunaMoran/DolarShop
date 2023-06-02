const shopContent = document.getElementById("shopContent");

let productos = [
  {
    id: 1,
    titulo: "Dolar Oficial",
    img: "./img/DolarOficial.png",
    precio: 238.73,
  },
  {
    id: 2,
    titulo: "Dolar Blue",
    img: "./img/DolarBlue.png",
    precio: 485.0,
  },
  {
    id: 3,
    titulo: "Dolar Bolsa",
    img: "./img/DolarBolsa.png",
    precio: 467.31,
  },
  {
    id: 4,
    titulo: "Dolar MEP",
    img: "./img/DolarMEP.png",
    precio: 462.81,
  },
  {
    id: 5,
    titulo: "Dolar Cripto",
    img: "./img/DolarCripto.png",
    precio: 476.0,
  },
  {
    id: 6,
    titulo: "Dolar Tarjeta",
    img: "./img/DolarTarjeta.png",
    precio: 435.19,
  },
];

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
  <a href="#" class="btn">Comprar</a>
  </div>
  `;
  }

  /* let comprar = document.createElement("button");
  comprar.innerText = "comprar";
  comprar.className = "btn";

  content.append(comprar); */
  shopContent.append(content);
});
