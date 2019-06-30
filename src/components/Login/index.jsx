import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Form, Button } from "react-bootstrap";
import {
  defineUserNameActions,
  handleLoginVisibilityAction
} from "../../actions/actions";
import "./Login.css";

const Login = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const handleChange = event => {
    setValue(event.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(defineUserNameActions(value));
    dispatch(handleLoginVisibilityAction(true));
  };

  return (
    <div>
      <h3>Please choose your username</h3>
      <Form onSubmit={handleSubmit} className="login">
        <Form.Group controlId="formBasicEmail">
          <Form.Label>User Name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Enter username"
            onChange={handleChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={handleSubmit}>
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Login;
