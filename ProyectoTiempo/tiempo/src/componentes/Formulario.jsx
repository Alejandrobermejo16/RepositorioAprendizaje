
import React, { useState } from 'react';

const Formulario = ({newLocation}) => { //propiedad que se obtiene del componente PanelTiempo

    const [city, setCity] = useState("");

   const onSubmit = (e) =>{
       e.preventDefault(); //así evitamos que se recargue la pagina
       console.log({city});  //la ciudad la rescatamos del estado de la prop city que cambiara con la funcion que tenemos en nuestro hook
       if( city === "" || !city) return; //lo dejamos así para indicar un mensaje si la ciudad está vacía 

       newLocation(city); //llamamos a la prop que viene de PanelTiempo y le pasamos la ciudad para que pueda saberla en el campo de entrada que se pasa a la llamada a la api
   }

    return (

        <div className="container">

            <form onSubmit={onSubmit}>
                <div className="input-group mb3 mx-auto" >

                <input type="text" className="form-control" placeholder="Ciudad" onChange={(e) => setCity(e.target.value)} />
                <button className="btn btn-primary input-group-text" type="submit">Buscar</button>

        </div>
        </form>
    </div >

 );
}

export default Formulario;