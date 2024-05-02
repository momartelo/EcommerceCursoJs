
//--------------Carrousel-------------------//

var carouselCad=`
<input
class="carousel__input"
type="radio"
id="carousel1"
name="carousel"
checked
/>
<input
class="carousel__input"
type="radio"
id="carousel2"
name="carousel"
/>
<input
class="carousel__input"
type="radio"
id="carousel3"
name="carousel"
/>

<div class="carousel__slides">
<div class="carousel__slide">
  <img src="./img/imagen1carrousel.jpg" alt="Imagen 1" />
</div>
<div class="carousel__slide">
  <img src="./img/imagen2carrousel.jpg" alt="Imagen 2" />
</div>
<div class="carousel__slide">
  <img src="./img/imagen6carrousel.jpg" alt="Imagen 3" />
</div>
</div>

<div class="carousel__nav">
<label class="carousel__prev" for="carousel3"
  >&#x2039;</label
>
<label class="carousel__next" for="carousel2"
  >&#x203a;</label
>
</div>
`
document.getElementById("carousel").innerHTML=carouselCad;

//--------------Subbanner-------------------//

var subbannerCad=`
<ul class="subbanner-row flex">
<li class="subbanner-li1">
  <a href="#">
    <img
      src="./img/sample-1.jpg"
      data-hover-color="rgba(0, 0, 0, 0.5)"
      alt=""
    />
  </a>
</li>
<li class="subbanner-li2">
  <a href="#">
    <img src="./img/sample-2.jpg" alt="" />
  </a>
</li>
<li class="subbanner-li3">
  <a href="#">
    <img src="./img/sample-3.jpg" alt="" />
  </a>
</li>
<li class="subbanner-li4">
  <a href="#">
    <img src="./img/sample-4.jpg" alt="" />
  </a>
</li>
</ul>
`
document.getElementById("subbaner").innerHTML=subbannerCad;

//---------------Ofertas--------------------//

var onsaleCad=`
<div class="onsale-products">
<div class="onsale-products-title flex">
  <h4>Ofertas</h4>
</div>
<div class="onsale-products-list flex">
`
controlonsale=0
for (i=0; i < data.length; i++) {   
  if (data[i].discount != false){
    controlonsale+=1
  onsaleCad+=
  `  <div class="product">
    <article class="product-miniature">
      <div class="thumbnail-container">
        <div class="thumbnail-top">
          <a href="#">
            <picture>
              <img
                src="${data[i].imagen}"
                alt=""
              />
            </picture>
            <button class="wishlist-button-add flex">
              <img
                src="./img/corazon-strong.png"
                alt=""
                width="16px"
              />
            </button>
          </a>`
          if (data[i].discount!=false && data[i].nuevo==true) {
            onsaleCad+=
            `
            <ul class="product-flags">
            <li class="product-flag discount">${data[i].discount}</li>
            <li class="product-flag new">New</li>
            </ul>
            `
          } else if (data[i].discount==false && data[i].nuevo==true){
            onsaleCad+=
            `
            <ul class="product-flags">
            <li class="product-flag new">New</li>
            </ul>   
            `
          } else if (data[i].discount!=false && data[i].nuevo!=true) {
            onsaleCad+=
            `
            <ul class="product-flags">
            <li class="product-flag discount">${data[i].discount}</li>
            </ul>
            `
          } else {
            onsaleCad+=
            `
            <ul class="product-flags">
            </ul>
            `
          };

        onsaleCad+= 
        `
        </div>
        <div class="product-description">
          <h3>
            <a href="#">${data[i].nombre}</a>
          </h3>
        `
          if (data[i].discount!=false ){
            onsaleCad+=
            `
            <div class="price-shipping">
            <span class="regular-price">${data[i].precioRegular}</span>
            <span class="price">${data[i].precioFinal}</span>
            </div>
            `
          } else {
            onsaleCad+=
            `
            <div class="price-shipping">
            <span class="price">${data[i].precioFinal}</span>
            </div>
            `
          }
        onsaleCad+=
        `
          <div class="product-review flex">  
            <div class="grade-stars flex">
        `
        if (data[i].estrellas>0){
            for(e=1; e<=data[i].estrellas; e++){
            onsaleCad+=
            `<img
            src="./img/estrella-dorada-16.png"
            alt=""
            width="20px"
            />
            `
          }
          for(a=1; a==5-data[i].estrellas; a++){
            onsaleCad+=
            `<img
            src="./img/estrella-blanca-16.png"
            alt=""
            width="20px"
            />
            `
          }
        } else {
          for ( o=0; o==5; o++){
            onsaleCad+=
            `<img
            src="./img/estrella-blanca-16.png"
            alt=""
            width="20px"
            />
            `
          }
        }
        onsaleCad+=
        `
           <div class="comments-nb">(${data[i].comentarios})</div>
            </div>
            <div class="tptncountdown flex">
              <div class="countdown-container flex">
                <div class="countdown-icon">
                  <img
                    src="./img/reloj-24.png"
                    alt=""
                    width="24px"
                    height="24px"
                  />
                </div>
                <div class="countdown-time flex">
                  <div class="countdown-days timer flex">
                    <span> <strong>624</strong> </span>
                    <span> Dias </span>
                  </div>
                  <div class="countdown-hours timer flex">
                    <span><strong> 02 </strong></span>
                    <span> Hrs </span>
                  </div>
                  <div class="countdown-minutes timer flex">
                    <span><strong> 40 </strong></span>
                    <span> Mins </span>
                  </div>
                  <div class="countdown-seconds timer flex">
                    <span><strong> 22 </strong></span>
                    <span> Segs </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="cart-hidden-container">
          <a href="#"
            ><img
              class="icono-cart"
              src="./img/compras-Rojo.png"
              alt=""
          /></a>
        </div>
      </div>
    </article>
  </div>
`
if (controlonsale>=2) {
  break
}
    }
}
document.getElementById("onsale-products").innerHTML=onsaleCad;

