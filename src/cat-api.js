const API_KEY = 'live_7T1AZid9vL75EqfurdhsQyF5aHlQssLaw3xr3sYdppae7KSAJSDJzlDoivV53c65';

export function fetchBreeds() {
  const url = 'https://api.thecatapi.com/v1/breeds';

  return fetch(url, {
    headers: {
      'x-api-key': API_KEY
    }
  })
    .then(response => response.json())
    .then(data => data.map(breed => ({ id: breed.id, name: breed.name })))
    .catch(error => {
      console.error('Error fetching breeds:', error);
      throw error;
    });
}

export function fetchCatByBreed(breedId) {
  const url = `https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`;

  return fetch(url, {
    headers: {
      'x-api-key': API_KEY
    }
  })
    .then(response => response.json())
    .then(data => data[0])
    .catch(error => {
      console.error('Error fetching cat:', error);
      throw error;
    });
}
