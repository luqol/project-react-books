import { createStore } from 'redux';
import initialState from "./initialState";
import shortid from 'shortid';

const reducer = (state, action) => {

    switch (action.type){
        case 'ADD_BOOK':
            return {...state, books: [...state.books, {id: shortid(), ...action.payload} ]};
        case 'REMOVE_BOOK':
            return {...state, books: state.books.filter(book => book.id !== action.payload) };
        default:
            return state;
    }
};


const store = createStore(
    reducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  );
  
  export default store;