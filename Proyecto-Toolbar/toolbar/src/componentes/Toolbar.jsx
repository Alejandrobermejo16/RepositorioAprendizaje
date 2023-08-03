function Toolbar({mostrarDatos}) {


    return (

        <div className="toolbar">
            <button onClick={mostrarDatos}>Mostrar Datos Pelicula</button>
            <button>Menu1</button>
            <button>Menu1</button>
        </div>


    );
}

export default Toolbar;