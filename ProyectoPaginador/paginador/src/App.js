// App.js (o el componente padre que contiene tanto Paginacion como ComponenteB)
import React, { useState } from "react";
import Paginacion from "./componentes/Paginacion";
import Productos from "./componentes/Productos";

function App() {

  const [paginaactual, setpaginaactual] = useState(1);

  function avanzar() {
    setpaginaactual(paginaactual + 1);
  }
  function retroceder() {
      if( paginaactual > 1){
      setpaginaactual(paginaactual - 1);
      }
    }

  return (
    <div className="contenedor-App">
      <Productos 
       paginaactual={paginaactual}
       setpaginaactual={setpaginaactual}

      />
      <Paginacion 
       paginaactual={paginaactual}
       avanzar={avanzar}
       retroceder={retroceder}
      />
    </div>
  );
}

export default App;

