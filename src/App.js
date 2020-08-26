import React from "react";
import "./App.css";

// Components
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Contador from "./components/ItemCount"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
        <Home greeting="Hola mundo" />
        <Contador  Min="1" Max="11" Initial="1" />
    </div>
  );
}

export default App;
