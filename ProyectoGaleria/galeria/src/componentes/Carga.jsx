import '../estilos/galeria.css';

const Carga = ({ textcarga, setImagenSeleccionada }) => {


    function activarInput (){
        const inputFile = document.querySelector(".file-input"); //devuelve el primer elemento que contenga la clase css que defino abajo
        inputFile.click(); //funcion js que simula que se selecciona el elemento 
       
    }

    //funcion para obtener la imagen que seleccionamos en el input del componente
    function handleFileChange(event){
         const file = event.target.files[0];  //obtenemos el primer [0] archivo seleccionado en una constante
          const reader = new FileReader();   //Permite leer el contenido del archivo
            reader.onload = function(e){      //cuando se complete la lectura del archivo, se llevará acabo la funcion seleccionada
          const contenido = e.target.result;  //Se obtiene el resultado de la lectura del archivo
        setImagenSeleccionada(contenido);     //se llama a la funcion pasandole por parametro el archivo leido
       };
       reader.readAsDataURL(file);     //Se lee el contenido del archivo como una URL de datos, esto permite obtener una representacion base64 del archivo
       //que se puede utilizar para mostrar la imagen en la interfaz de usuario, por ejemplo
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