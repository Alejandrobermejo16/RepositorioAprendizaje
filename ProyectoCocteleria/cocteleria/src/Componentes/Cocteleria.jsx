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

        <div className="cajabebidas">
          <img className="ginebra" src="https://www.decantalo.com/es/img/cms/ginebra.jpg" alt="botella de ginebra" />
          <img className="bourbon" src="https://media.tenor.com/trk0DqxlmVoAAAAC/bourbon-bourbon-in-a-scull-glass.gif" alt="Tbotella de bourbon" />
          <img className="bozka" src="https://www.la-martiniquaise.com/wp-content/uploads/2019/01/poliakov_banniere_lm_1380_790-1.jpg" alt="botella de bozka" />
        </div>
<p>No olvides desactivar coors en el navegador para obtener resultados</p>
        {nameCoctel.name ? (
          <div className="contenedor-respuesta">
            <h2>Nombre:</h2>
            <h1>{JSON.stringify(nameCoctel.name).replace(/["\[\]]/g, ' ')}</h1>
            <h2>Ingredientes:</h2>
            <ul>
              {nameCoctel.ingredients ? (
                <h1>{JSON.stringify(nameCoctel.ingredients).replace(/["\[\]]/g, ' ')}</h1>

              ) : (
                <li>No existen ingredientes</li>
              )}
            </ul>
            <h2>Instrucciones:</h2>
            <p>{JSON.stringify(nameCoctel.instructions).replace(/["\[\]]/g, ' ')}</p>
          </div>
        ) : (
          <p>No hay datos disponibles</p>
        )}

        <input
          className="inputCoctel"
          type="text"
          placeholder="Introduce el nombre del cóctel"
          value={this.state.nameCoctel}
          onChange={this.handleInputChange}
        />
        <button className="boton" onClick={this.handleFetchCoctel}>
          Buscar        </button>
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