//--------------Populares-------------------//

var popularCad=`
<div class="popular-products-title flex">
<h4>Productos Populares</h4>
<div class="popular-products-links">
  <a class="flex" href="#">
    <p>Mostrar todos</p>
    <img
      src="./img/siguiente-boton.png"
      alt=""
      width="16px"
  /></a>
</div>
</div>
<div class="popular-products">
<div class="popular-products-container">
  <div class="popular-products-list">
`
for (i=0; i < 4; i++) {
    popularCad+=
    `   <div class="popular-products-product pr1">
            <article class="article-product">
              <div class="thumbnail-container-product">
                <div class="thumbnail-top-product">
                  <a href="#">
                    <picture>
                      <img
                        src="${dataOrdenada[i].imagen}"
                        alt=""
                    /></picture>
                    <button class="wishlist-button-add flex">
                      <img
                        src="./img/corazon-strong.png"
                        alt=""
                        width="16px"
                      />
                    </button>
                  </a>`
                  if (dataOrdenada[i].discount!=false && dataOrdenada[i].nuevo==true) {
                  popularCad+=
                  `
                  <ul class="product-flags">
                    <li class="product-flag discount">${dataOrdenada[i].discount}</li>
                    <li class="product-flag new">New</li>
                  </ul>
                  `
                } else if (dataOrdenada[i].discount==false && dataOrdenada[i].nuevo==true){
                  popularCad+=
                  `
                  <ul class="product-flags">
                  <li class="product-flag new">New</li>
                  </ul>   
                  `
                } else if (dataOrdenada[i].discount!=false && dataOrdenada[i].nuevo!=true) {
                  popularCad+=
                  `
                  <ul class="product-flags">
                  <li class="product-flag discount">${dataOrdenada[i].discount}</li>
                  </ul>
                  `
                } else {
                  popularCad+=
                  `
                  <ul class="product-flags">
                  </ul>
                  `
                };
                  popularCad+= 
                  `
                </div>
                <div class="product-description-populars">
                  <h3>
                  <a href="#">${dataOrdenada[i].nombre}</a>
                  </h3>
                `
                if (dataOrdenada[i].discount!=false ){
                  popularCad+=
                `
                    <div class="product-price">
                    <span class="regular-price">${dataOrdenada[i].precioRegular}</span>
                    <span class="price">${dataOrdenada[i].precioFinal}</span>
                  </div>
                `
                 } else {
                   popularCad+=
                   `
                   <div class="price-price">
                   <span class="price">${dataOrdenada[i].precioFinal}</span>
                   </div>
                   `
                 }
                 popularCad+=
                `
                  <div class="product-review">
                    <div class="grade-stars stars-responsive flex2">
                `
                if (dataOrdenada[i].estrellas>0){
                  for(e=1; e<=dataOrdenada[i].estrellas; e++){
                  popularCad+=
                      `<img
                        src="./img/estrella-dorada-16.png"
                        alt=""
                        width="20px"
                      />
                      `}
                  for(a=1; a==5-dataOrdenada[i].estrellas; a++){
                  popularCad+=
                    `<img
                        src="./img/estrella-blanca-16.png"
                        alt=""
                        width="20px"
                      />`
                  }
                } else {
                  for ( o=0; o==5; o++){
                    popularCad+=
                    `<img
                    src="./img/estrella-blanca-16.png"
                    alt=""
                    width="20px"
                    />
                    `
                  }
                }
                popularCad+=
                `
                      <div class="comments-nb">(${dataOrdenada[i].comentarios})</div>
                    </div>
                  </div>
                </div>
                <div class="cart-hidden-container-popular">
                  <a href="#"
                    ><img
                      class="icono-cart-popular"
                      src="./img/compras-Rojo.png"
                      alt=""
                  /></a>
                </div>
              </div>
            </article>
          </div>
    `
}

