import { useEffect, useState } from "react";
import App from "../App";
import '../estilos/style.css';

function Productos({ paginaactual }) {
  const [productos, setProductos] = useState([]);
  const [productoPorPagina, setProductoPorPagina] = useState(2);   //productos que se van a mostrar por pagina
  const [totalProductos, setTotalProductos] = useState(0);  //total de los productos que luego recoge todos los que hay en la llamada a la api

  const ListaProductos = async () => {
    const startIndex = (paginaactual - 1) * productoPorPagina;
    const endIndex = startIndex + productoPorPagina;
    const datos = await fetch("https://fakestoreapi.com/products"); //hacemos la llamada a todos los productos
    const allProductos = await datos.json();
    const productosPagina = allProductos.slice(startIndex, endIndex); //se hace un nuevo array 
    setProductos(productosPagina);
    setTotalProductos(allProductos.length);
  };

  useEffect(() => {
    ListaProductos();
  }, [paginaactual, productoPorPagina]); // Agrega 'paginaactual' y 'productoPorPagina' como dependencias

  return (
    <div className="Productos">
      {productos.length <=1  ? (
        <p>No hay más productos disponibles.</p>
      ) : (
        <div className="container-products">
          {productos.map((producto) => (
            <div className="card-producto" key={producto.id}>
              <figure className="container-img">
                <img src={producto.image} alt={producto.title} />
              </figure>
              <div className="info-product">
                <h3>{producto.title}</h3>
                <p className="precio">${producto.price}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Productos;
