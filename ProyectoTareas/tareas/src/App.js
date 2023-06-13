import './App.css';
import logo from './imagenes/logo-tarea.png';
import Tarea from './componentes/Tarea';
import './hojas-de-estilo/tarea.css';
import TareaFormulario from './componentes/TareaFormulario';
import ListaDeTareas from './componentes/ListaDeTareas';

function App() {
  return (
    <div className="aplicacion-tareas">
      <div className = 'logo-contenedor'>
        <img src={logo} className='logo-tarea' 
          />
      </div>
      <div className='tareas-lista-principal'>
        <h1>Mis Tareas</h1>
            <ListaDeTareas />
      </div>
    </div>
  );
}

export default App;
