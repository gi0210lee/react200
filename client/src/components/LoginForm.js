import React, { Component } from "react";
import { Button, Form } from "react-bootstrap";

class LoginForm extends Component {
  render() {
    return (
      <div className="LoginFrom">
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <img src={require("../img/main/m_log_i2.png")} alt="" />
            <Form.Control size="sm" type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <img src={require("../img/main/m_log_i3.png")} alt="" />
            <Form.Control size="sm" type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}

export default LoginForm;
