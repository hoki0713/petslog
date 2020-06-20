import React from "react";
import { BrowserRouter } from "react-router-dom";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { Header } from "./components";
import { PostContainer } from "./containers";
import { AuthenticationProvider } from './components/context';

function App() {
  return (
    <AuthenticationProvider>
      <BrowserRouter>
        <div className="App">
          <Header />
          <PostContainer />
        </div>
      </BrowserRouter>
    </AuthenticationProvider>
  );
}

export default App;
