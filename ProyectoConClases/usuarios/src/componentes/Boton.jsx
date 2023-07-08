import React, { Component } from 'react';

class Boton extends Component {
  //para que voy a hacer un constructor? si no voy a dar valor a ninguna variable
  render() {

       const {texto} = this.props; 
       //para poder utilizar la prop sin referenciar this.props en el return

    return (

              <button>{texto}</button>  
              //definimos una prop que estará en un estado inicial '' y definiremos cuando llamemos al componente en un hijo
              //pero este que es el padre , no tocara el estado inicial porque permanece inmutable 
    );
  }
 }

export default Boton;


