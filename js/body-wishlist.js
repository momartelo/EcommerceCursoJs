const wishlistSave = localStorage.getItem("wishlist");

const wishlistItems = wishlistSave ? JSON.parse(wishlistSave) : [];

console.log(wishlistItems);

var total = 0;

//--------------wishlist-------------------//

var wishCad = `
<div class="wishlist-title-container flex">
    <div class="wishlist-title flex">
    <h4>Lista de Deseos</h4>
    </div>
    <div class="wishlist-emptylist flex">
        <img
        src="./img/contenedor-de-basura-rojo3D.png"
        alt=""
        width="48px"
        />    
        <button id="vaciarLista">
        Vaciar
        </button>
    </div>
</div>
<div class="wishlist-wrapper flex">
`;
if (wishlistItems.length > 0) {
  wishCad += `
<div class="wishlist-products flex">
`;
  for (i = 0; i < wishlistItems.length; i++) {
    wishCad += `
    <div class="wishlist-container flex">
      <article class="article-product flex">
        <a href="#" onclick="event.preventDefault();">
          <picture>
            <img
            src="${wishlistItems[i].image}"
            alt=""
            />
          </picture>
          <button class="wishlist-button-add flex">
          <img
            src="./img/corazonRojo3D.png"
            alt=""
            width="16px"
          />
        </button>
        </a>
        <div class="product-description">
          <span class="description">${wishlistItems[i].productName}</span>
        </div>
        <div class="product-price">
          <span class="price">${wishlistItems[i].prize}</span>
        </div>
      </article>
    </div>
`;

    total += parseFloat(wishlistItems[i].prize.replace("$", ""));
  }
} else {
  wishCad += `
    <div class="whishlis-empty flex">
        <p>Lista de deseos vacia</p>
    </div>
    `;
}

if (total == 0) {
  wishCad += `
</div>
    <div class="wishlist-container2 flex zero">
`;
} else {
  wishCad += `
</div>
    <div class="wishlist-container2 flex">
`;
}
wishCad += `
      <div class="wishlist-container3">
        <div class="cart-hidden-container-popular flex">
            <a href="#"
            ><img
            class="icono-cart-popular"
            src="./img/carrito-de-compras(1).png"
            alt=""
            width="64px"
            /></a>
        </div>
`;

wishCad += `
        <div class="product-price">
            <span class="price">Total $${total.toFixed(2)}</span>
        </div>
        
    </div>


`;

document.getElementById("wishlist").innerHTML = wishCad;

document.getElementById("vaciarLista").addEventListener("click", function () {
  // Vaciar la lista de deseos en localStorage
  localStorage.removeItem("wishlist");
  location.reload();
  // Actualizar la visualización o realizar cualquier otra acción necesaria
  console.log("La lista de deseos ha sido vaciada.");
});

//-------------------------------------------------------------------------//

const wishlistButtons = document.querySelectorAll(".wishlist-button-add");
console.log(wishlistButtons);

function toggleWishlistButton(elemento) {
  console.log(elemento);
  const imageElement = elemento.querySelector("img");
  const contenedorProducto = elemento.closest(".wishlist-container");
  const nombreProducto = contenedorProducto
    .querySelector("div span")
    .textContent.trim();
  console.log(nombreProducto);

  let productoID = null;

  for (var i = 0; i < data.length; i++) {
    if (nombreProducto === data[i].nombre) {
      productoID = data[i].id;
      console.log(productoID);
      break;
    }
  }

  if (!productoID) {
    console.error("Producto no encontrado en la lista de datos.");
    return; // Sale de la función si el producto no se encuentra
  }

  const productIdToDelete = productoID;
  console.log("codigo de producto " + productIdToDelete);
  let wishlistItems = JSON.parse(localStorage.getItem("wishlist"));
  console.log("wishlist" + wishlistItems);

  if (wishlistItems) {
    wishlistItems = wishlistItems.filter(
      (item) => item.productId !== productIdToDelete
    );
    localStorage.setItem("wishlist", JSON.stringify(wishlistItems));
    contenedorProducto.remove();
    console.log("Producto eliminado de la lista de deseos");
  } else {
    console.log("No hay productos en la lista de deseos en el localStorage.");
  }
}

wishlistButtons.forEach((elemento) => {
  elemento.addEventListener("click", (event) => {
    event.preventDefault();
    toggleWishlistButton(elemento);
    window.location.reload();
  });
});
