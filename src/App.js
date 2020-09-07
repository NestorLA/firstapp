import React from "react";
import "./App.css";

// Services
import getProductos from "./services/productoService"


// Components
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Contador from "./components/ItemCount"
import ItemList from "./components/ItemList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
        <Home greeting="Hola mundo" />
        <Contador  Min="1" Max="10" Initial="1" />
        <ItemList getProductos={getProductos} />
    </div>
  );
}

export default App;
