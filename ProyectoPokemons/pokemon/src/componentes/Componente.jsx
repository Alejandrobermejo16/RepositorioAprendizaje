import React, { Component } from "react";

class Llamada2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemonData: null,
    };
  }

  handleButtonClick = async () => {
    try {
      const respuesta = await fetch("https://pokeapi.co/api/v2/pokemon/charizard");
      const datos = await respuesta.json();
      console.log(datos.name);

      this.setState({ pokemonData: datos }); // Actualizamos el estado con los datos del Pokémon
    } catch (error) {
      console.error("Error al obtener datos:", error);
    }
  };

  render() {
    const { pokemonData } = this.state;
    
    return (
      <div>
        <button className="btn" onClick={this.handleButtonClick}>
             Pulsa para ver llamada de la api         
        </button>
        {pokemonData && <h1>{pokemonData.name}</h1>}
      </div>
    );
  }
}

export default Llamada2;
