import React from "react";
import "./Header.css";

import { Image} from 'react-bootstrap';

const Header = () => (
  <div className="header">
    <div className="header-title">
      <h1>Are you animal lover?</h1>
    </div>
    <Image 
    className="header-img"
    src="http://eldoradorentals.com/sites/all/themes/colab/images/pets-header.png" 
    alt="aminal images" fluid />
  </div>
);

export default Header;
