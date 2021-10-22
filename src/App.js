import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import "./App.css";
import Homepage from "./page/homepage/homepage.component";
import ShopPage from "./page/shop/shop.component";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop" component={ShopPage} />
      </BrowserRouter>
    </div>
  );
}

export default App;
