import { useEffect, useState } from "react";
import Paginacion from "./Paginacion";

function Productos() {

    const [productos, setProductos] = useState([]);
    //estado inicial
    const [productoPorPagina, setProductoPorPagina] = useState(6);
    //los productos que quiero poner en cada pagina
    const [paginaActual, setPaginaActual] = useState([]);
    //pagina en la que estamos

    //llamada a la api
    const ListaProductos = async () => {
        const datos = await fetch('https://fakestoreapi.com/products');
        const productos = await datos.json();

        setProductos(productos);

    }

    //para que solo se reenderice una vez
    useEffect(() => {
        ListaProductos()
    }, [])

    return (
        <div className="Productos">

            <>

                <div className="container-products">
                    {productos.map(productos => (

                        <div className="card-producto">
                            <figure className="container-img">
                                <img src={productos.image} alt={productos.title} />
                            </figure>

                            <div className="info-product">

                                <h3>{productos.title}</h3>
                                <p className="precio">${productos.price}</p>
                                <button>Añadir al carrito</button>
                            </div>
                        </div>
                    ))}
                </div>
                <Paginacion />
            </>

        </div>
    );

}

export default Productos;