import { useDispatch, useSelector } from "react-redux";

const BookList = () => {

  const books = useSelector(state => state.books);
  const dispatch = useDispatch();

  const removeBook = (e, bookId) => {
    e.preventDefault();
    dispatch( {type: 'REMOVE_BOOK', payload: bookId } );
  };

  return(
    <ul>
        {books.map(book => 
        <li key={book.id}>
            {book.title} by {book.author}
            <button onClick={ e => removeBook(e,book.id)} >Remove</button>
        </li>)}
    </ul>
  );
};

export default BookList;