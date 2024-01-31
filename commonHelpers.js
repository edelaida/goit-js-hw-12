import{S as v,i as c,a as w}from"./assets/vendor-2618a76b.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const P=document.querySelector(".form"),u=document.querySelector(".gallery"),l=document.querySelector(".js-btn-load"),m=document.querySelector(".js-loader"),h=new v(".gallery a",{captionsData:"alt",captions:!0,captionDelay:250,captionsPosition:"bottom"});let d=1,p=40,g=0,f=0,n="";async function y(s){const r="42086416-f15f3f0137ece30b1354f2d54",o=new URLSearchParams({key:r,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,page:d,per_page:p}),e=`https://pixabay.com/api/?${o}`,t=await w.get(e,o);return g=t.data.totalHits,t.data.hits}P.addEventListener("submit",E);l.addEventListener("click",M);async function E(s){s.preventDefault(),u.innerHTML="",d=1,n="";try{if(n=s.currentTarget.elements.title.value.trim(),!n)return c.show({message:"Please enter name to search",position:"topRight",backgroundColor:"red",messageColor:"white"});const r=await y(n);r.length===0?(c.error({position:"center",title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}),l.classList.add("is-hidden")):(u.innerHTML=S(r),l.classList.remove("is-hidden")),h.refresh(),b(),L(r),s.target.reset()}catch{c.error({position:"center",title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"})}}async function M(){d+=1,$();const s=await y(n);u.insertAdjacentHTML("beforeend",S(s)),h.refresh(),b(),L()}function L(){f=Math.ceil(g/p),d>=f?(l.classList.add("is-hidden"),c.error({position:"bottomLeft",title:"We are sorry",message:"but you ve reached the end of search results."})):l.classList.remove("is-hidden")}function $(){m.classList.remove("is-hidden")}function b(){m.classList.add("is-hidden")}function S(s){return s.map(({webformatURL:r,largeImageURL:o,tags:i,likes:e,comments:t,downloads:a})=>`
 <li class="gallery-item">
  <a class="gallery-link" href="${o}">
    <img class="gallery-image" src="${r}" 
    alt="${i}"/></a>
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
            <p class="info-rez">${a}</p> 
           </li>
        </ul> 
  </li>`).join("")}
//# sourceMappingURL=commonHelpers.js.map
