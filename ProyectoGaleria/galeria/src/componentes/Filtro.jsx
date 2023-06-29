import '../estilos/galeria.css';
const Filtro = ({textcarga,show}) => {

    
    return (
        
            <nav className="filtro">
                <button className="boton-menu">Menu</button>
                <button className="boton-menu">Ajustes</button>
                <button className="boton-menu">Ayuda</button>
            </nav>
        
    );
};

export default Filtro;