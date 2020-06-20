import React from "react";
import { Form, Col, Button } from "react-bootstrap";

const AccountInfoPage = () => (
  <div className="form">
    <h3>Account Information</h3>

    <div className="table mx-auto">
      <div>
        <td>Email</td>
        <td>email from accountInfo</td>
      </div>
      <div>
        <td>Password</td>
        <td><Button variant="primary" type="submit">Change Password</Button></td>
      </div>
    </div>

    <Form.Group controlId="formGridPassword">
      <Form.Row>
        <Form.Label className="mr-5 ml-5 my-auto">Password</Form.Label>
        <Button variant="primary" type="submit">
          Change Password
        </Button>
      </Form.Row>
    </Form.Group>

    <Form.Group controlId="formGridAddress1">
      <Form.Label>Address</Form.Label>
      <Form.Control placeholder="1234 Main St" />
    </Form.Group>

    <Form.Group controlId="formGridAddress2">
      <Form.Label>Address 2</Form.Label>
      <Form.Control placeholder="Apartment, studio, or floor" />
    </Form.Group>

    <Form.Row>
      <Form.Group as={Col} controlId="formGridCity">
        <Form.Label>City</Form.Label>
        <Form.Control />
      </Form.Group>

      <Form.Group as={Col} controlId="formGridState">
        <Form.Label>State</Form.Label>
        <Form.Control as="select" defaultValue="Choose...">
          <option>Choose...</option>
          <option>...</option>
        </Form.Control>
      </Form.Group>

      <Form.Group as={Col} controlId="formGridZip">
        <Form.Label>Zip</Form.Label>
        <Form.Control />
      </Form.Group>
    </Form.Row>

    <Form.Group id="formGridCheckbox">
      <Form.Check type="checkbox" label="Check me out" />
    </Form.Group>

    <Button variant="primary" type="submit">
      Submit
    </Button>
  </div>
);

export default AccountInfoPage;
