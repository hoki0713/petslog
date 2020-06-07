

import React, { useState } from "react";
import { Image, Container } from "react-bootstrap";
import { AnimalImageLink } from "../../../Asset";
import "./AnimalPicturePickerPage.css";

const AnimalPicturePickerPage = () => {
  const [picture, setPicture] = useState(randomPicture());

  return (
    <>
      <Container bsPrefix className="container">
        <Image
          onClick={() => setPicture(randomPicture())}
          fluid
          src={picture}
          rounded
        />
      </Container>
    </>
  );
};

function randomPicture() {
  return AnimalImageLink[Math.floor(Math.random() * AnimalImageLink.length)];
}

export default AnimalPicturePickerPage;
