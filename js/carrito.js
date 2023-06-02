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
                  <span class="restar"> - </span>
                  <p>Cantidad: ${product.cantidad}</p>
                  <span class="sumar"> + </span>
                  <p>Total: ${product.cantidad * product.precio}</p>
                `;

    modalContainer.append(carritoContent);

    /* funcionalidad de botones de suma y resta de productos */
    let restar =
      carritoContent.querySelector(".restar"); /* agarro la clase restar */

    restar.addEventListener("click", () => {
      if (product.cantidad !== 1) {
        product.cantidad--;
      }
      saveLocal();
      pintarCarrito();
    });

    let sumar = carritoContent.querySelector(".sumar");

    sumar.addEventListener("click", () => {
      product.cantidad++;
      saveLocal();
      pintarCarrito();
    });

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
  saveLocal();
  pintarCarrito();
};

const carritoCounter = () => {
  cantidadCarrito.style.display = "block";

  const carritoLength = carrito.length;

  /* guardo cantidad del carrito en el storage */
  localStorage.setItem("carritoLength", JSON.stringify(carritoLength));

  cantidadCarrito.innerText = JSON.parse(localStorage.getItem("carritoLength"));
};

carritoCounter();
