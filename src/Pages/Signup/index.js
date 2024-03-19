import React, { useEffect } from "react";
import { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import "./style.css";

function Signup() {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    password: "",
    confirm: "",
  });
  const [userInfoErrs, setUserInfoErrors] = useState({});

  useEffect(() => {
    console.log(userInfoErrs);
    if (Object.keys(userInfoErrs).length === 0 && isFormSubmitted) {
      console.log(userInfo);
    }
  }, [userInfoErrs]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const validateForm = (values) => {
    const errors = {};
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (!values.name) {
      errors.name = "Name is required";
    }
    if (!values.email) {
      errors.email = "Email is required";
    } else if (!emailRegex.test(values.email)) {
      errors.email = "Email format not valid";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 8 || values.password.length > 12) {
      errors.password = "Password must be between 8 and 12 characters";
    }
    if (values.password !== values.confirm) {
      errors.confirm = "Passwords do not match";
    }
    if (!values.image) {
      errors.image = "Image is required";
    }
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsFormSubmitted(true);
    setUserInfoErrors(validateForm(userInfo));
  };

  const clearForm = () => {
    setUserInfo({
      name: "",
      email: "",
      password: "",
    });
    setUserInfoErrors({});
  };

  return (
    <Container>
      <Row className="justify-content-center mt-5">
        <Col xs={12} md={6}>
          <h2 className="text-center mb-4">Sign up</h2>
          <Form onSubmit={handleSubmit} className="border-form">
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={userInfo.name}
                onChange={handleChange}
                isInvalid={!!userInfoErrs.name}
                className="input-field"
              />
              <Form.Control.Feedback type="invalid">
                {userInfoErrs.name}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="formEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={userInfo.email}
                onChange={handleChange}
                isInvalid={!!userInfoErrs.email}
                className="input-field"
              />
              <Form.Control.Feedback type="invalid">
                {userInfoErrs.email}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                value={userInfo.password}
                onChange={handleChange}
                isInvalid={!!userInfoErrs.password}
                className="input-field"
              />
              <Form.Control.Feedback type="invalid">
                {userInfoErrs.password}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="formConfirmPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                name="confirm"
                value={userInfo.confirm}
                onChange={handleChange}
                isInvalid={!!userInfoErrs.confirm}
                className="input-field"
              />
            </Form.Group>

            <Form.Group controlId="formImage">
              <Form.Label>Upload Image</Form.Label>
              <Form.Control
                type="file"
                name="image"
                value={userInfo.image}
                onChange={handleChange}
                isInvalid={!!userInfoErrs.image}
                className="input-field"
              />
              <Form.Control.Feedback type="invalid">
                {userInfoErrs.image}
              </Form.Control.Feedback>
            </Form.Group>

            <div className="text-center m-2">
              <Button variant="primary" type="submit" className="mr-3">
                Submit
              </Button>
              <Button variant="secondary" onClick={clearForm}>
                Clear
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Signup;
