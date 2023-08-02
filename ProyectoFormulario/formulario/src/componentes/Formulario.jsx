import '../estilos/style.css';
import { useState } from 'react';

function Formulario() {
    const [valorInput1, setValorInput1] = useState('');
    const [valorInput2, setValorInput2] = useState('');
    const [mostrarError, setMostrarError] = useState(false);
    const [mensajeError, setMensajeError] = useState('');
    const [mostrarAutorizado, setMostrarAutorizado] = useState(false);
    const [mensajeAutorizado, setMensajeAutorizado] = useState('');

    function validarValor(event) {
        const name = event.target.name;
        const value = event.target.value;

        if (name === 'campo1') {
            setValorInput1(value);
        } else if (name === 'campo2') {
            setValorInput2(value);
        }
    }

    function handleOnClick() {
        if (valorInput1 && valorInput2) {               //si existe contenido 
            if (valorInput1.length >= 7) {           //si el campo nombre supera 7 caracteres
                if (valorInput2.includes('@') === true) {       //si campo correo incluye @
                    setMensajeAutorizado('¡Acceso Autorizado!');
                    setMostrarAutorizado(true);
                    setMensajeError(false);
                } else {             //si no hay @ porque estoy dentro del if que comprueba el segundo campo
                    setMensajeError('El correo necesita tener @');
                    setMostrarError(true);
                    setMostrarAutorizado(false);
                }
            } else {                //else del if que comprueba la longitud de los caracteres
                setMensajeError('Introduce un minimo de 7 caracteres');
                setMostrarError(true);
                setMostrarAutorizado(false);
            }
        } else {
            // sino hay algun campo relleno
            setMensajeError('Por favor, rellena todos los campos');
            setMostrarError(true);
            setMostrarAutorizado(false);
        }
    }

    return (
        <div className="contenedor-formulario">
            <input
                onChange={validarValor}
                name="campo1"
                className="campo1"
                type="text"
            />
            <label>Introduce el nombre</label>
            <input
                onChange={validarValor}
                name="campo2"
                className="campo2"
                type="email"
            />
            <label>Introduce el correo</label>
            <button className='botonenvio' onClick={handleOnClick}>Enviar</button>

            {mostrarError && <p id="errorMensaje">{mensajeError}</p>}
            {mostrarAutorizado && <p id="autorizado">{mensajeAutorizado}</p>}
        </div>
    );
}

export default Formulario;
