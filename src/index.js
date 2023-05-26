  // app.js

import { fetchBreeds, fetchCatByBreed } from './cat-api.js';

const breedSelect = document.querySelector('.breed-select');
const catInfo = document.querySelector('.cat-info');
const loader = document.querySelector('.loader');
const error = document.querySelector('.error');

// Функція для заповнення селекту зі списком порід
function populateBreedSelect(breeds) {
  breeds.forEach(breed => {
    const option = document.createElement('option');
    option.value = breed.id;
    option.text = breed.name;
    breedSelect.appendChild(option);
  });
}

// Функція для відображення інформації про кота
function displayCatInfo(cat) {
  const catImage = catInfo.querySelector('.cat-image');
  const breedName = catInfo.querySelector('.breed-name');
  const breedDescription = catInfo.querySelector('.breed-description');
  const breedTemperament = catInfo.querySelector('.breed-temperament');

  catImage.src = cat.url;
  breedName.textContent = cat.breeds[0].name;
  breedDescription.textContent = cat.breeds[0].description;
  breedTemperament.textContent = cat.breeds[0].temperament;

  catInfo.style.display = 'block';
}

// Функція для очищення інформації про кота
function clearCatInfo() {
  const catImage = catInfo.querySelector('.cat-image');
  const breedName = catInfo.querySelector('.breed-name');
  const breedDescription = catInfo.querySelector('.breed-description');
  const breedTemperament = catInfo.querySelector('.breed-temperament');

  catImage.src = '';
  breedName.textContent = '';
  breedDescription.textContent = '';
  breedTemperament.textContent = '';

  catInfo.style.display = 'none';
}

// Функція для відображення завантажувача
function showLoader() {
  loader.style.display = 'block';
}

// Функція для приховування завантажувача
function hideLoader() {
  loader.style.display = 'none';
}

// Функція для відображення помилки
function showError() {
  error.style.display = 'block';
}

// Функція для приховування помилки
function hideError() {
  error.style.display = 'none';
}

// Обробник події при виборі породи
breedSelect.addEventListener('change', () => {
  const breedId = breedSelect.value;

  if (breedId) {
    clearCatInfo();
    showLoader();
    hideError();

    fetchCatByBreed(breedId)
      .then(cat => {
        hideLoader();
        displayCatInfo(cat);
      })
      .catch(() => {
        hideLoader();
        showError();
      });
  } else {
    clearCatInfo();
  }
});

// Завантаження списку порід при завантаженні сторінки
window.addEventListener('DOMContentLoaded', () => {
  showLoader();
  hideError();

  fetchBreeds()
    .then(breeds => {
      hideLoader();
      populateBreedSelect(breeds);
    })
    .catch(() => {
      hideLoader();
      showError();
    });
});
