import React, { useState } from "react";

function Contador(props) {
  const [count, setCount] = useState(props.Initial);

  return (
    <>
      <p className="font-weight-bold">Contador: {count}. </p>
      <button
        className="btn btn-primary p-3"
        onClick={() => setCount(Math.min(count + 1, props.Max))}
      >
        +
      </button>
      <button
        className="m-4 btn btn-primary p-3"
        onClick={() => setCount(Math.max(count - 1, props.Min))}
      >
        -
      </button>
    </>
  );
}

export default Contador;
