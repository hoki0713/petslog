import React from "react";
import "./Main.css";

import {
  HomePage,
  LoginPage,
  AnimalPicturePickerPage,
  SignUpPage,
  CatBreedsPage,
  DogBreedsPage
} from "./pages";

import { Route } from "react-router-dom";

const Main = () => (
  <div className="Post">
    <Route path="/" exact>
      <HomePage />
    </Route>
    <Route path="/login">
      <LoginPage />
    </Route>
    <Route path="/animal-picture-picker">
      <AnimalPicturePickerPage />
    </Route>
    <Route path="/signup">
      <SignUpPage />
    </Route>
    <Route path="/catbreeds">
      <CatBreedsPage />
    </Route>
    <Route path="/dogbreeds">
      <DogBreedsPage />
    </Route>
  </div>
);

export default Main;
