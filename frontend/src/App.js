import React from "react";
import { BrowserRouter } from "react-router-dom";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { Header } from "./components";
import { PostContainer } from "./containers";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <PostContainer />
      </div>
    </BrowserRouter>
  );
}

export default App;
