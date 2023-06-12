import './App.css';
import freeCodeCampLogo from './imagenes/logo.png';
import Boton from './componentes/Boton';
import './hojas-de-estilo/Boton.css';
import Contador from './componentes/Contador';
import './hojas-de-estilo/Contador.css';
import { useState } from 'react';



function App() {

const [numClics , setNumClics] = useState(0); //estadoActual

//tenemos el estado inicial de clics en 0
//al ejecutar nuestro evenlistener al que le pasamos 
//props num de clics
//mira el estado que tiene 
//y dependiendo de lo que pongamos en la funcion que maneja
//el estado, el mismo parsara a ser una cosa o la otra


  const manejarClic = () => {

    setNumClics(numClics + 1); //nuevo valor para asignar a numero de clics
    

  };

  const reinciarContador = () => {

    setNumClics(0); //setNumClics es la funcion que tiene
    //el estado  y ahora le damos otro distinto poniendo 0
    //en el numero de clics 

  };


  return (
    <div className="App">
      <div className='freecodecamp-logo-contenedor'>
        <img
          className='freecodecamp-logo'
          src={freeCodeCampLogo}
          alt='Logo de freeCodeCamp'
        />
      </div>
      <div className='contenedor-principal'>
        <Contador 
        className='contador'
         numClics={numClics}/>

        <Boton
          texto='Clic'
          esBotonDeClic={true}
          manejarClic={manejarClic}
        />
        <Boton
          texto='Reiniciar'
          esBotonDeClic={false}
          manejarClic={reinciarContador}
        />
      </div>
    </div>
  );
}

export default App;
