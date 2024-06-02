import{S as y,N as L,M as k,K as b,i as w}from"./assets/vendor-b531c9a1.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function o(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(t){if(t.ep)return;t.ep=!0;const r=o(t);fetch(t.href,r)}})();document.addEventListener("DOMContentLoaded",()=>{const e=document.getElementById("menuIcon"),s=document.getElementById("closeIcon"),o=document.getElementById("menu"),i=document.querySelectorAll(".link-nav");e.addEventListener("click",()=>{o.classList.add("active")}),s.addEventListener("click",()=>{o.classList.remove("active")}),i.forEach(t=>{t.addEventListener("click",()=>{o.classList.remove("active")})})});const d=document.querySelector("#toggle-theme"),c=document.body,u=document.querySelector(".menu"),m=document.querySelectorAll(".link-nav"),S=document.getElementById("closeIcon"),l=S.querySelector("img");l.src="";const f=localStorage.getItem("theme")||"light";c.classList.add(`${f}-theme`);f==="dark"&&(d.checked=!0,u.classList.add("dark-theme-menu"),l.src="../img/x dark-close.png",m.forEach(e=>{e.classList.add("link-nav-dark")}));d.addEventListener("change",()=>{d.checked?(c.classList.remove("light-theme"),c.classList.add("dark-theme"),u.classList.add("dark-theme-menu"),l.src="../img/x dark-close.png",m.forEach(e=>{e.classList.add("link-nav-dark")}),localStorage.setItem("theme","dark")):(c.classList.remove("dark-theme"),c.classList.add("light-theme"),u.classList.remove("dark-theme-menu"),l.src="../img/x white-close.png",m.forEach(e=>{e.classList.remove("link-nav-dark")}),localStorage.setItem("theme","light"))});document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector(".my-project-list"),s=document.querySelector(".load-more-btn"),o=e.querySelectorAll(".my-project-list-item"),i=3;let t=3;function r(){for(let n=0;n<i;n++){if(t>=o.length){s.style.display="none";break}o[t].style.display="block",t++}}s.addEventListener("click",r)});const a=document.querySelectorAll(".accordion button");function E(){const e=this.getAttribute("aria-expanded"),s=this.nextElementSibling;for(let o=0;o<a.length;o++)a[o].setAttribute("aria-expanded","false"),a[o].nextElementSibling.hidden=!0;e==="false"&&(this.setAttribute("aria-expanded","true"),s.hidden=!1)}a.forEach(e=>e.addEventListener("click",E));const q=document.querySelector(".empty-text"),x=document.querySelector(".reviews-list"),M=document.querySelector(".reviews-navigation");function j(){return fetch("https://portfolio-js.b.goit.study/api/reviews",{method:"GET"}).then(s=>(s.ok||(w.error({message:"Sorry, there are no reviews"}),q.classList.remove("is-hidden")),s.json()))}const I=e=>e.reduce((s,o)=>s+`<li class="reviews-item swiper-slide"><div class="jjj">
    <p class="reviews-text">${o.review}</p>
    <div class="reviewer">
    <img src="${o.avatar_url}" alt="${o.author}" class="reviewer-img">
    <h3 class="reviewer-name">${o.author}</h3>
    </div></div>
    </li>`,"");j().then(e=>{const s=I(e);x.insertAdjacentHTML("beforeend",s),new y(".mySwiper",{slidesPerView:1,spaceBetween:10,modules:[L,k,b],breakpoints:{768:{slidesPerView:1,spaceBetween:0},1260:{slidesPerView:2,spaceBetween:32}},direction:"horizontal",speed:500,keyboard:{enabled:!0,onlyInViewport:!1},mousewheel:{invert:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}})}).catch(e=>{M.classList.add("is-hidden")});axios.defaults.baseURL="https://portfolio-js.b.goit.study/api";function B(e){e.preventDefault();const s=document.querySelector("#user-email").value,o=document.querySelector("#user-message").value;if(!s||!o){alert("Please fill in both the email and message fields.");return}const i={email:s,comment:o};async function t(r){try{const n=await axios.post("/requests",r,{headers:{Accept:"application/json","Content-Type":"application/json"}});n.data.title&&n.data.message?(P(),p.reset()):alert("There was an error submitting your request. Please try again.")}catch(n){console.error("Error:",n),alert("There was an error submitting your request. Please try again.")}}t(i)}function P(){const e=document.querySelector(".backdrop");e&&e.classList.add("is-open")}const p=document.querySelector("#work-together-form");p&&p.addEventListener("submit",B);const h=document.querySelector("#closeModal");h&&h.addEventListener("click",closeModal);document.querySelector(".modal");const g=document.querySelector(".backdrop"),A=document.querySelector(".close");function v(){g.classList.remove("is-open")}A.addEventListener("click",v);g.addEventListener("click",v);
//# sourceMappingURL=commonHelpers.js.map