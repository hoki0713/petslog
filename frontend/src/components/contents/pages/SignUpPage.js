import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import { Form, Col, Row, Button } from "react-bootstrap";

import "./SignUpPage.css";

const SignUpPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [type, setType] = useState("");

  const history = useHistory();

  async function handleSignUp(e) {
    e.preventDefault();
    const response = await fetch("/accounts", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: email,
        password: password,
        name: name,
        type: type,
      }),
    });
    if(response.status === 200) {
      setEmail("")
      setPassword("")
      setName("")
      history.push("/login")
    }
    console.log(response.status);
  }
  return (
    <Form className="sign-up-container">
      <Form.Group as={Row}>
        <Form.Label column sm={2}>
          Email
        </Form.Label>
        <Col sm={10}>
          <Form.Control
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            placeholder="Email"
          />
        </Col>
      </Form.Group>

      <Form.Group as={Row}>
        <Form.Label column sm={2}>
          Password
        </Form.Label>
        <Col sm={10}>
          <Form.Control
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="password"
            placeholder="Password"
          />
        </Col>
      </Form.Group>

      <Form.Group as={Row}>
        <Form.Label column sm={2}>
          Name
        </Form.Label>
        <Col sm={10}>
          <Form.Control
            onChange={(e) => setName(e.target.value)}
            value={name}
            type="text"
            placeholder="Name"
          />
        </Col>
      </Form.Group>

      <fieldset>
        <Form.Group as={Row}>
          <Form.Label as="legend" column sm={2}>
            Type of you
          </Form.Label>
          <Col sm={10}>
            <Form.Check
              onChange={(e) => setType(e.target.value)}
              type="radio"
              label="Dog-person"
              value="dog-person"
              name="formHorizontalRadios"
              id="formHorizontalRadios1"
            />
            <Form.Check
              onChange={(e) => setType(e.target.value)}
              type="radio"
              label="Cat-person"
              value="cat-person"
              name="formHorizontalRadios"
              id="formHorizontalRadios2"
            />
            <Form.Check
              onChange={(e) => setType(e.target.value)}
              type="radio"
              label="Animal-person"
              value="animal-person"
              name="formHorizontalRadios"
              id="formHorizontalRadios3"
            />
          </Col>
        </Form.Group>
      </fieldset>

      <Form.Group as={Row}>
        <Col sm={{ span: 10, offset: 2 }}>
          <Button onClick={handleSignUp} type="submit">
            Submit
          </Button>
        </Col>
      </Form.Group>
    </Form>
  );
};

export default SignUpPage;
