import React, {useState} from "react";
import Formulario from "./Formulario";

const PanelTiempo = () => {

 let urlTiempo = "https://api.openweathermap.org/data/2.5/weather?appid=2aab49c8f019d57ea55548b20203fc4b&lang=es";
 //lleva la url de la api, nuestra apikey en appid y la lengua que hemos puesto español
 let ciudadUrl = "&q="
 //en esta segunda variable tenemos la ciudad
 let urlForecast = "https://api.openweathermap.org/data/2.5/forecast?appid=2aab49c8f019d57ea55548b20203fc4b&lang=es";
  //lleva las siguientes horas

  const [tiempo, setTiempo] = useState([]);  //Cambiar el estado del tiempo 

  const [forecast, setForecast] = useState([]); //Cambiar estado de las horas

  const [loading, setLoading] = useState(false); //para visualizar un sppiner cargando para saber que está trabajando

  const [show, setShow] = useState(false); //Para visualizar la tarjeta con la informacion

  const [location, setLocation ] = useState(""); //este va a ser el texto de la ciudad
 
  
  
  // 1 funcion llamada api + recoge localicacion(ciudad)
  const getLocation = async(loc) => {

    setLoading(true); //al ejecutarse la funcion el spinner se pone en true
    setLocation(loc); //modificamos la ciudad pasandole por parametro la ciudad
    
    //y ahora vamos a obtener el tiempo real haciendo la llamada a la api weather y pasandole como valor a la variable urlTiempo
    //La url en si, la ciudad y la localizacion (es como hacer weather? &q pero con valores ya reales)
    urlTiempo = urlTiempo + ciudadUrl + loc; 

   //se hace la llamada a la api pasandole la url con los valores y la promesa 
   await fetch(urlTiempo).then((response) =>{

    if(!response.ok) throw {response}  //si la respuesta NO es valida devuelve un error con la respuesta
     return response.json();   //devuelve la respuesta en formato json para ser procesada
   }).then((weatherData) =>  {       //si la respuesta es valida procesamos la info en un parametro que llamamos weatherData

    console.log(weatherData); //para verlo en consola
    setTiempo(weatherData); //metemos en el array vacio de la funcion setTiempo el parametro que llevará todos los datos 


  }).catch(error => {  //capturamos el error
    console.log(error);
    setLoading(false); //hacemos que deje de cargar el spinner
    setShow(false); //lo ponemos para que si hay un error no se muestre nada(la tarjeta)
  });

  //2 funcion para las horas proximas
  //lo primero es dar valor a la urlForecast que llevará consigo el dato obtenido de UrlTiempo, ciudadUrl y la localizacion
  urlForecast = urlForecast + ciudadUrl + loc;

  await fetch(urlForecast).then((response) =>{ //url de forecast

    if(!response.ok) throw{response}  //si la respuesta NO es valida devuelve un error con la respuesta
     return response.json();   //devuelve la respuesta en formato json para ser procesada
   }).then((ForecastData) =>  {       //si la respuesta es valida procesamos la info en un parametro que llamamos ForecastData

    console.log(ForecastData); //para verlo en consola
    setForecast(ForecastData); //metemos en el array vacio de la funcion setForecast el parametro que llevará todos los datos 
    setLoading(false); //pasamos a false la carga para que no se visualice
    setShow(true); //para que se visualice la tarjeta con toda la informacion

  }).catch(error => {  //capturamos el error
    console.log(error);
    setLoading(false); //hacemos que deje de cargar el spinner
    setShow(false); //lo ponemos para que si hay un error no se muestre nada(la tarjeta)

  });

}

return(
    //aqui se visualiza la informacion ,el formulario
    <React.Fragment>

      <Formulario 
        //para poder coger la informacion correctamente se la vamos a pasar en el prop
        newLocation = {getLocation}  //obtenermos la funcion que contiene la localizacion, definida en linea 26
        //le pasamos esta prop al componente formulario

      />

    </React.Fragment>
);

}

export default PanelTiempo;