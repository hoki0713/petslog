import React from "react";
import { Navbar, Nav, Form, Button, FormControl } from "react-bootstrap";
import "./Navigate.css";

import { Link } from "react-router-dom";

const Navigate = () => (
  <div className="Navigate">
    <Navbar bg="dark" variant="dark">
      <Link to="/">
        <Navbar.Brand>Animal Lover</Navbar.Brand>
      </Link>
      <Nav className="mr-auto">
        <Link className="nav-link" to="/">Home</Link>
        <Link className="nav-link" to="/animal-picture-picker">Aminal Picture Picker</Link>
        <Link className="nav-link" to="/login">Login</Link>
      </Nav>
      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-info">Search</Button>
      </Form>
    </Navbar>
  </div>
);

export default Navigate;
