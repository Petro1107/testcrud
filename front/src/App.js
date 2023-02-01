//Hooks

import { useEffect, useState } from 'react';

//Components
import Navbar from './components/Navbar';
import BookList from './components/BookList';
import BookForm from './components/BookForm';

//Styles
import './styles/App.css';

function App() {
  const [newBook, setNewBook] = useState({
    title: '',
    Autor: '',
    edicion: 0,
  });
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch('http://localhost:9000/api')
      .then((res) => res.json())
      .then((res) => setBooks(res));

    //Anteriormente esto estaba dentro de la funcion getBooks, la cual
    //eliminé porque se está generando un loop infinito de peticiones.
    //Tengo que tratar de arreglarlo.
    // getBooks();
  }, []);

  return (
    <>
      <Navbar />

      <div className='pageContent'>
        <BookList books={books} />
        <BookForm newBook={newBook} setNewBook={setNewBook} />
      </div>
    </>
  );
}

export default App;
