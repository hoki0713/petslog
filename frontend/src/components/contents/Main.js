import React from "react";
import "./Main.css";

import {
  HomePage,
  LoginPage,
  AnimalPicturePickerPage,
  SignUpPage,
  CatBreedsPage,
  DogBreedsPage,
  ContentsPage,
  QuizPage,
  AccountInfoPage
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
    <Route path="/contents">
      <ContentsPage />
    </Route>
    <Route path="/quiz">
      <QuizPage />
    </Route>
    <Route path="/account">
      <AccountInfoPage />
    </Route>
  </div>
);

export default Main;
