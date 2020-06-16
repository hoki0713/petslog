import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import "./LoginPage.css";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const handleLoginButton = async (e) => {
    e.preventDefault();
    const response = await fetch("/authentication", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });
    if(response.status === 200 ) {
      const json = await response.json();
      alert(`Hi, ${json.name}`)
      history.push("/contents")
    } else {
      alert("Wrong Access!!!")
    }
    console.log(response.status);
  };

  return (
    <>
      <Form bsPrefix="LoginPage" className="loginForm">
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Enter email"
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
          />
        </Form.Group>
        <Button
          onClick={handleLoginButton}
          className="button"
          variant="primary"
          type="login"
        >
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
};

export default LoginPage;
