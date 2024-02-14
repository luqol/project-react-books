import React from "react";

class BookForm extends React.Component{ 

  state = {
    title: '',
    author: '',
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addBook({title: this.state.title, author: this.state.author});
    this.setState({ ...this.state, title: '', author: ''});

  };

  setTitle = value => {
    this.setState({...this.state, title: value});
  };

  setAuthor = value => {
    this.setState({...this.state, author: value});
  };



 render() {
    const {title, author} = this.state;
    const {handleSubmit, setAuthor, setTitle} = this;
    return(
      <form onSubmit={handleSubmit}>
        Author: <input type="text" value={title} onChange={e => setTitle(e.target.value)}/>
        Title: <input type="text" value={author} onChange={e => setAuthor(e.target.value)}/>
        <button>Add book</button>
        </form>
      );
  };

}

export default BookForm;