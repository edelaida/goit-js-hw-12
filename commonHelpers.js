import{S as b,i as S,a as w}from"./assets/vendor-2618a76b.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const E=document.querySelector(".form"),a=document.querySelector(".gallery"),f=document.querySelector(".js-btn-load"),d=document.querySelector(".js-loader"),m=new b(".gallery a",{captionsData:"alt",captions:!0,captionDelay:250,captionsPosition:"bottom"});let c=1,p=30,M=100,u=0,l="";async function h(r){const o="42086416-f15f3f0137ece30b1354f2d54",s=new URLSearchParams({key:o,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,page:c,per_page:p}),e=`https://pixabay.com/api/?${s}`;return(await w.get(e,s)).data.hits}E.addEventListener("submit",P);f.addEventListener("click",$);async function P(r){r.preventDefault(),a.innerHTML="";try{l=r.currentTarget.elements.title.value.trim();const o=await h(l);a.innerHTML=L(o),m.refresh(),g(),y(),r.target.reset()}catch{S.error({position:"center",title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"})}}async function $(){c+=1,v();const r=await h(l);a.insertAdjacentHTML("beforeend",L(r)),m.refresh(),g(),y()}function y(){u=Math.ceil(M/p),f.disabled=c>=u}function v(){d.classList.remove("is-hidden")}function g(){d.classList.add("is-hidden")}function L(r){return r.map(({webformatURL:o,largeImageURL:s,tags:n,likes:e,comments:t,downloads:i})=>`
 <li class="gallery-item">
  <a class="gallery-link" href="${s}">
    <img class="gallery-image" src="${o}" 
    alt="${n}"/></a>
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
            <p class="info-rez">${i}</p> 
           </li>
        </ul> 
  </li>`).join("")}
//# sourceMappingURL=commonHelpers.js.map
