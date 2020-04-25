import React, { useRef, useState } from "react";
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import API from "../utils/API";
import { Redirect } from "react-router-dom";

export default function SignupForm() {
  const [sendLogin, setSendLogin] = useState(false);
  const firstRef = useRef();
  const lastRef = useRef();
  const nameRef = useRef();
  const aptRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmRef = useRef();

  const renderRedirect = () => {
    if (sendLogin) {
      return <Redirect to="/" />;
    }
  };
  function signUp(event) {
    console.log(firstRef.current.value);
    event.preventDefault();
    if (passwordRef.current.value !== confirmRef.current.value) {
      return alert("Passwords must match");
    } else {
      API.createUser({
        firstName: firstRef.current.value,
        lastName: lastRef.current.value,
        email: emailRef.current.value,
        username: nameRef.current.value,
        aptNumber: aptRef.current.value,
        password: passwordRef.current.value,
      })
        .then((res) => {
          setSendLogin(true);
        })
        .catch((err) => alert("Username already exists"));
    }
  }
  return (
    <div className="signupform--wrapper">
      <Form className="signupform--container div-to-align">
        <Form.Row className="mb-3 justify-content-center">
          <Col className="col-8 col-md-4">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="First name"
              required
              ref={firstRef}
            />
          </Col>
          <Col className="col-8 col-md-4">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Last name"
              required
              ref={lastRef}
            />
          </Col>
        </Form.Row>
        <Form.Row className="justify-content-center">
          <Col className="col-8 col-md-4">
            <Form.Label>Apt. #</Form.Label>
            <Form.Control
              type="text"
              placeholder="Apt #"
              required
              ref={aptRef}
            />
          </Col>
          <Col className="col-8 col-md-4">
            <Form.Group controlId="formGroupUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter username"
                required
                ref={nameRef}
              />
            </Form.Group>
          </Col>
        </Form.Row>
        <Form.Row className="justify-content-center">
          <Col className="col-8">
            <Form.Group controlId="formGroupEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                required
                ref={emailRef}
              />
            </Form.Group>
          </Col>
        </Form.Row>
        <Form.Row className="justify-content-center">
          <Col className="col-8">
            <Form.Group controlId="formGroupPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                required
                ref={passwordRef}
              />
            </Form.Group>
          </Col>
        </Form.Row>
        <Form.Row className="justify-content-center">
          <Col className="col-8">
            <Form.Group controlId="formGroupConfirmPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Retype Password"
                required
                ref={confirmRef}
              />
            </Form.Group>
          </Col>
        </Form.Row>
        <Form.Row className="justify-content-center">
          <Col className="col-8">
            <Button variant="primary" type="submit" onClick={signUp}>
              Submit
            </Button>
            {renderRedirect()}
          </Col>
        </Form.Row>
      </Form>
    </div>
  );
}
