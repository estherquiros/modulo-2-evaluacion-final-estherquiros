const h="https://fakestoreapi.com/products",a=document.querySelector(".js_products-list"),f=document.querySelector(".js_shopping-cart"),g=document.querySelector(".js_findFormInput"),S=document.querySelector(".js_findFormButton");let d=[],r=[];const l=localStorage.getItem("cart");l&&(r=JSON.parse(l),u(r,f,"hidden"));const C=t=>{t.preventDefault();const n=g.value,o=d.filter(i=>i.title.toLowerCase().includes(n.toLowerCase()));u(o,a)};S.addEventListener("click",C);function $(){fetch(h).then(t=>t.json()).then(t=>{d=t,u(d,a)})}function u(t,n,o){let i="",e="Buy",c="";for(const s of t){let p=s.image;p===void 0&&(p="https://placehold.co/600x400"),r.find(m=>s.id===m.id)&&(e="Delete",c="on-cart"),i+=`<li class="product-card ${c}">
    <div class="product-img-title"> 
    <img class="product-img"src="${p}"/>
    <h2 class="product-title ${c}">${s.title}</h2>
    </div>
    <div class="product-price-button">
    <p class="product-price ${c}">${s.price}€</p>
    <button class="product-button ${o} ${c}" data-id="${s.id}">${e}</button>
    </div>
    </li>`,e="Buy",c=""}n.innerHTML=i}$();a.addEventListener("click",t=>{t.preventDefault();const n=t.target.dataset.id,o=d.find(e=>Number(e.id)===Number(n));if(o===void 0)return;r.findIndex(e=>Number(e.id)===Number(n))===-1&&r.push(o),u(r,f,"hidden"),u(d,a),localStorage.setItem("cart",JSON.stringify(r))});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXMiOltdLCJzb3VyY2VzQ29udGVudCI6W10sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OzsifQ==
