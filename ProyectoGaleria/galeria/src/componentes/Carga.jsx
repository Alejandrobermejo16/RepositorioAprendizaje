import '../estilos/galeria.css';

const Carga = ({ textcarga, setImagenSeleccionada }) => {


    function activarInput (){
        const inputFile = document.querySelector(".file-input"); //devuelve el primer elemento que contenga la clase css que defino abajo
        inputFile.click(); //funcion js que simula que se selecciona el elemento 
       
    }

    function handleFileChange(event){
         const file = event.target.files[0];
          const reader = new FileReader();
            reader.onload = function(e){
          const contenido = e.target.result;
        setImagenSeleccionada(contenido);
       };
       reader.readAsDataURL(file);
    }
    
    return (


        <div>
            <button className="boton-carga" onClick={activarInput}>
                {textcarga}
                <input type="file" className="file-input" onChange={handleFileChange}/>
            </button>

            
        </div>
    );
};

export default Carga;