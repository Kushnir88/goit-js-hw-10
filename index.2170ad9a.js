var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var d={id:e,exports:{}};return t[e]=d,o.call(d.exports,d,d.exports),d.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){n[e]=t},e.parcelRequired7c6=o);var d=o("9dxg1");const l=document.getElementById("breed-select"),r=document.querySelector(".cat-info"),c=document.getElementById("cat-image"),a=document.getElementById("cat-breed"),i=document.getElementById("cat-description"),s=document.getElementById("cat-temperament"),u=document.querySelector(".loader"),y=document.querySelector(".error");function m(){const e=l.value;(0,d.fetchCatByBreed)(e).then((e=>{const[t]=e.breeds;a.textContent=t.name,i.textContent=t.description,s.textContent=`Temperament: ${t.temperament}`,c.src=e.url,r.style.display="block",u.style.display="none"})).catch((()=>{p(),u.style.display="none"}))}function p(){y.style.display="block"}u.style.display="block",(0,d.fetchBreeds)().then((e=>{e.forEach((e=>{const t=document.createElement("option");t.value=e.id,t.textContent=e.name,l.appendChild(t)})),l.addEventListener("change",m),l.removeAttribute("disabled"),u.style.display="none"})).catch((()=>{p(),u.style.display="none"}));
//# sourceMappingURL=index.2170ad9a.js.map
