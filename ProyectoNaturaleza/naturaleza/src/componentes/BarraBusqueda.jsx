import React, { useState } from "react";

const BarraBusqueda = () =>{
    let urlAnimal = "https://images.dog.ceo/breeds/sabueso-ibicenco";
    const [raza,setAnimal] = useState("");

    const onSubmit = (e) => {
        e.preventdefault();
        console.log({raza});

    }

    
    return(

    <div className="barra-busqueda">
        <input type="text" placeholder="A falta de llamar a la api correspondiente"  />
        {/*<input type="text" placeholder="Pulsa en Aleatorio" onChange={(e) =>setAnimal{e.target.value}} />*/}
        <button type="submit" onClick={onSubmit}>Aleatorio</button>
    </div>

        );
}

export default BarraBusqueda;