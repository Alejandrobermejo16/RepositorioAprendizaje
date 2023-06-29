import './App.css';
import Carga from './componentes/Carga';
import Filtro from './componentes/Filtro';
import Galeria from './componentes/Galeria';

function App() {
  return (
    <div className="App">
      <Filtro />
      <Galeria />
     
      <Carga 
         textcarga={"Selecciona un archivo"}
      />
     
    </div>
  );
}

export default App;
