import React, { Component } from 'react';
import './App.css';
import Pantalla from './componentes/Pantalla';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { nuevotexto: 'Valor Principal constructor hijo' };
  }
  cambiotexto = (event) => {
    this.setState({ nuevotexto: event.target.value }); //capturamos el texto y se lo pasamos a nuevotexto
  }

  render() {
    const textoboton = this.state.nuevotexto; //ponemos esta const ya que el padre no puede cambiar por si solo el estado de la prop que se ha definido ahi
    //como como constante todas las variables que vayamos a meter this.props

    
    return (
      <div className="App">
        <h3>Este es el valor de la prop</h3>
        <Pantalla texto={textoboton} /> {/*texto es la propiedad de arriba texto real definida aqui*/}
        <input type="text" placeholder='Introduce arriba el titulo' onChange={this.cambiotexto} /> {/*no se le puede llamar como prop porque sino no podria cambiar el estado*/}
      </div>
    );
  }
}

