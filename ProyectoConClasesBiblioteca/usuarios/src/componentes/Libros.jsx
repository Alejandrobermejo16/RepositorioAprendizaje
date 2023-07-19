/*clave api AIzaSyARwQwqc8Ip_BKDtFzR24xLwcy3krJ0j5Y
el usuario que quiera consumir esta api podrá hacerlo siempre que ponga su clave pero no puedo dejar la mia dado que si se hacen muchas peticiones
podria llegar a costarme dinero*/

import React, { useState, useEffect } from 'react';

const Libros = ({ query }) => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    // Replace "YOUR_API_KEY" with your actual Google Books API key
    const API_KEY = 'tuapikey';
    const url = `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(query)}&key=${API_KEY}`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setBooks(data.items);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, [query]);

  return (
    <div>
      <h1>List of Books</h1>
      <ul>
        {books.map((book) => (
          <li key={book.id}>{book.volumeInfo.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Libros;
