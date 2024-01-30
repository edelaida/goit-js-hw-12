import{S as u,i as f,a as m}from"./assets/vendor-2618a76b.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const d=document.querySelector(".form"),a=document.querySelector(".gallery"),l=document.querySelector(".loader"),p=new u(".gallery a",{captionsData:"alt",captions:!0,captionDelay:250,captionsPosition:"bottom"});async function c(i){const o="42086416-f15f3f0137ece30b1354f2d54",r=new URLSearchParams({key:o,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0}),e=`https://pixabay.com/api/?${r}`,t=await m.get(e,r);if(console.log(t),console.log(t.data.hits),!t.ok)throw new Error(t.status);return t.data.hits}d.addEventListener("submit",h);async function h(i){i.preventDefault(),l.classList.remove("is-hidden"),a.innerHTML="";const o=i.currentTarget.elements.title.value.trim();console.log(o);const r=await c(o);console.log(r);try{const s=await c(o);a.innerHTML=y(s),p.refresh(),l.classList.add("is-hidden")}catch{f.error({position:"center",title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"})}}function y(i){return i.map(({webformatURL:o,largeImageURL:r,tags:s,likes:e,comments:t,downloads:n})=>`
 <li class="gallery-item">
  <a class="gallery-link" href="${r}">
    <img class="gallery-image" src="${o}" 
    alt="${s}"/></a>
    <ul class="gallery-info">
          <li class="info-item">
            <h4 class="info-title">likes</h4>
            <p class="info-rez">${e}</p> 
          </li>
          <li class="info-item">
            <h4 class="info-title">comments</h4>
            <p class="info-rez">${t}</p> 
           </li>
          <li class="info-item">
            <h4 class="info-title">downloads</h4>
            <p class="info-rez">${n}</p> 
           </li>
        </ul> 
  </li>`).join("")}
//# sourceMappingURL=commonHelpers.js.map
