import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";

// Services
import {getProductos} from "./services/productoService";

// Components
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Contador from "./components/ItemCount";
import ItemList from "./components/ItemList";
import ItemDetailContainer from "./components/ItemDetailContainer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home greeting="Hola mundo" />
          </Route>
          <Route path="/link">
            <Contador Min="1" Max="10" Initial="1" />
            <ItemList getProductos={getProductos} />
          </Route>
          <Route path="/itemdetail">
            <ItemDetailContainer />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
