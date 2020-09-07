import React, { useState } from "react";
import Item from "./Item";
import getProductos from "../services/productoService";

const ItemList = () => {
  const [productos, setProductos] = useState([]);
  const [error, setError] = useState("");

  getProductos()
    .then((productos) => {
      setProductos(productos);
    })
    .catch((error) => {
      setError(error);
    });
  if (!error) {
    return (
      <div className="container">
        <ul className="row">
          {productos.map((producto) => (
            <Item producto={producto} />
          ))}
        </ul>
      </div>
    );
  } else return <span>{error}</span>;
};

export default ItemList;
