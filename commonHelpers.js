import{S as w,i as c,a as P}from"./assets/vendor-2618a76b.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const u=document.querySelector(".form"),f=document.querySelector(".gallery"),l=document.querySelector(".js-btn-load"),h=document.querySelector(".js-loader"),p=new w(".gallery a",{captionsData:"alt",captions:!0,captionDelay:250,captionsPosition:"bottom"});let d=1,g=40,y=0,m=0,n="";async function L(s){const r="42086416-f15f3f0137ece30b1354f2d54",o=new URLSearchParams({key:r,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,page:d,per_page:g}),e=`https://pixabay.com/api/?${o}`,t=await P.get(e,o);return y=t.data.totalHits,t.data.hits}u.addEventListener("submit",E);l.addEventListener("click",M);async function E(s){s.preventDefault(),f.innerHTML="",d=1,n="";try{n=s.currentTarget.elements.title.value.trim(),n===""?(c.show({message:"Please enter name to search",position:"topRight",backgroundColor:"red",messageColor:"white"}),u.disabled=!0):u.disabled=!1;const r=await L(n);r.length===0?(c.error({position:"center",title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}),l.classList.add("is-hidden")):(f.innerHTML=v(r),l.classList.remove("is-hidden")),p.refresh(),S(),b(r),s.target.reset()}catch{c.error({position:"center",title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"})}}async function M(){d+=1,$();const s=await L(n);f.insertAdjacentHTML("beforeend",v(s)),p.refresh(),S(),b()}function b(){m=Math.ceil(y/g),d>=m?(l.classList.add("is-hidden"),c.error({position:"bottomLeft",title:"We are sorry",message:"but you ve reached the end of search results."})):l.classList.remove("is-hidden")}function $(){h.classList.remove("is-hidden")}function S(){h.classList.add("is-hidden")}function v(s){return s.map(({webformatURL:r,largeImageURL:o,tags:i,likes:e,comments:t,downloads:a})=>`
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