popularCad+=
`
</div>
</div>
</div>
`

document.getElementById("popular-products").innerHTML=popularCad;

//--------------Banner2-------------------//

var botbannerCad=`
<ul class="botbanner-row flex">
<li class="botbanner-col">
  <a href="#">
    <img src="./img/botbanner1.jpg" alt="" />
  </a>
</li>
<li class="botbanner-col">
  <a href="#">
    <img src="./img/botbanner2.jpg" alt="" />
  </a>
</li>
</ul>
`
document.getElementById("botbanner").innerHTML=botbannerCad;

//--------------Electronicos-------------------//

var electronicsCad=`
<div class="popular-products-title flex">
<h4>Electronicos</h4>
<div class="popular-products-links">
  <a class="flex" href="#">
    <p>Mostrar todos</p>
    <img
      src="./img/siguiente-boton.png"
      alt=""
      width="16px"
  /></a>
</div>
</div>
<div class="popular-products">
<div class="popular-products-container">
  <div class="popular-products-list">
  `

controlelec=0
for (i=0; i < data.length; i++){
  if (data[i].categoria=="Electronica"){
  electronicsCad+=
  `<div class="popular-products-product elec1">
      <article class="article-product">
        <div class="thumbnail-container-product">
          <div class="thumbnail-top-product">
            <a href="#">
              <picture>
                <img
                  src="${data[i].imagen}"
                  alt=""
              /></picture>
              <button class="wishlist-button-add flex">
                <img
                  src="./img/corazon-strong.png"
                  alt=""
                  width="16px"
                />
              </button>
            </a>`
            if (data[i].discount!=false && data[i].nuevo==true) {
              electronicsCad+=
            `
            <ul class="product-flags">
              <li class="product-flag discount">${data[i].discount}</li>
              <li class="product-flag new">New</li>
            </ul>
            `
          } else if (data[i].discount==false && data[i].nuevo==true){
            electronicsCad+=
            `
            <ul class="product-flags">
            <li class="product-flag new">New</li>
            </ul>   
            `
          } else if (data[i].discount!=false && data[i].nuevo!=true) {
            electronicsCad+=
            `
            <ul class="product-flags">
            <li class="product-flag discount">${data[i].discount}</li>
            </ul>
            `
          } else {
            electronicsCad+=
            `
            <ul class="product-flags">
            </ul>
            `
          };
            electronicsCad+= 
            `
          </div>
          <div class="product-description-populars">
            <h3>
              <a href="#">${data[i].nombre}</a>
            </h3>
            `
            if (data[i].discount!=false ){
              electronicsCad+=
            `
            <div class="product-price">
              <!-- <span class="regular-price">${data[i].precioRegular}</span> -->
              <span class="price">${data[i].precioFinal}</span>
            </div>
            `
            } else {
            electronicsCad +=
            `
            <div class="price-price">
            <span class="price">${data[i].precioFinal}</span>
            </div>
            `
           }
           electronicsCad+=
           `
            <div class="product-review">
              <div class="grade-stars stars-responsive flex2">
           `
           if (data[i].estrellas>0){
            for(e=1; e<=data[i].estrellas; e++){
            electronicsCad +=
               `<img
                  src="./img/estrella-dorada-16.png"
                  alt=""
                  width="20px"
                />
                `}
                for(a=1; a==5-data[i].estrellas; a++){
                electronicsCad+=
               `<img
                  src="./img/estrella-blanca-16.png"
                  alt=""
                  width="20px"
                />`
                 }
                } else {
                  for ( o=0; o==5; o++){
                    electronicsCad+=
                    `<img
                    src="./img/estrella-blanca-16.png"
                    alt=""
                    width="20px"
                    />
                    `
                  }
                }
                electronicsCad+=
                `
                  <div class="comments-nb">(1)</div>
              </div>
            </div>
          </div>
          <div class="cart-hidden-container-popular">
            <a href="#"
              ><img
                class="icono-cart-popular"
                src="./img/compras-Rojo.png"
                alt=""
            /></a>
          </div>
        </div>
      </article>
    </div>
`
controlelec+=1
}
if (controlelec==4){
  break
}
}

