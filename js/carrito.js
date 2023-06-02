/* Evento click carrito */
/* verCarrito.addEventListener('click', () => { */
const pintarCarrito = () => {
  modalContainer.innerHTML = "";
  modalContainer.style.display = "flex";
  /* Ventana del carrito */
  const modalHeader = document.createElement("div");
  modalHeader.className = "modal-header";
  modalHeader.innerHTML = `
    <h1 class= "modal-header-title">Carrito.</h1>
    `;
  modalContainer.append(modalHeader);

  /* botón de salida */
  const modalButton = document.createElement("h1");
  modalButton.innerText = "x";
  modalButton.className = "modal-header-button";

  modalButton.addEventListener("click", () => {
    modalContainer.style.display = "none";
  });

  modalHeader.append(modalButton);

  /* recorrido de carrito */
  carrito.forEach((product) => {
    let carritoContent = document.createElement("div");
    carritoContent.className = "modal-content";
    carritoContent.innerHTML = `
                  <img src="${product.img}">
                  <h3>${product.titulo}</h3>
                  <p>$ ${product.precio}</p>
                  <p>Cantidad: ${product.cantidad}</p>
                  <p>Total: ${product.cantidad * product.precio}</p>
                `;

    modalContainer.append(carritoContent);

    /* ¿cuanta cantidad de objetos tengo? */
    console.log(carrito.length);

    /* boton para eliminar productos */

    let eliminar = document.createElement("span");
    eliminar.innerText = "❌";
    eliminar.className = "delete-product";
    carritoContent.append(eliminar);

    eliminar.addEventListener("click", eliminarProducto);
  });

  /* Calcular el total de productos añadidos */
  const total = carrito.reduce((acc, el) => acc + el.precio * el.cantidad, 0);

  const totalBuying = document.createElement("div");
  totalBuying.className = "total-content";
  totalBuying.innerHTML = `
    Total a pagar: $ ${total}`;
  modalContainer.append(totalBuying);
};

verCarrito.addEventListener("click", pintarCarrito);

/* Aliminar producto que estaba agregado al carrito */
const eliminarProducto = () => {
  /* encuentro la id del producto */
  const foundId = carrito.find((element) => element.id);

  carrito = carrito.filter((carritoId) => {
    return carritoId !== foundId;
  });
  carritoCounter();
  pintarCarrito();
};

const carritoCounter = () => {
  cantidadCarrito.style.display = "block";
  cantidadCarrito.innerText = carrito.length;
};
