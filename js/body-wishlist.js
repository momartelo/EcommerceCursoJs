const wishlistSave = localStorage.getItem("wishlist");

const wishlistItems = wishlistSave ? JSON.parse(wishlistSave) : [];

console.log(wishlistItems);

var total = 0;

//--------------wishlist-------------------//

var wishCad = `
<div class="wishlist-title flex">
    <h4>Lista de Deseos</h4>
</div>
<div class="wishlist-wrapper flex">
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
wishCad += `
</div>
    <div class="wishlist-container2 flex">
        <div class="cart-hidden-container-popular">
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
