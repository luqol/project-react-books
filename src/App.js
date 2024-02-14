import React from 'react';
import shortid from 'shortid';
import BookForm from './components/BookForm/BookForm';
import BookList from './components/BookList/BookList';

class App extends React.Component {

state = {
  books: [
    {id: 1, title: 'Droga Szamana', author: 'Michal M'},
    {id: 2, title: 'Legion Nieśmiertelnych', author: 'Jack C'},
    {id: 3, title: 'Legion Nieśmiertelnych', author: 'Jack C'},
  ]
};

  removeBook = bookId => {
    this.setState({books: this.state.books.filter(book => book.id !== bookId) });
  };

  addBook = newBook =>{
    this.setState({ books:[...this.state.books, {id: shortid() ,title: newBook.title, author: newBook.author}] });
  };

  render() {
    const { books } = this.state;
    const {addBook, removeBook} = this;
    return (
      <div>
        <h1> Books App React</h1>
        <BookList books = {books} removeBook={removeBook} />
        <BookForm addBook={addBook}/>
      </div>
    );  
  };
}

export default App;
