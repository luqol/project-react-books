import { useState } from "react";
import { useDispatch } from "react-redux";
import { addBookRequest } from "../../redux/booksRedux";

const BookForm = () =>{
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = e =>{
        e.preventDefault();
        dispatch( addBookRequest({author, title}) );
        setTitle('');
        setAuthor('');
    };

  return(
    <form onSubmit={handleSubmit}>
        Author: <input type="text" value={title} onChange={e => setTitle(e.target.value)}/>
        Title: <input type="text" value={author} onChange={e => setAuthor(e.target.value)}/>
        <button>Add book</button>
    </form>
  );
};

export default BookForm;