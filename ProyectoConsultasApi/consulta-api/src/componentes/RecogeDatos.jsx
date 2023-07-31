import { Component } from "react";

export default class RecogeDatos extends Component{

    constructor (props){
        super(props);
        this.state = {cadena: ''}
    }

  render(){
 
    const url = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=5TRQrRdvyvUHOQvFlybby3j7l16uF5Hz"


    return(

        <h1> {url} </h1>
    );
  }
}