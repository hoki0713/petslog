import React from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./LoginPage.css";

const LoginPage = () => (
  <>
    <Form bsPrefix="LoginPage" className="loginForm">
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Button className="button" variant="primary" type="login">
        login
      </Button>
      <Link to="/signup">
        <Button className="button" variant="primary" type="join">
          join
        </Button>
      </Link>
    </Form>
  </>
);

export default LoginPage;
