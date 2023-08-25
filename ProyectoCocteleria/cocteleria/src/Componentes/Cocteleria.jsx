import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchCoctelNameStart } from "../Store/actions/actions";


class Cocteleria extends Component {
  state = {
    nameCoctel: "", // Aquí almacenaremos el valor del input
  };

  handleInputChange = (event) => {
    this.setState({ nameCoctel: event.target.value });
    console.log("obtenemos input",this.state.nameCoctel);
  };

  handleFetchCoctel = () => {
    const { nameCoctel } = this.state;
    // Llama a tu acción pasando el valor del input
    this.props.fetchCoctelNameStartAction(nameCoctel);
    console.log("enviamos nombre",nameCoctel);
  };

  render() {
    console.log("en el componente", this.props.nameCoctel , this.state.name );
    return (
      <div>
        <input  
          className="inputCoctel"
          type="text"
          placeholder="Introduce el nombre del cóctel"
          value={this.state.nameCoctel}
          onChange={this.handleInputChange}
        />
        <button className='boton' onClick={this.handleFetchCoctel}>Fetch Coctel Name</button>
        <div>
  
    <div key={this.props.nameCoctel.name}>
      <h1>{this.props.nameCoctel.name}</h1>
      <h1>Ingredients:</h1>
      <ul>
       
        
      </ul>
    </div>
  
    <p>No data available.</p>

</div>

      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    loading: state.loading,
    nameCoctel: state.nameCoctel,
    error: state.error, };
};

const mapDispatchToProps = (dispatch) => ({
  fetchCoctelNameStartAction: (nameCoctel) =>
    dispatch(fetchCoctelNameStart(nameCoctel)),
});

//si quisiera añadir un console.log para ver si se despacha la accion
/**/

export default connect(mapStateToProps, mapDispatchToProps)(Cocteleria);




//falta por llevarme desde mapstatetoprops el nombre que recibo de la api a mi componente
