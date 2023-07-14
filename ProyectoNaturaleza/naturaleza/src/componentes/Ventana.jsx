import React from "react";
import '../estilos/App.css'
import Navegador from "./Navegador";
import BarraBusqueda from "./BarraBusqueda";
import Tarjeta from "./Tarjeta";
const Ventana = () =>{


    return(

   <div className='contenedor-principal-ventana' >
       
       <Navegador/>
       <BarraBusqueda />
       <Tarjeta />
   </div>

    );
}

export default Ventana;