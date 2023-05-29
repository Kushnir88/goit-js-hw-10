import { fetchBreeds, fetchCatByBreed } from './cat-api.js';

const breedSelect = document.getElementById('breed-select');
const catInfo = document.querySelector('.cat-info');
const catImage = document.getElementById('cat-image');
const catBreed = document.getElementById('cat-breed');
const catDescription = document.getElementById('cat-description');
const catTemperament = document.getElementById('cat-temperament');
const loader = document.querySelector('.loader');
const error = document.querySelector('.error');

function populateBreeds() {
  fetchBreeds()
    .then(breeds => {
      breeds.forEach(breed => {
        const option = document.createElement('option');
        option.value = breed.id;
        option.textContent = breed.name;
        breedSelect.appendChild(option);
      });

      breedSelect.addEventListener('change', handleBreedSelect);
      breedSelect.removeAttribute('disabled');
      loader.style.display = 'none';
    })
    .catch(() => {
      showError();
      loader.style.display = 'none';
    });
}

function handleBreedSelect() {
  const breedId = breedSelect.value;

  fetchCatByBreed(breedId)
    .then(cat => {
      const firstBreed = cat.breeds[0];
      catBreed.textContent = firstBreed.name;
      catDescription.textContent = firstBreed.description;
      catTemperament.textContent = `Temperament: ${firstBreed.temperament}`;
      catImage.src = cat.url;

      catInfo.style.display = 'block';
      loader.style.display = 'none';
    })
    .catch(() => {
      showError();
      loader.style.display = 'none';
    });
}

function showError() {
  error.style.display = 'block';
}

loader.style.display = 'block';
populateBreeds();