electronicsCad+=
`</div>
</div>
</div>
`

document.getElementById("electronics-products").innerHTML=electronicsCad;

//--------------Ropa-------------------//

var clothesCad=`
<div class="popular-products-title flex">
<h4>Ropa y Accesorios</h4>
<div class="popular-products-links">
  <a class="flex" href="#">
    <p>Mostrar todos</p>
    <img
      src="./img/siguiente-boton.png"
      alt=""
      width="16px"
  /></a>
</div>
</div>
<div class="popular-products">
<div class="popular-products-container">
  <div class="popular-products-list">
    <div class="popular-products-product rya1">
      <article class="article-product">
        <div class="thumbnail-container-product">
          <div class="thumbnail-top-product">
            <a href="#">
              <picture>
                <img
                  src="./img/premium-designer-hand-bag.jpg"
                  alt=""
              /></picture>
              <button class="wishlist-button-add flex">
                <img
                  src="./img/corazon-strong.png"
                  alt=""
                  width="16px"
                />
              </button>
            </a>
            <ul class="product-flags">
              <!-- <li class="product-flag discount">-$10.00</li> -->
              <li class="product-flag new">New</li>
            </ul>
          </div>
          <div class="product-description-populars">
            <h3>
              <a href="#">Cartera de Diseño Premium</a>
            </h3>
            <div class="product-price">
              <!-- <span class="regular-price"> $750.00 </span> -->
              <span class="price"> $85.00 </span>
            </div>
            <div class="product-review">
              <div
                class="grade-stars stars-responsive flex2"
              >
                <img
                  src="./img/estrella-dorada-16.png"
                  alt=""
                  width="20px"
                />
                <img
                  src="./img/estrella-dorada-16.png"
                  alt=""
                  width="20px"
                />
                <img
                  src="./img/estrella-dorada-16.png"
                  alt=""
                  width="20px"
                />
                <img
                  src="./img/estrella-dorada-16.png"
                  alt=""
                  width="20px"
                />
                <img
                  src="./img/estrella-dorada-16.png"
                  alt=""
                  width="20px"
                />
                <div class="comments-nb">(1)</div>
              </div>
            </div>
          </div>
          <div class="cart-hidden-container-popular">
            <a href="#"
              ><img
                class="icono-cart-popular"
                src="./img/compras-Rojo.png"
                alt=""
            /></a>
          </div>
        </div>
      </article>
    </div>
    <div class="popular-products-product rya2">
      <article class="article-product">
        <div class="thumbnail-container-product">
          <div class="thumbnail-top-product">
            <a href="#">
              <picture>
                <img
                  src="./img/smart-casual-men-sneakers.jpg"
                  alt=""
              /></picture>
              <button class="wishlist-button-add flex">
                <img
                  src="./img/corazon-strong.png"
                  alt=""
                  width="16px"
                />
              </button>
            </a>
            <ul class="product-flags">
              <li class="product-flag discount">-$5.00</li>
              <li class="product-flag new">New</li>
            </ul>
          </div>
          <div class="product-description-populars">
            <h3>
              <a href="#"
                >Zapatillas Casuales para Hombres</a
              >
            </h3>
            <div class="product-price">
              <span class="regular-price"> $40.00 </span>
              <span class="price"> $35.00 </span>
            </div>
            <div class="product-review">
              <div
                class="grade-stars stars-responsive flex2"
              >
                <img
                  src="./img/estrella-dorada-16.png"
                  alt=""
                  width="20px"
                />
                <img
                  src="./img/estrella-dorada-16.png"
                  alt=""
                  width="20px"
                />
                <img
                  src="./img/estrella-dorada-16.png"
                  alt=""
                  width="20px"
                />
                <img
                  src="./img/estrella-dorada-16.png"
                  alt=""
                  width="20px"
                />
                <img
                  src="./img/estrella-dorada-16.png"
                  alt=""
                  width="20px"
                />
                <div class="comments-nb">(1)</div>
              </div>
            </div>
          </div>
          <div class="cart-hidden-container-popular">
            <a href="#"
              ><img
                class="icono-cart-popular"
                src="./img/compras-Rojo.png"
                alt=""
            /></a>
          </div>
        </div>
      </article>
    </div>
    <div class="popular-products-product rya3">
      <article class="article-product">
        <div class="thumbnail-container-product">
          <div class="thumbnail-top-product">
            <a href="#">
              <picture>
                <img
                  src="./img/formal-striped-women-top.jpg"
                  alt=""
              /></picture>
              <button class="wishlist-button-add flex">
                <img
                  src="./img/corazon-strong.png"
                  alt=""
                  width="16px"
                />
              </button>
            </a>
            <ul class="product-flags">
              <li class="product-flag discount">-$5.00</li>
              <li class="product-flag new">New</li>
            </ul>
          </div>
          <div class="product-description-populars">
            <h3>
              <a href="#">Top Formal de Mujer a Rayas</a>
            </h3>
            <div class="product-price">
              <span class="regular-price"> $35.00 </span>
              <span class="price"> $30.00 </span>
            </div>
            <div class="product-review">
              <div
                class="grade-stars stars-responsive flex2"
              >
                <img
                  src="./img/estrella-dorada-16.png"
                  alt=""
                  width="20px"
                />
                <img
                  src="./img/estrella-dorada-16.png"
                  alt=""
                  width="20px"
                />
                <img
                  src="./img/estrella-dorada-16.png"
                  alt=""
                  width="20px"
                />
                <img
                  src="./img/estrella-dorada-16.png"
                  alt=""
                  width="20px"
                />
                <img
                  src="./img/estrella-blanca-16.png"
                  alt=""
                  width="20px"
                />
                <div class="comments-nb">(2)</div>
              </div>
            </div>
          </div>
          <div class="cart-hidden-container-popular">
            <a href="#"
              ><img
                class="icono-cart-popular"
                src="./img/compras-Rojo.png"
                alt=""
            /></a>
          </div>
        </div>
      </article>
    </div>
    <div class="popular-products-product rya4">
      <article class="article-product">
        <div class="thumbnail-container-product">
          <div class="thumbnail-top-product">
            <a href="#">
              <picture>
                <img
                  src="./img/women-cotton-blend-trousers.jpg"
                  alt=""
              /></picture>
              <button class="wishlist-button-add flex">
                <img
                  src="./img/corazon-strong.png"
                  alt=""
                  width="16px"
                />
              </button>
            </a>
            <ul class="product-flags">
              <!-- <li class="product-flag discount">-$20.00</li> -->
              <li class="product-flag new">New</li>
            </ul>
          </div>
          <div class="product-description-populars">
            <h3>
              <a href="#">Pantalon de Algodon para Mujer</a>
            </h3>
            <div class="product-price">
              <!-- <span class="regular-price"> $200.00 </span> -->
              <span class="price"> $65.00 </span>
            </div>
            <div class="product-review">
              <div
                class="grade-stars stars-responsive flex2"
              >
                <img
                  src="./img/estrella-dorada-16.png"
                  alt=""
                  width="20px"
                />
                <img
                  src="./img/estrella-dorada-16.png"
                  alt=""
                  width="20px"
                />
                <img
                  src="./img/estrella-dorada-16.png"
                  alt=""
                  width="20px"
                />
                <img
                  src="./img/estrella-dorada-16.png"
                  alt=""
                  width="20px"
                />
                <img
                  src="./img/estrella-dorada-16.png"
                  alt=""
                  width="20px"
                />
                <div class="comments-nb">(2)</div>
              </div>
            </div>
          </div>
          <div class="cart-hidden-container-popular">
            <a href="#"
              ><img
                class="icono-cart-popular"
                src="./img/compras-Rojo.png"
                alt=""
            /></a>
          </div>
        </div>
      </article>
    </div>
  </div>
</div>
</div>
`
document.getElementById("clothes").innerHTML=clothesCad;

