import React, { Component } from "react";

class Llamada2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
    pokemonData: null,
    showAnimation: false, // Estado para activar la animación
    showRetryButton: false, // Estado para mostrar el botón de reintentar
  };
}

handleButtonClick = async () => {
  try {
    const respuesta = await fetch("https://pokeapi.co/api/v2/pokemon/charizard");
    const datos = await respuesta.json();
    console.log(datos.name);

    this.setState({ pokemonData: datos, showAnimation: true }); // Activamos la animación

    // Agregamos un pequeño retraso para mostrar el botón de reintentar después de la animación
    setTimeout(() => {
      this.setState({ showRetryButton: true });
    }, 500); // Ajusta el valor del retraso según sea necesario
  } catch (error) {
    console.error("Error al obtener datos:", error);
  }
};

handleRetryClick = async () => {
  await this.resetAnimation(); // Reiniciar la animación
  setTimeout(() => {
    this.handleButtonClick();
  }, 10);
};

resetAnimation = async () => {
  this.setState({ showAnimation: false, pokemonData: null, showRetryButton: false });
  await new Promise((resolve) => setTimeout(resolve, 10)); // Esperar un corto tiempo para asegurarse de que el estado se haya actualizado
};

render() {
  const { pokemonData, showAnimation, showRetryButton } = this.state;

  return (
    <div className={`App ${showAnimation ? 'animate' : ''}`}>
      {pokemonData && (
        <h3 className={`result ${showAnimation ? 'active' : ''}`}>
          {pokemonData.name}
        </h3>
      )}
      {!showAnimation && !showRetryButton && (
        <button className="btn" onClick={this.handleButtonClick}>
          Pulsa para ver el pokemon
        </button>
      )}
      {showRetryButton && (
        <button className="retry-btn" onClick={this.handleRetryClick}>
          Prueba de nuevo
        </button>
      )}
    </div>
  );
}
}

export default Llamada2;


