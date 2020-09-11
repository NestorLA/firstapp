import React, { useState, useEffect } from "react";
import { getProducto } from "../services/productoService";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getProducto()
    .then((products) => {
      setProducts(products);
      setLoading(false);
    })   
  }, []);
  
//   useEffect(() => {
//     console.log(products);
//   }, [products])
  
   console.log(products);
  if (loading) {
    return <h2>Cargando...</h2>;
  }
  return <ItemDetail products={products} />;
};

export default ItemDetailContainer;
