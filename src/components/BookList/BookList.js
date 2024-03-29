import { useDispatch, useSelector } from "react-redux";
import { getAllBooks, removeBookRequest } from "../../redux/booksRedux";

const BookList = () => {

  const books = useSelector(getAllBooks);
  const dispatch = useDispatch();

  const remove = (e, bookId) => {
    e.preventDefault(); 
    dispatch( removeBookRequest(bookId ));
  };

  return(
    <ul>
        {books.map(book => 
        <li key={book.id}>
            {book.title} by {book.author}
            <button onClick={ e => remove(e,book.id)} >Remove</button>
        </li>)}
    </ul>
  );
};

export default BookList;