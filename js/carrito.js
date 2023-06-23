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
                  <span class="delete-product"> ❌ </span>
                  
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

    let eliminar = carritoContent.querySelector(".delete-product");

    eliminar.addEventListener("click", () => {
      /* alerta de que se elimito correctamente el producto */
      swal("Perfecto", "Se ha eliminado el producto del carrito!", "success");
      eliminarProducto(product.id);
    });

    eliminar.addEventListener("click", eliminarProducto);
  });

  /* Calcular el total de productos añadidos */
  const total = carrito.reduce((acc, el) => acc + el.precio * el.cantidad, 0);

  const totalBuying = document.createElement("div");
  totalBuying.className = "total-content";
  totalBuying.innerHTML = `
    Total a pagar: $ ${total}
    <span class="pagar-total"> Finalizar Compra </span>`;

  modalContainer.append(totalBuying);

  let pagarTotal = totalBuying.querySelector(".pagar-total");

  pagarTotal.addEventListener("click", () => {
    /* alerta de que se ha hecho la compra final */
    swal("Perfecto", "Total a Pagar: $ " + total, "success");
  });
};

verCarrito.addEventListener("click", pintarCarrito);

/* Aliminar producto que estaba agregado al carrito */
const eliminarProducto = (id) => {
  /* encuentro la id del producto */
  const foundId = carrito.find((element) => element.id === id);

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
