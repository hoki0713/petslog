import React from "react";
import "./Header.css";

import { Image} from 'react-bootstrap';

const Header = () => (
  <div className="header">
    <Image 
    className="header-img"
    src="http://eldoradorentals.com/sites/all/themes/colab/images/pets-header.png" 
    alt="aminal images" fluid />
  </div>
);

export default Header;
