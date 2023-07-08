import React, { Component } from 'react';
import Boton from './componentes/Boton';
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { nuevotexto: 'Valor Principal constructor hijo' };
  }
  cambiotexto = (event) => {
    this.setState({ nuevotexto: event.target.value }); //capturamos el texto y se lo pasamos a nuevotexto
  }

  render() {
    const textoreal = this.state.nuevotexto; //ponemos esta const ya que el padre no puede cambiar por si solo el estado de la prop que se ha definido ahi
    //como como constante todas las variables que vayamos a meter this.props

    
    return (
      <div className="App">
        <h3>Este es el componente</h3>
        <Boton texto={textoreal} /> {/*texto es la propiedad de arriba texto real definida aqui*/}
        <input type="text" placeholder='Introduce un texto' onChange={this.cambiotexto} /> {/*no se le puede llamar como prop porque sino no podria cambiar el estado*/}
      </div>
    );
  }
}

