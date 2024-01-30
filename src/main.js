import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const formImg = document.querySelector('.form');
const pictures = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

const modal = new SimpleLightbox('.gallery a', {
  captionsData: "alt",
  captions: true,
  captionDelay: 250,
  captionsPosition: 'bottom',
});

function fetchUsers(q) {
  const API_KEY = '42086416-f15f3f0137ece30b1354f2d54';
  const PARAMS = new URLSearchParams({
    key: API_KEY,
    q,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });

  const BASE_URL = 'https://pixabay.com/api';
  const url = `${BASE_URL}/?${PARAMS}`;
 
   return fetch(url).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    };
    return response.json();
  });
 }
 
formImg.addEventListener('submit', subValue);

function subValue(ent) {
  ent.preventDefault();
  loader.classList.remove('is-hidden');
  pictures.innerHTML = '';
  const serchValue = ent.currentTarget.elements.title.value.trim();  
  fetchUsers(serchValue).then(response => {
    if (response.hits.length === 0) {
      iziToast.error({
        position: 'center',
        title: 'Error',
        message: 'Sorry, there are no images matching your search query. Please try again!',
      });
    }
    pictures.innerHTML = markUp(response.hits);
    modal.refresh();
  })
  .catch(error => console.log(error))
  .finally(() => {
    loader.classList.add('is-hidden'); 
  })
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
 