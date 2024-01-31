import{S,i as d,a as v}from"./assets/vendor-2618a76b.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const w=document.querySelector(".form"),c=document.querySelector(".gallery"),u=document.querySelector(".js-btn-load"),m=document.querySelector(".js-loader"),p=new S(".gallery a",{captionsData:"alt",captions:!0,captionDelay:250,captionsPosition:"bottom"});let l=1,h=30,E=100,f=0,a="";async function y(r){const o="42086416-f15f3f0137ece30b1354f2d54",s=new URLSearchParams({key:o,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,page:l,per_page:h}),e=`https://pixabay.com/api/?${s}`;return(await v.get(e,s)).data.hits}w.addEventListener("submit",M);u.addEventListener("click",P);async function M(r){r.preventDefault(),c.innerHTML="",l=1,a="";try{a=r.currentTarget.elements.title.value.trim();const o=await y(a);c.innerHTML=b(o),p.refresh(),L(),g(),r.target.reset()}catch{d.error({position:"center",title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"})}}async function P(){l+=1,$();const r=await y(a);c.insertAdjacentHTML("beforeend",b(r)),p.refresh(),L(),g()}function g(){f=Math.ceil(E/h),l>=f?(u.disabled=!0,d.error({position:"bottomLeft",title:"We are sorry",message:"but you ve reached the end of search results."})):u.disabled=!1}function $(){m.classList.remove("is-hidden")}function L(){m.classList.add("is-hidden")}function b(r){return r.map(({webformatURL:o,largeImageURL:s,tags:i,likes:e,comments:t,downloads:n})=>`
 <li class="gallery-item">
  <a class="gallery-link" href="${s}">
    <img class="gallery-image" src="${o}" 
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
            <p class="info-rez">${n}</p> 
           </li>
        </ul> 
  </li>`).join("")}
//# sourceMappingURL=commonHelpers.js.map
