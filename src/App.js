
import { useEffect } from 'react';
import BookForm from './components/BookForm/BookForm';
import BookList from './components/BookList/BookList';
import { fetchBooks } from './redux/booksRedux';
import { useDispatch } from 'react-redux';

const App = () => {

  const dispatch = useDispatch();

  useEffect( () => dispatch(fetchBooks()), [dispatch]);

  return (
    <div>
      <h1> Books App React</h1>
      <BookList />
      <BookForm />
    </div>
  );
}

export default App;
