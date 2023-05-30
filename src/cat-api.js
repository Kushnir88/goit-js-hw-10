export { fetchBreeds, fetchCatByBreed };

const API_KEY =
  'live_7T1AZid9vL75EqfurdhsQyF5aHlQssLaw3xr3sYdppae7KSAJSDJzlDoivV53c65';
const BASE_URL = 'https://api.thecatapi.com/v1';
const SECOND_URL = 'https://api.thecatapi.com/v1/images/search';

function fetchBreeds() {
  return fetch(`${BASE_URL}/breeds?api_key=${API_KEY}`)
    .then(resp => {
      if (!resp.ok) {
        Notiflix.Notify.warning(resp.statusText);
      }
      return resp.json();
    })
    .then(data => {
      return data;
    })
    .catch(error => {
      console.error(error);
    });
}

function fetchCatByBreed(breedId) {
  return fetch(`${SECOND_URL}?api_key=${API_KEY}&breed_ids=${breedId}`)
    .then(resp => {
      if (!resp.ok) {
        resp.statusText;
      }
      return resp.json();
    })
    .then(data => {
      return data;
    })
    .catch(error => {
      console.error(error);
    });
}
