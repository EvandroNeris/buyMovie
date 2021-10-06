import { createStore, combineReducers, applyMiddleware } from 'redux';

import thunk from 'redux-thunk';
import moviesList from '../reducers/moviesList';

const store = createStore(moviesList, applyMiddleware(thunk));

export default store;
