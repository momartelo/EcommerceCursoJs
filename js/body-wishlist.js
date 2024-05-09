const wishlistSave = localStorage.getItem('wishlist');

const wishlistItems = wishlistSave ? JSON.parse(wishlistSave) : [];

console.log(wishlistItems)

var total = 0



//--------------wishlist-------------------//

var wishCad = `
<div class="wishlist-title flex">
    <h4>Lista de Deseos</h4>
</div>
<div class="wishlist-products">
    <div class="wishlist-products-container">
        <div class="wishlist-products-list">
`;
for (i = 0; i < wishlistItems.length; i++) {
wishCad += `
            <div class="wishlist-products-product">
                <article class="article-product">
                    <div class="thumbnail-container-product">
                        <div class="thumbnail-top-product">
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
                        </div>
                    </div>
                </article>
            </div>
`;
total+= wishlistItems[i].prizel
}
wishCad += `
            <div class="cart-hidden-container-popular">
                <a href="#"
                ><img
                class="icono-cart-popular"
                src="./img/compras-Rojo.png"
                alt=""
                /></a>
            </div>
`;

wishCad += `
            <div class="product-price">
                <span class="price">${total}</span>
            </div>
        </div>
    </div>
</div>
`;


document.getElementById("wishlist").innerHTML = wishCad;

