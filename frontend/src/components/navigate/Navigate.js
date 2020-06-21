import React, { useContext } from "react";
import { Navbar, Nav } from "react-bootstrap";
import "./Navigate.css";

import { Link } from "react-router-dom";
import { AuthenticationContext } from "../context";

const Navigate = () => {
  const { jwt, setJwt } = useContext(AuthenticationContext);
  return (
    <div className="Navigate">
      <Navbar bg="dark" variant="dark">
        <Link to="/">
          <Navbar.Brand>Animal Lover</Navbar.Brand>
        </Link>
        <Nav className="mr-auto">
          <Link className="nav-link" to="/">
            Home
          </Link>
          <Link className="nav-link" to="/catbreeds">
            Cat Breeds
          </Link>
          <Link className="nav-link" to="/dogbreeds">
            Dog Breeds
          </Link>
          {jwt && (
            <Link className="nav-link" to="/contents">
              Contents
            </Link>
          )}
          {!jwt && (
            <Link className="nav-link" to="/login">
              Login
            </Link>
          )}
          {jwt && (
            <Link
              className="nav-link"
              to="/login"
              onClick={() => setJwt(null)}
            >
              Logout
            </Link>
          )}
          
        </Nav>
      </Navbar>
    </div>
  );
};

export default Navigate;
