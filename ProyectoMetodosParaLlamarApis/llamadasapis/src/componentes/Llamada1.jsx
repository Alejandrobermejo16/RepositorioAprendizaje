//ponemos lo basico para entender como se hace una llamada a la api
import React from "react";


const Llamada1 = () => {
    const llamarApi = () => {
      return fetch("https://pokeapi.co/api/v2/pokemon/charizard")       //hacemos la llamada a la api y a un objeto en cuestion
        .then(respuesta => respuesta.json()); //convertimos la respuesta en json para que sea legible
    }
  
    llamarApi()  //llamamos al metodo y le ponemos then para que espere hasta que carguen los datos
               //y mostramos por pantalla los datos completos, pero se puede llamar a cualquier dato del array
               //para futuramente mostrarlo en cualquier elemento del dom pj datos.name
      .then(datos => console.log("nombre del pokemon",datos.name,"objeto completo a la derecha",datos))
      //en caso de dar un error la peticion de datos sacara el error por consola
      .catch(error => console.error("Error al obtener datos:", error));
  }

  
  
  export default Llamada1;



  