import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import axios from "axios";

const formImg = document.querySelector('.form');
const pictures = document.querySelector('.gallery');
const btnLoadMore = document.querySelector('.js-btn-load')
const loadElem = document.querySelector('.js-loader');

const modal = new SimpleLightbox('.gallery a', {
  captionsData: "alt",
  captions: true,
  captionDelay: 250,
  captionsPosition: 'bottom',
});

let page = 1;
let limit = 40;
let totalResults = 0;
let maxPage = 0;
let serchValue = '';

async function fetchUsers(q) {
  const API_KEY = '42086416-f15f3f0137ece30b1354f2d54';
  const PARAMS = new URLSearchParams({
    key: API_KEY,
    q,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    page: page,
      per_page: limit,
  });
  const BASE_URL = 'https://pixabay.com/api';
  const url = `${BASE_URL}/?${PARAMS}`; 
  const response = await axios.get(url, PARAMS);  
   totalResults = response.data.totalHits;        
    return response.data.hits;   
 }
 
formImg.addEventListener('submit', handleSubmit);
btnLoadMore.addEventListener('click', onLoadMore);

async function handleSubmit(ent) {
    ent.preventDefault();   
    pictures.innerHTML = '';    
      page = 1;
  serchValue = '';
  try {
    serchValue = ent.currentTarget.elements.title.value.trim();
    
    if (!serchValue) {
      return iziToast.show({
        message: `Please enter name to search`,
        position: 'topRight',
        backgroundColor: 'red',
        messageColor: 'white',
      });      
    }
      
    const arr = await fetchUsers(serchValue)
      
    if (arr.length === 0) {
     iziToast.error({
            position: 'center',
            title: 'Error',
            message: 'Sorry, there are no images matching your search query. Please try again!',
     })
      btnLoadMore.classList.add('is-hidden');
    } else {
      pictures.innerHTML = markUp(arr);
      btnLoadMore.classList.remove('is-hidden');
   }        
        modal.refresh();
        hideLoader();
    changeBtnStatus(arr);
    ent.target.reset();
       
    } catch(error) {
        iziToast.error({
            position: 'center',
            title: 'Error',
            message: 'Sorry, there are no images matching your search query. Please try again!',
        })
    }      
}

async function onLoadMore() {
  page += 1;
  showLoader();
  const arr = await fetchUsers(serchValue)
  pictures.insertAdjacentHTML('beforeend', markUp(arr));
  modal.refresh();
    hideLoader();
  changeBtnStatus();
}

function changeBtnStatus() {
  maxPage = Math.ceil(totalResults / limit);
  if (page >= maxPage) {
    btnLoadMore.classList.add('is-hidden');
    iziToast.error({
            position: 'bottomLeft',
            title: 'We are sorry',
            message: 'but you ve reached the end of search results.',
        })
  } else {
    btnLoadMore.classList.remove('is-hidden');
  }
}

function showLoader() {
  loadElem.classList.remove('is-hidden');
}
function hideLoader() {
  loadElem.classList.add('is-hidden');
}

function markUp(arr) {
  return arr.map(({webformatURL, largeImageURL, tags, likes, comments, downloads}) => {
    return `
 <li class="gallery-item">
  <a class="gallery-link" href="${largeImageURL}">
    <img class="gallery-image" src="${webformatURL}" 
    alt="${tags}"/></a>
    <ul class="gallery-info">
          <li class="info-item">
            <h4 class="info-title">likes</h4>
            <p class="info-rez">${likes}</p> 
          </li>
          <li class="info-item">
            <h4 class="info-title">comments</h4>
            <p class="info-rez">${comments}</p> 
           </li>
          <li class="info-item">
            <h4 class="info-title">downloads</h4>
            <p class="info-rez">${downloads}</p> 
           </li>
        </ul> 
  </li>`
})
 .join(""); 
}