//--------------Marcas-------------------//

var marksCad=`
<div class="popular-products-title flex">
<h4>Marcas</h4>
<div class="popular-products-links">
  <a class="flex" href="#">
    <p>Mostrar todas</p>
    <img
      src="./img/siguiente-boton.png"
      alt=""
      width="16px"
  /></a>
</div>
</div>
<div class="marcas-container">
<ul class="marcas-list flex">
  <li class="mark1">
    <a href="#"><img src="./img/Adidas.png" alt="" /></a>
  </li>
  <li class="mark2">
    <a href="#"><img src="./img/Apple.png" alt="" /></a>
  </li>
  <li class="mark3">
    <a href="#"><img src="./img/Coca.png" alt="" /></a>
  </li>
  <li class="mark4">
    <a href="#"><img src="./img/Google.png" alt="" /></a>
  </li>
  <li class="mark5">
    <a href="#"><img src="./img/Mc.png" alt="" /></a>
  </li>
  <li class="mark6">
    <a href="#"><img src="./img/Nike.png" alt="" /></a>
  </li>
</ul>
</div>
`
document.getElementById("marks").innerHTML=marksCad;

//--------------Experiencias-------------------//

var experiencesCad=`
<div class="popular-products-title flex">
<h4>Experiencias</h4>
<div class="popular-products-links">
  <a class="flex" href="#">
    <p>Mostrar mas</p>
    <img
      src="./img/siguiente-boton.png"
      alt=""
      width="16px"
  /></a>
</div>
</div>
<div class="experiencias-texts flex">
<div class="experiencia exp1 flex">
  <img
    src="./img/Rostro1.png"
    class="foto-exp"
    alt=""
    width="100px"
  />
  <p>
    "Estoy muy contenta con mi compra. El producto es
    exactamente lo que esperaba." - Ana Lopez
  </p>
</div>
<div class="experiencia exp2 flex">
  <img
    src="./img/Rostro3.png"
    class="foto-exp"
    alt=""
    width="100px"
  />
  <p>
    "El servicio al cliente fue excelente. Me ayudaron a
    encontrar el producto perfecto para mis necesidades." -
    Juan Perez
  </p>
</div>
<div class="experiencia exp3 flex">
  <img
    src="./img/Rostro2.png"
    class="foto-exp"
    alt=""
    width="100px"
  />
  <p>
    "¡Recomendaría esta tienda a cualquiera! Los precios son
    excelentes y la calidad de los productos es
    insuperable." - Maria Garcia
  </p>
</div>
<div class="experiencia exp4 flex">
  <img
    src="./img/Rostro4.png"
    class="foto-exp"
    alt=""
    width="100px"
  />
  <p>
    "
    <strong
      >¡Envío rápido y excelente servicio al cliente!
    </strong>
    Tuve un problema con mi pedido y lo solucionaron de
    inmediato. Definitivamente compraré aquí de nuevo." -
    Jose Martinez
  </p>
</div>
</div>
`
document.getElementById("experiences").innerHTML=experiencesCad;




