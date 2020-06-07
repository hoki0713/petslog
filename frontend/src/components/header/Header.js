import React from "react";
import "./Header.css";

import { Image} from 'react-bootstrap';

const Header = () => (
  <div className="Header">
    <Image 
    className="Header-img"
    src="http://eldoradorentals.com/sites/all/themes/colab/images/pets-header.png" 
    alt="aminal images" fluid />
  </div>
);

export default Header;
