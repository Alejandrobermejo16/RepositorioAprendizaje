//pagina de la que obtenemos la clase ya hecha de spinners
//spinners.io/css y pulsamos sobre el elemento que queramos para poder ver su html/css
//utilizaremos este componente dentro de la tarjeta

import React from "react";
import '../hojasdeestilo/Spinner.css';

const Spinner = () => {

 return(

    <div className="lds-ripple"><div></div><div></div></div>

 );

}

export default Spinner;