import { useState } from 'react';
import shortid from 'shortid';
import BookForm from './components/BookForm/BookForm';
import BookList from './components/BookList/BookList';

const App = () => {

  const [books, setBooks] = useState([
    {id: 1, title: 'Droga Szamana', author: 'Michal M'},
    {id:2, title: 'Legion Nieśmiertelnych', author: 'Jack C'}
  ]);

  const removeBook = bookId => {
    setBooks(books.filter(book => book.id !== bookId));
  };

  const addBook = newBook =>{
    setBooks([...books, {id: shortid() ,title: newBook.title, author: newBook.author}]);
  };

  return (
    <div>
      <h1> Books App React</h1>
      <BookList books = {books} removeBook={removeBook} />
      <BookForm addBook={addBook}/>
    </div>
  );
}

export default App;
