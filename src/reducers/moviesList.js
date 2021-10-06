import { GET_MOVIES_LIST } from '../utils/constants';

const moviesList = (state = [], action) => {
  switch(action.type) {
    case GET_MOVIES_LIST:
      return [
        ...state,
        action.payload
      ]
    default:
      return state;
  }
}

export default moviesList;