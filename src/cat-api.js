// Функція для виконання HTTP-запиту та повернення промісу з результатом
function fetchData(url) {
    return fetch(url, {
      headers: {
        'x-api-key': 'live_7T1AZid9vL75EqfurdhsQyF5aHlQssLaw3xr3sYdppae7KSAJSDJzlDoivV53c65'
      }
    })
      .then(response => response.json())
      .catch(error => {
        throw new Error('Сталася помилка під час виконання запиту');
      });
  }
  
  // Функція для отримання списку порід
  export function fetchBreeds() {
    const url = 'https://api.thecatapi.com/v1/breeds';
    return fetchData(url);
  }
  
  // Функція для отримання інформації про кота за породою
  export function fetchCatByBreed(breedId) {
    const url = `https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`;
    return fetchData(url);
  }