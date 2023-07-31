import './App.css';
import Boton from './componentes/Boton';
import Logo from './imagenes/imagen-logo.png';
import './hojas-de-estilo/Boton.css';
import Pantalla from './componentes/Pantalla';
import './hojas-de-estilo/pantalla.css';
import BotonClear from './componentes/BotonClear';
import './hojas-de-estilo/botonclear.css'
import { useState } from 'react';
import {evaluate} from 'mathjs';  //instalar si da fallo de forma manual 
                                  //npm install mathjs

function App() {

  const [input , setInput ] = useState('');

  const agregarInput = val => {
     setInput(input + val);
  };

  const calcularResultado = () => {
    
    if(input){ //si la cadena de caracteres es true
      setInput(evaluate(input));  
    }else{
      alert("Por favor ingresa algun valor");
    }
    
  };

  return (
    <div className='App'>

      <div className='freecodecamp-Logo-contenedor' >

        <img
          src={Logo}
          className='freecodecamp-logo'
          alt='Logo de Aplicacion'
        />

        <div className='contenedor-calculadora'>
          <Pantalla input={input}/>
          <div className='Fila'>
            <Boton manejarClic= {agregarInput}>1</Boton>
            <Boton manejarClic= {agregarInput}>2</Boton>
            <Boton manejarClic= {agregarInput}>3</Boton>
            <Boton manejarClic= {agregarInput}>+</Boton>
          </div>
          <div className='Fila'>
            <Boton manejarClic= {agregarInput}>4</Boton>
            <Boton manejarClic= {agregarInput}>5</Boton>
            <Boton manejarClic= {agregarInput}>6</Boton>
            <Boton manejarClic= {agregarInput}>-</Boton>
          </div>
          <div className='Fila'>
            <Boton manejarClic= {agregarInput}>7</Boton>
            <Boton manejarClic= {agregarInput}>8</Boton>
            <Boton manejarClic= {agregarInput}>9</Boton>
            <Boton manejarClic= {agregarInput}>*</Boton>
          </div>
          <div className='Fila'>
            <Boton manejarClic= {calcularResultado}>=</Boton>
            <Boton manejarClic= {agregarInput}>0</Boton>
            <Boton manejarClic= {agregarInput}>.</Boton>
            <Boton manejarClic= {agregarInput}>/</Boton>
          </div>
          <div className='Fila'>
            <BotonClear manejarClear= {() => setInput('')}>
              Clear
            </BotonClear>
          </div>

        </div>

      </div>

    </div>
  );
}

export default App;
