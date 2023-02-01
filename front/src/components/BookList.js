import React from 'react';
import '../styles/BookList.css';

const BookList = ({ books }) => {
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
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default BookList;
