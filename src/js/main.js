"use strict";
const API_URL = "https://fakestoreapi.com/products";
const productsList = document.querySelector(".js_products-list");
const shoppingCartList = document.querySelector(".js_shopping-cart");

let products = [];
let shoppingCart = [];

function fetchProducts() {
  fetch(API_URL)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      products = data;
      renderProducts(products);
    });
}

function renderProducts(products) {
  let html = "";

  for (const product of products) {
    html += `<li class="product-card">
    <div class="product-img-title"> 
    <img class="product-img"src="${product.image}"/>
    <h2 class="product-title">${product.title}</h2>
    </div>
    <div class="product-price-button">
    <p class="product-price">${product.price}</p>
    <button class="product-button" data-id="${product.id}">Buy</button>
    </div>
    </li>`;
  }

  productsList.innerHTML = html;
}

fetchProducts();

productsList.addEventListener("click", (ev) => {
  ev.preventDefault();
  console.log(ev.target.dataset.id);
  const productId = ev.target.dataset.id;
  const product = products.find((prd) => {
    return Number(prd.id) === Number(productId);
  });

  console.log(product);

  const existProductOnShoppingCart = shoppingCart.findIndex((prd) => {
    return Number(prd.id) === Number(productId);
  });
  console.log(existProductOnShoppingCart);

  if (!Boolean(existProductOnShoppingCart)) {
    shoppingCart.push(product);
  }

  console.log(shoppingCart);
});
