import React, { Component } from 'react';

class Boton extends Component {
  
  constructor (props){
    super(props);
     this.state = {  //estado inicial antes de mostrarse en el DOM
      texto: '',
    };
     console.log(this.state.texto,"soy constructor del padre, antes de pintar ");
      //aqui da igual poner algo que no , porque no se va a reenderizar
    }

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


