import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import "./App.css";
import Homepage from "./page/homepage/homepage.component";

const HatsPage = (props) => (
  <div>
    <h1>Hats Page</h1>
  </div>
);

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/" component={Homepage} />
        <Route path="/hats" component={HatsPage} />
      </BrowserRouter>
    </div>
  );
}

export default App;
