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
        if (valorInput1 && valorInput2) {
            if (valorInput1.length >= 7) {
                if (valorInput2.includes('@') === true) {
                    setMensajeAutorizado('¡Acceso Autorizado!');
                    setMostrarAutorizado(true);
                    setMensajeError(false);
                } else {
                    //sino sigue teniendo contenido por tanto es que el @ no está bien
                    setMensajeError('El correo necesita tener @');
                    setMostrarError(true);
                    setMostrarAutorizado(false);
                }
            } else {
                setMensajeError('Introduce un minimo de 7 caracteres');
                setMostrarError(true);
                setMostrarAutorizado(false);
            }
        } else {
            //y sino es porque algún campo no está relleno
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
