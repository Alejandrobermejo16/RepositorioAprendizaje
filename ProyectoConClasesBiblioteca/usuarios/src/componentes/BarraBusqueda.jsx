import React, { useState } from 'react';

const BarraBusqueda = ({ onBuscarParaHijo }) => {
    //para poder acceder a la prop por su nombre la pasamos desestructurandola y no tener que poner this.props.onBuscar
  const [query, setQuery] = useState('');

  const handleChange = (event) => {
    setQuery(event.target.value);
    // Esta función se ejecuta cuando el usuario escribe algo en la entrada de búsqueda. 
  };

  const handleBuscar = () => {
    onBuscarParaHijo(query); // se lo pasamos como prop al hijo indicandole que es una funcion que toma el estado de query
  };

  return (
    <div>
      <input type="text" value={query} onChange={handleChange} /> {/*entrada de texto*/}
      <button onClick={handleBuscar}>Buscar</button>  {/*Boton de buscar*/}
    </div>
  );
};

export default BarraBusqueda;
