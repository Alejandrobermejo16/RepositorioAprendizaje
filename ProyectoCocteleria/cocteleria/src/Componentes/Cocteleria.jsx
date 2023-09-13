import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchCoctelNameStart } from "../Store/actions/actions";

class Cocteleria extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nameCoctel: "", // Aquí almacenaremos el valor del input
    };
  }

  handleInputChange = (event) => {
    this.setState({ nameCoctel: event.target.value });
  };

  handleFetchCoctel = () => {
    const { nameCoctel } = this.state;
    // Llama a tu acción pasando el valor del input
    this.props.fetchCoctelNameStartAction(nameCoctel);
  };

  componentDidUpdate(prevProps) {
    if (prevProps.nameCoctel !== this.props.nameCoctel) {
      console.log("Datos actualizados:", this.props.nameCoctel);
    }
  }

  render() {

    const { loading, nameCoctel, error } = this.props;

    return (
      <div>

<h1>{JSON.stringify(nameCoctel.ingredients)}</h1>

        {nameCoctel.name ? (
          <div>
            <h1>{JSON.stringify(nameCoctel.name)}</h1>
            <h2>Ingredients:</h2>
            <ul>
              {nameCoctel.ingredients ? (
            <h1>{JSON.stringify(nameCoctel.ingredients)}</h1>

              ) : (
                <li>No ingredients available</li>
              )}
            </ul>
            <h2>Instructions:</h2>
            <p>{JSON.stringify(nameCoctel.instructions)}</p>
          </div>
        ) : (
          <p>No data available</p>
        )}

        <input
          className="inputCoctel"
          type="text"
          placeholder="Introduce el nombre del cóctel"
          value={this.state.nameCoctel}
          onChange={this.handleInputChange}
        />
        <button className="boton" onClick={this.handleFetchCoctel}>
          Fetch Coctel Name
        </button>
        {/* <div>
          <p>nameCoctel: {nameCoctel}</p>
          <p>error: {error ? error.message : 'Ningún error'}</p>
        </div> */}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.coctel.loading,
    nameCoctel: state.coctel.nameCoctel,
    error: state.coctel.error,
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchCoctelNameStartAction: (nameCoctel) =>
    dispatch(fetchCoctelNameStart(nameCoctel)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cocteleria);
