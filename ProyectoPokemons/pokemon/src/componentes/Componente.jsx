import React, { Component } from "react";

class Llamada2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemonData: null,
      showAnimation: false,
      showRetryButton: false,
      isFirstClick: true,
    };
  }

  handleButtonClick = async () => {
    const nombrePokemon = [
      'charizard',
      'pikachu',
      'ditto',
      'fearow',
      'meowth',
      'blastoise',
      'persian',
    ];

    // Generar un índice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * nombrePokemon.length);

    // Obtener el nombre de Pokémon aleatorio usando el índice aleatorio
    const nombreAleatorio = nombrePokemon[indiceAleatorio];

    try {
      // Mostrar el fondo negro durante medio segundo en el segundo clic
      if (!this.state.isFirstClick) {
        this.setState({ showAnimation: false });
        await new Promise((resolve) => setTimeout(resolve, 500));
      }

      const respuesta = await fetch(`https://pokeapi.co/api/v2/pokemon/${nombreAleatorio}`);
      const datos = await respuesta.json();
      console.log(datos.name);

      this.setState({ pokemonData: datos, showAnimation: true, isFirstClick: false });

      // Agregamos un pequeño retraso para mostrar el botón de reintentar después de la animación
      setTimeout(() => {
        this.setState({ showRetryButton: true });
      }, 500);
    } catch (error) {
      console.error("Error al obtener datos:", error);
    }
  };

  handleRetryClick = async () => {
    this.setState({ showAnimation: false, showRetryButton: false, isFirstClick: true });
    await this.resetAnimation();
    this.handleButtonClick();
  };

  resetAnimation = async () => {
    this.setState({
      pokemonData: null,
    });
    await new Promise((resolve) => setTimeout(resolve, 1000));
  };

  render() {
    const { pokemonData, showAnimation, showRetryButton, isFirstClick } = this.state;

    return (
      <div className={`App ${showAnimation ? 'animate' : ''}`}>
        {showAnimation && pokemonData && !isFirstClick && (
          <h1 className={`result ${showAnimation ? 'active' : ''}`}>
            {pokemonData.name}
          </h1>
        )}
        {!showAnimation && !showRetryButton && (
          <button className="btn" onClick={this.handleButtonClick}>
            {isFirstClick ? "Pulsa para ver el pokemon" : "Pulsa para repetir"}
          </button>
        )}
        {showRetryButton && showAnimation && (
          <button className={`retry-btn ${showAnimation ? 'active' : ''}`} onClick={this.handleRetryClick}>
            Prueba de nuevo
          </button>
        )}
      </div>
    );
  }
}

export default Llamada2;
