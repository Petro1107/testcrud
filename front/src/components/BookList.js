import React from 'react';
import '../styles/BookList.css';

const BookList = ({ newBook, setNewBook, books, setListUpdated }) => {
  const handleDelete = (id) => {
    const requestInit = {
      method: 'DELETE',
    };
    fetch(`http://localhost:9000/api/${id}`, requestInit)
      .then((res) => res.text())
      .then((res) => console.log(res));

    setListUpdated(true);
  };

  let { title, Autor, edicion } = newBook;

  const handleUpdate = (id) => {
    edicion = parseInt(edicion, 10);

    if (title === '' || Autor === '' || edicion < 1) {
      alert('Todos los campos son obligatorios');
      return;
    }

    const requestInit = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newBook),
    };

    fetch(`http://localhost:9000/api/${id}`, requestInit)
      .then((res) => res.text())
      .then((res) => console.log(res));

    setNewBook({
      title: '',
      Autor: '',
      edicion: '',
    });

    setListUpdated(true);
  };

  return (
    <>
      <div className='listContainer'>
        <h2 className='listHeader'>Book List</h2>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Author</th>
              <th>Edition</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book) => (
              <tr key={book.id}>
                <td>{book.id}</td>
                <td>{book.title}</td>
                <td>{book.Autor}</td>
                <td>{book.edicion}</td>
                <td>
                  <button onClick={() => handleDelete(book.id)}>Delete</button>
                  <button onClick={() => handleUpdate(book.id)}>Update</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default BookList;
