import '../src/hojasdeestilo/App.css';
import PanelTiempo from './componentes/PanelTiempo';
import BarraNavegacion from './componentes/BarraNavegacion';
//import Formulario from './componentes/Formulario';  
//se quita por que se va a incluir el panel que estamos haciendo para incluirlo en el componente Panel

function App() {
  return (
    <div className="App">
      
    <BarraNavegacion />
      <PanelTiempo />
     
    </div>
  );
}

export default App;
