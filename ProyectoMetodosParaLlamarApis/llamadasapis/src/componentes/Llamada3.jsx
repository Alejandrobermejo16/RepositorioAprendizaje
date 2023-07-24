//explicadas PLANTILLAS DE CADENA EN  TXT (PARA ENTENDERLO CORRECTAMENTE)
//utilizamos cambios de estado dentro de la llamada a la api 
//para poderlo pasar a los elementos del dom 

import React, { useState } from "react";

const Llamada3 = () => {
  const [pokemonName, setPokemonName] = useState("");
  const [pokemonData, setPokemonData] = useState(null);

  const handleInputChange = (event) => {
    setPokemonName(event.target.value); //accede al valor actual de un elemento del dom que le indiquemos
     //en este caso seria el del input al lanzar el otro evento
  };

  const handleSearch = async () => {
    if (!pokemonName) return; // Evita hacer la búsqueda si el input está vacío

    try {
      const respuesta = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
      //sustituimos /nombredelpokemon por el nombre que se recoge del input y se lo pasamos despues de la barra a la url que solicitamos
      //y cambiamos "" por ``
      const datos = await respuesta.json();
      setPokemonData(datos);
    } catch (error) {
      console.error("Error al obtener datos:", error);
    }
  };

  return (
    <div>
      <input type="text" value={pokemonName} onChange={handleInputChange} />
      <button onClick={handleSearch}>Llamada3 muestra nombre y habilidades</button>

      {pokemonData && (
        <>
          <h1>{pokemonData.name}</h1>
          <p>Habilidades: {pokemonData.abilities.map(ability => ability.ability.name).join(", ")}</p>
           {/*se recorre el array de habilidades y devuelve el nombre de cada habilidad separado por comas*/}

          {/* Otra información que desees mostrar */}
        </>
      )}
    </div>
  );
};

export default Llamada3;
