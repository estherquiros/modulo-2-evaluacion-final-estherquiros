"use strict";
const API_URL = "https://fakestoreapi.com/products";
const productsList = document.querySelector(".js_products-list");

let products = [];

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
    html += `<li>"
    <img src="${product.image}"/>
    <h2>${product.title}</h2>
    <p>${product.price}</p>
    <button data-id="${product.id}">Buy</button>
    </li>`;
  }

  productsList.innerHTML = html;
}

fetchProducts();

productsList.addEventListener("click", (ev) => {
  ev.preventDefault();
  console.log(ev.target.dataset.id);
});
