import"./assets/vendor-23dd7e6c.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&c(s)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const n=document.querySelectorAll(".accordion button");function l(){const i=this.getAttribute("aria-expanded"),o=this.nextElementSibling;for(let r=0;r<n.length;r++)n[r].setAttribute("aria-expanded","false"),n[r].nextElementSibling.hidden=!0;i==="false"&&(this.setAttribute("aria-expanded","true"),o.hidden=!1)}n.forEach(i=>i.addEventListener("click",l));
//# sourceMappingURL=commonHelpers.js.map