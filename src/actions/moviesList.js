import { GET_MOVIES_LIST } from '../utils/constants';

export const setMoviesList = (moviesList) => {
  return {
    type: GET_MOVIES_LIST,
    payload: moviesList
  }
}

export const getMoviesList = async (response) => {
  return async (dispatch) => {
    try {
      await dispatch(setMoviesList(response));
    } catch (error) {
      console.error(error);
    }
  }
}