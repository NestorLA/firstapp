import React, { Fragment } from "react";

const Item = (props) => {
  return (
    <Fragment>
      <li key={props.producto.id}>{props.producto.nombre}</li>
      <img src={props.producto.imagen} alt="" />
    </Fragment>
  );
};

export default Item;
