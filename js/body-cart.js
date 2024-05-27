const cartListSave = localStorage.getItem("cartList");
var totalPriceLocalS = localStorage.getItem("totalPrice");
console.log("Total Arriba");
console.log(totalPriceLocalS);

const cartListItems = cartListSave ? JSON.parse(cartListSave) : [];

var totalcart = 0;

//-----------------Cart---------------//

var cartCad = `
<div class="cartList-title-container flex">
    <div class="cartList-title flex">
    <h4>Carrito de compras</h4>
    </div>
    <div class="cartList-emptylist flex">
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
<div class="cartList-wrapper flex">
`;
if (cartListItems.length > 0) {
  cartCad += `
    <div class="cartList-products flex">    
    `;
  for (i = 0; i < cartListItems.length; i++) {
    cartCad += `
        <div class="cartList-container flex">
        <article class="article-product flex">
          <a href="#" onclick="event.preventDefault();">
            <picture>
              <img
              src="${cartListItems[i].image}"
              alt=""
              />
            </picture>
          </a>
          <div class="product-description">
          <span class="description">${cartListItems[i].name}</span>
          </div>
          <div class="product-price">
            <span class="price">${cartListItems[i].prize}</span>
          </div>
        </article>
      </div>
    `;
  }
} else {
  cartCad += `
    <div class="cartList-empty flex">
        <p>&#129300; Carrito vacio &#128722;</p>
    </div>
    `;
}

if (totalPriceLocalS == null) {
  totalPriceLocalS = 0;
  cartCad += `
  </div>
      <div class="cartList-container2 flex zero">
  `;
} else {
  cartCad += `
  </div>
      <div class="cartList-container2 flex">
  `;
}
cartCad += `
  <div class="cartList-container3">
  <div class="cart-hidden-container-popular flex">
  <a href="#"
  ><img
  class="icono-cart-popular"
  src="./img/carrito-de-compras(1).png"
  alt=""
  width="64px"
  /></a>
</div>
  <div class="product-price">
     <span class="price">Total $${parseFloat(totalPriceLocalS).toFixed(
       2
     )}</span>
  </div>

</div>
`;

document.getElementById("main-cart").innerHTML = cartCad;

document.getElementById("vaciarLista").addEventListener("click", function () {
  localStorage.removeItem("cartList");
  localStorage.removeItem("totalPrice");
  location.reload();
  // Actualizar la visualización o realizar cualquier otra acción necesaria
  console.log("La lista de deseos ha sido vaciada.");
});
