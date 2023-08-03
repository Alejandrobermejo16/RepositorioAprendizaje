import './App.css';
import Toolbar from './componentes/Toolbar';
import { useState } from 'react';
function App() {

  const [peliculas, setPeliculas] = useState({});

  async function mostrarDatos() {
    try {
      const apikey = "bba4ce55";
      const response = await fetch(`http://www.omdbapi.com/?apikey=${apikey}&t=los+increibles`);
      if (!response.ok) {
        throw new Error('Error al obtener los datos');
      }
      const data = await response.json();
      console.log(data);
      setPeliculas(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  

  return (
    <div className="App">
      <h1>Toolbar Con funcionalidad</h1>
      {Object.keys(peliculas).length !== 0 ? (
        <div className='muestracontenido'>
          {/* Utilizamos <pre/> para que se muestre exactamente con la letra que sale en el inspector */}
          {/*<pre>{JSON.stringify(peliculas)}</pre>*/}
          {/* En jsx si quieres mostrar un objeto completo has de convertirlo a json */}
          <p>{peliculas.Title}</p>
          {/* Sin embargo, en las propiedades de ese objeto accedes sin json */}
          <p>{peliculas.Year}</p>
          <p>{peliculas.Released}</p>
          {peliculas.Poster && <img src={peliculas.Poster} alt={peliculas.Title} />}
        </div>
      ) : null}
      <Toolbar mostrarDatos={mostrarDatos} />
    </div>
  );
  
    
  
}

export default App;
