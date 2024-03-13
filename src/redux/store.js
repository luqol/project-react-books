import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import initialState from "./initialState";
import booksReducer from './booksRedux';
import { thunk } from 'redux-thunk';

const subreducers = {
    books: booksReducer,
};

const reducer = combineReducers(subreducers);

const store = createStore(
    reducer,
    initialState,
    compose(
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    )
  );
  
  export default store;