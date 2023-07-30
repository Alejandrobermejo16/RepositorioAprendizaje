
import React, { useState } from "react";

const Llamada2 = () => {
  const [pokemonData, setPokemonData] = useState(null);

  const handleButtonClick = async () => {
    try {
      const Llamando_a_la_api = await fetch("https://pokeapi.co/api/v2/pokemon/charizard");
      const respuesta = await Llamando_a_la_api.json();
      setPokemonData(respuesta); // Actualizamos el estado con los datos del Pokémon
    } catch (error) {
      console.error("Error al obtener datos:", error);
    }
  };

  return (
    <div>
      <button className="btn" onClick={handleButtonClick}>
        LLamada2 nombre pokemon ya definido
      </button>
      {pokemonData && <h1>{pokemonData.name}</h1>}
    </div>
  );
};

export default Llamada2;


