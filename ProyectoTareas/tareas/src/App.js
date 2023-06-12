import './App.css';
import logo from './imagenes/logo-tarea.png';
import Tarea from './componentes/Tarea';
import './hojas-de-estilo/tarea.css';

function App() {
  return (
    <div className="aplicacion-tareas">
      <div className = 'logo-contenedor'>
        <img src={logo} className='logo-tarea' 
          />
      </div>
      <div className='tareas-lista-principal'>
        <h1>Mis Tareas</h1>
            <Tarea texto='Aprender React'></Tarea>
      </div>
    </div>
  );
}

export default App;
