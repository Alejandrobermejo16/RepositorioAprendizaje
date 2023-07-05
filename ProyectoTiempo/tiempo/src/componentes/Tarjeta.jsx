import React from "react";
import Spinner from "./Spinner";
import '../hojasdeestilo/App.css'

const Tarjeta = ({ loadingData, showData, tiempo, forecast }) => {

//para obtener la fecha de hoy
var hoy = new Date();
var dia = hoy.getDate();
var mes = hoy.getMonth() + 1; //se le suma 1 porque empieza en 0
var año = hoy.getFullYear(); 
//todo junto 
var fecha = dia + '/' + mes + '/' + año;

var url = "";
var iconUrl = "";

    if (loadingData) {   //si esta buscando el dato carga el spinner sino ya sale el return de la tarjeta
        //es decir, el spinner solo sale cuando esta vacia la tarjeta buscando el dato
        return <Spinner />;
    }

    if (showData){  //Elegimos cuando se muestran los datos por que sino puede darnos fallo
      url = "http://openweathermap.org/img/w/" //url del icono de la api
      iconUrl = url + tiempo.weather[0].icon + ".png"; //weather porque en la api viene de weather
    }

    return (

        <div className="mt-5">

            {/*si hay datos muestrame la tarjeta , sino los hay muestra un texto */}
            {
                showData === true ? (
                    <div className="container">
                        <div className="tarjeta mb-3 mx-auto bg-dark text-light">
                            <div>

                                {/*establecemos una fila por que sale la imagen a la derecha y a la izq texto*/}

                                <div className="row g-0">
                                    <div className="col-md-4">
                                        <h3 className="tarjeta-titulo"> {tiempo.name} </h3> {/* como la api devuelve nombre , y esta en la variable tiempo, se le pasa a la tarjeta el nombre que proviene de la api*/}
                                            <p className="tarjeta-fecha">{fecha} </p> {/*Definido arriba*/}
                                               <h1 className="tarjeta-temperatura">{(tiempo.main.temp - 273.15).toFixed(1)}ºC</h1>
                                       <p className="tarjeta-descripcion"><img src={iconUrl} alt="icon"/>{tiempo.weather[0].description} </p>
                                        <img src="https://images.pexels.com/photos/1980720/pexels-photo-1980720.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="img-fluid rounded-start" alt=" Tarejta con datos sobre ciudad" /> 
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body text-start mt-2">
                                            <h5 className="card-text">Temperatura maxima: {(tiempo.main.temp_max - 273.15).toFixed(1)}Cº </h5>
                                            <h5 className="card-text">Temperatura minima: {(tiempo.main.temp_min - 273.15).toFixed(1)}Cº </h5>
                                            <h5 className="card-text">Sensacion Termica: {(tiempo.main.feels_like - 273.15).toFixed(1)}Cº </h5>


                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                ) : (
                    <h2 className="text-light">No hay datos disponibles </h2>
                )
            }

        </div>


    );
}

export default Tarjeta;