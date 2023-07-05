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

//para obtener la llamada al icono
var url = "";
var iconUrl = "";
//la api muestra los resultados cada 3 horas
var iconUrl3 = "";
var iconUrl6 = "";
var iconUrl9 = "";


var forecastfecha3 = ""; //la fecha de 3/6/9 horas despues
var forecastfecha6 = "";
var forecastfecha9 = "";


    if (loadingData) {   //si esta buscando el dato carga el spinner sino ya sale el return de la tarjeta
        //es decir, el spinner solo sale cuando esta vacia la tarjeta buscando el dato
        return <Spinner />;
    }

    if (showData){  //Elegimos cuando se muestran los datos por que sino puede darnos fallo
      
        url = "http://openweathermap.org/img/w/" //url del icono de la api
      
        iconUrl = url + tiempo.weather[0].icon + ".png"; //weather porque en la api viene de weather
      
      iconUrl3 = url + forecast.list[1].weather[0].icon + ".png"; //queremos poner el tiempo de las proximas horas
      iconUrl6 = url + forecast.list[2].weather[0].icon + ".png";
      iconUrl9 = url + forecast.list[3].weather[0].icon + ".png";

      forecastfecha3 = forecast.list[1].dt_txt.substring(8, 10) + '/' + forecast.list[1].dt_txt.substring(5, 7) + '/' +  forecast.list[1].dt_txt.substring(0, 4) + ' ' + forecast.list[1].dt_txt.substring(11, 13);
      forecastfecha6 = forecast.list[2].dt_txt.substring(8, 10) + '/' + forecast.list[2].dt_txt.substring(5, 7) + '/' +  forecast.list[2].dt_txt.substring(0, 4) + ' ' + forecast.list[2].dt_txt.substring(11, 13);
      forecastfecha9 = forecast.list[3].dt_txt.substring(8, 10) + '/' + forecast.list[3].dt_txt.substring(5, 7) + '/' +  forecast.list[3].dt_txt.substring(0, 4) + ' ' + forecast.list[3].dt_txt.substring(11, 13);


      //obtenemos con la funcion los caracteres , en este caso la hora el mes y el dia y los dos caracteres de la hora 

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
                                                               {/*Se le restan los grados farenheit */}
                                            <h5 className="card-text">Temperatura maxima: {(tiempo.main.temp_max - 273.15).toFixed(1)}Cº </h5>
                                            <h5 className="card-text">Temperatura minima: {(tiempo.main.temp_min - 273.15).toFixed(1)}Cº </h5>
                                            <h5 className="card-text">Sensacion Termica: {(tiempo.main.feels_like - 273.15).toFixed(1)}Cº </h5>
                                            <h5 className="card-text"> Humedad : {tiempo.main.humidity}% </h5>
                                            <h5 className="card-text"> Velocidad del viento : {tiempo.wind.speed}m/s </h5>
                                            <hr/>

                                                <div className="row mt-4">

                                                <div className="col"> {/*para la fecha*/}
                                                 <p>{forecastfecha3}h</p>
                                                 <p className="description"><img src={iconUrl3} alt="icon" />{forecast.list[1].weather[0].description} </p>
                                                 <p className="temp"> {(forecast.list[1].main.temp -273.15).toFixed(1)}ºC </p>
                                                </div>
                                                <div className="col">
                                                <p>{forecastfecha6}h</p>
                                                 <p className="description"><img src={iconUrl6} alt="icon" />{forecast.list[2].weather[0].description} </p>
                                                 <p className="temp"> {(forecast.list[2].main.temp -273.15).toFixed(1)}ºC </p>

                                                </div>
                                                <div className="col">
                                                <p>{forecastfecha9}h</p>
                                                 <p className="description"><img src={iconUrl9} alt="icon" />{forecast.list[3].weather[0].description} </p>
                                                 <p className="temp"> {(forecast.list[3].main.temp -273.15).toFixed(1)}ºC </p>
                                                </div>



                                                </div>
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