const m="https://fakestoreapi.com/products",u=document.querySelector(".js_products-list"),g=document.querySelector(".js_shopping-cart"),h=document.querySelector(".js_findFormInput"),S=document.querySelector(".js_findFormButton");let d=[],e=[];const p=localStorage.getItem("cart");p&&(e=JSON.parse(p),l(e,g,"hidden"));const C=t=>{t.preventDefault();const r=h.value,c=d.filter(o=>o.title.toLowerCase().includes(r.toLowerCase()));l(c,u)};S.addEventListener("click",C);function $(){fetch(m).then(t=>t.json()).then(t=>{console.log(t),d=t,l(d,u)})}function l(t,r,c){let o="",n="Buy",s="";for(const i of t){let a=i.image;a===void 0&&(a="https://placehold.co/600x400"),e.find(f=>i.id===f.id)&&(n="Delete",s="on-cart"),o+=`<li class="product-card ${s}">
    <div class="product-img-title"> 
    <img class="product-img"src="${a}"/>
    <h2 class="product-title ${s}">${i.title}</h2>
    </div>
    <div class="product-price-button">
    <p class="product-price ${s}">${i.price}€</p>
    <button class="product-button ${c} ${s}" data-id="${i.id}">${n}</button>
    </div>
    </li>`,n="Buy",s=""}r.innerHTML=o}$();u.addEventListener("click",t=>{t.preventDefault(),console.log(t.target.dataset.id);const r=t.target.dataset.id,c=d.find(n=>Number(n.id)===Number(r));console.log(c);const o=e.findIndex(n=>Number(n.id)===Number(r));console.log(o),o===-1&&e.push(c),l(e,g,"hidden"),l(d,u),console.log(JSON.stringify(e)),localStorage.setItem("cart",JSON.stringify(e)),console.log(e)});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXMiOltdLCJzb3VyY2VzQ29udGVudCI6W10sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OzsifQ==
