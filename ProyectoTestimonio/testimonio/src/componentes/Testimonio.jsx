import React from 'react';

 export function Testimonio(props) {
  return(
    
    <div className='contenedor-testimonio'>
      <img className='imagen-testimonio'
      src={require(`../imagenes/testimonio-${props.imagen}.png`)}
      alt='Imagen de fondo de persona'
      />
      <div className='contenedor-texto-textimonio'>
        <p className='nombre-testimonio'>
          <strong>{props.nombre}</strong> en {props.pais}</p>
        <p className='cargo-testimonio'>{props.cargo} en 
        <strong>{props.empresa}</strong> </p>
        <p className='texto-testimonio'>"{props.testimonio}"</p>
      </div>

    </div>
  );  
}

