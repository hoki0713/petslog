import React from "react";
import { Form, Col, Row, Button } from "react-bootstrap";

import "./SignUpPage.css";

const SignUpPage = () => {
  async function handleSignUp(e) {
    e.preventDefault();
    const response = await fetch("/accounts", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: "abc@abc.kr",
        password: "123",
        name: "doggyperson",
        type: "dog-person",
      }),
    });
    console.log(response.status);
  }
  return (
    <Form className="sign-up-container">
      <Form.Group as={Row}>
        <Form.Label column sm={2}>
          Email
        </Form.Label>
        <Col sm={10}>
          <Form.Control type="email" placeholder="Email" />
        </Col>
      </Form.Group>

      <Form.Group as={Row}>
        <Form.Label column sm={2}>
          Password
        </Form.Label>
        <Col sm={10}>
          <Form.Control type="password" placeholder="Password" />
        </Col>
      </Form.Group>

      <Form.Group as={Row}>
        <Form.Label column sm={2}>
          Name
        </Form.Label>
        <Col sm={10}>
          <Form.Control type="text" placeholder="Name" />
        </Col>
      </Form.Group>

      <fieldset>
        <Form.Group as={Row}>
          <Form.Label as="legend" column sm={2}>
            Type of you
          </Form.Label>
          <Col sm={10}>
            <Form.Check
              type="radio"
              label="Dog-person"
              name="formHorizontalRadios"
              id="formHorizontalRadios1"
            />
            <Form.Check
              type="radio"
              label="Cat-person"
              name="formHorizontalRadios"
              id="formHorizontalRadios2"
            />
            <Form.Check
              type="radio"
              label="Animal-person"
              name="formHorizontalRadios"
              id="formHorizontalRadios3"
            />
          </Col>
        </Form.Group>
      </fieldset>
      <Form.Group as={Row} controlId="formHorizontalCheck">
        <Col sm={{ span: 10, offset: 2 }}>
          <Form.Check label="Remember me" />
        </Col>
      </Form.Group>

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
