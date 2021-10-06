import { handleRequest } from "../config/Api";
import { API_KEY } from "../utils/constants";

export default {
  searchMovies: async currentPage => {
    const response = handleRequest(`search/movie?api_key=${API_KEY}&language=pt-BR&page=${currentPage}&include_adult=false&query=general`);
    return response;
  },
  getMovieDetails: async id => {
    const response = handleRequest(`movie/${id}?api_key=${API_KEY}&language=pt-BR`);
    return response;
  }
}