import React from "react";
import '../estilos/galeria.css';

const Galeria = ({ imagenSeleccionada }) => {

    
    return (
        
            <div className="claseGaleria">

                {imagenSeleccionada && <img src={imagenSeleccionada} alt="Imagen seleccionada" className="imagen-galeria" />}


            </div>
           
        
    );
};

export default Galeria;

//creamos una prop text sin valor alguno que luego al llamar a este componente podremos definir con el valor que queramos