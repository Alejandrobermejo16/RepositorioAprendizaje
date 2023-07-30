import { useState } from "react";

function Paginacion(){


    
    const [paginaactual, setpaginaactual] = useState(0);
    const [objetosporpagina] = useState(4);

    function avanzar() {
      const nuevaPaginadelante = paginaactual + 1;
      setpaginaactual(nuevaPaginadelante);
      return nuevaPaginadelante;
    }
    function retroceder() {
        if( paginaactual > 0){
        const nuevaPaginaatras = paginaactual - 1;
        setpaginaactual(nuevaPaginaatras);
        return nuevaPaginaatras;
        }
      }


    

return (
    <div className="Paginacion">
      <button onClick={avanzar}>siguiente</button>
      <label>Página Actual: {paginaactual}</label>
      <button onClick={retroceder}>anterior</button>
    </div>
    
);

}

export default Paginacion;