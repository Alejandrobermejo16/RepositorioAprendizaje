import React, { Component } from 'react';
import Libros from './Libros';
import BarraBusqueda from './BarraBusqueda';


class Pantalla extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: 'El Quijote', // Inicializar con un valor predeterminado
    };
  }

  handleBuscar = (query) => {
    this.setState({ query }); //en vez de llamar por el nombre de valor ficticio 
    //que es funcionqueusoenelhijoonBuscar le doy el nombre de funcion que corresponde
  };

  render() {
    const { texto } = this.props;
    const { query } = this.state;

    return (
      <div>
        <button>{texto}</button>
        <Libros query={query} />
        <BarraBusqueda onBuscarParaHijo={this.handleBuscar} />
      </div>
    );
  }
}

export default Pantalla;
