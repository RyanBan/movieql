import fetch from "node-fetch";
const API_URL = "https://yts.mx/api/v2/list_movies.json?";
const API_DETAIL_URL = "https://yts.mx/api/v2/movie_details.json?";

export const getMovies = (limit, rating, page, genre) => {
  let REQUEST_URL = API_URL;
  if (limit > 0) {
    REQUEST_URL += `limit=${limit}`;
  }
  if (rating > 0) {
    REQUEST_URL += `&minimum_rating=${rating}`;
  }
  if (page > 0) {
    REQUEST_URL += `&page=${page}`;
  }
  if (genre) {
    REQUEST_URL += `&limit=50&genre=${genre}&sort_by=download_count`;
  }
  return fetch(REQUEST_URL)
    .then((res) => res.json())
    .then((json) => json.data.movies);
};

export const getById = (id) => {
  let REQUEST_URL = API_DETAIL_URL + `movie_id=${id}&with_cast=true`;
  return fetch(REQUEST_URL)
    .then((res) => res.json())
    .then((json) => json.data.movie);
};
