import React from 'react';
import Contador from './ItemCount'


const ItemDetail = ({products}) => {
    return (  
        <div className="card" >
  <img className="card-img-top mx-auto" src={products.imagen} alt=""/>
  <div className="card-body">
    <h5 className="card-title">{products.nombre}</h5>
    <p className="card-text">{products.detalles}</p>
    <p className="card-text">$ {products.precio}</p>
    <Contador Min="1" Max="2" Initial="1"/>
    <a href="/carrito" className="btn btn-primary">Comprar</a>
  </div>
</div>
    );
}
 
export default ItemDetail;