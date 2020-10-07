export const GET_MOVIES = 'GET_MOVIES';
export const GET_MOVIE = 'GET_MOVIE';
export const RESET_MOVIE = 'RESET_MOVIE';


export function getMovies(){
  return async function (dispatch) {
    const result = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=6d1b8f3df76149d16cf874de028f1419&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1');
    const movies = await result.json();
    return dispatch({
      type: 'GET_MOVIES',
      data: movies.results
    })
  };
};

export function getMovie(id){
  return async function (dispatch) {
    const result = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=6d1b8f3df76149d16cf874de028f1419&language=en-US`);
    const movie = await result.json();
    return dispatch({
      type: 'GET_MOVIE',
      data: movie,
    })
  };
};

export function resetMovie() {
  return {
    type: 'RESET_MOVIE',
  }
};