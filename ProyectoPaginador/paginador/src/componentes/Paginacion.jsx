import { useState } from "react";
import App from "../App";

function Paginacion({paginaactual, avanzar, retroceder}){
    
  

return (
    <div className="Paginacion">
      <button onClick={avanzar}>siguiente</button>
      <label>Página Actual: {paginaactual}</label>
      <button onClick={retroceder}>anterior</button>
    </div>
    
);

}

export default Paginacion;