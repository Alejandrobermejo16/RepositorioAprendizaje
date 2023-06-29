import { useState } from 'react';
import './App.css';
import Carga from './componentes/Carga';
import Filtro from './componentes/Filtro';
import Galeria from './componentes/Galeria';

function App() {

  const [imagenSeleccionada, setImagenSeleccionada] = useState(null);

  return (
    <div className="App">
      <Filtro />
      
      <Galeria imagenSeleccionada={imagenSeleccionada}/>
      <Carga 
         setImagenSeleccionada={setImagenSeleccionada}
         textcarga={"Selecciona un archivo"}
      />
    </div>
  );
}

export default App;
