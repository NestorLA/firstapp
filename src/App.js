import React from "react";
import "./App.css";

// Components
import Navbar from "./components/Navbar";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
        <Home greeting="Hola mundo" />
    </div>
  );
}

export default App;
