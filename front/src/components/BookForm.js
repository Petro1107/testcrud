import React from 'react';

import '../styles/BookForm.css';

const BookForm = ({ newBook, setNewBook, setListUpdated }) => {
  const handleChange = (e) => {
    setNewBook({
      ...newBook,
      [e.target.name]: e.target.value,
    });
  };

  let { title, Autor, edicion } = newBook;

  const handleSubmit = (e) => {
    e.preventDefault();

    //validación de datos
    // edicion = parseInt(edicion, 10);

    if (title === '' || Autor === '' || edicion < 1) {
      alert('Todos los campos deben estar completados');
      return;
    }

    //consulta
    const requestInit = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newBook),
    };
    fetch('http://localhost:9000/api', requestInit)
      .then((res) => res.json())
      .then((res) => console.log(res));

    //Reinicio del estado del libro
    setNewBook({
      title: '',
      Autor: '',
      edicion: 0,
    });

    setListUpdated(true);
  };

  return (
    <>
      <div className='formContainer'>
        <h2 className='formHeader'>Book Form</h2>
        <form onSubmit={handleSubmit}>
          <div className='dataInput'>
            <label htmlFor='title'>Title</label>
            <input
              value={title}
              name='title'
              onChange={handleChange}
              type='text'
              id='title'
              className='formControl'
            />
          </div>
          <div className='dataInput'>
            <label htmlFor='autor'>Author</label>
            <input
              value={Autor}
              name='Autor'
              onChange={handleChange}
              type='text'
              id='Autor'
              className='formControl'
            />
          </div>
          <div className='dataInput'>
            <label htmlFor='edicion'>Edition</label>
            <input
              value={edicion}
              name='edicion'
              onChange={handleChange}
              type='number'
              id='edicion'
              className='formControl'
            />
          </div>
          <button type='submit'>Submit</button>
        </form>
      </div>
    </>
  );
};

export default BookForm;
