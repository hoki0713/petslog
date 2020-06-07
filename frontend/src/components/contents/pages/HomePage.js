import React from "react";
import { Image } from "react-bootstrap";

const Homepage = () => (
  <>
    <h1>Welcome</h1>
    <Image
      src="https://storage.googleapis.com/petbacker/images/blog/2017/dog-and-cat-cover.jpg"
      alt="Main page's image"
      fluid 
    />
  </>
);

export default Homepage;
