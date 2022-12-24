import React from "react";
import { Form, Button } from "react-bootstrap";

const Register = () => {
  return (
    <>
      <div
        className="d-flex justify-content-center"
        style={{ height: "700px", alignItems: "center" }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            boxShadow: "1px 2px 5px",
            borderRadius: "15px",
            height: "600px",
            width: "600px",
            justifyContent: "center",
          }}
        >
          <div>
            <h1 style={{marginBottom: "20px"}}>Register Page</h1>
            <Form
              style={{
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Form.Group className="mb-3 d-flex">
                <Form.Label style={{ width: "110px" }}>Name:</Form.Label>
                <Form.Control
                  id="disabledTextInput"
                  placeholder="Input your Name"
                  style={{ width: "300px" }}
                />
              </Form.Group>
              <Form.Group className="mb-3 d-flex">
                <Form.Label style={{ width: "110px" }}>Username:</Form.Label>
                <Form.Control
                  id="disabledTextInput"
                  placeholder="Input your Username"
                  style={{ width: "300px" }}
                />
              </Form.Group>
              <Form.Group className="mb-3 d-flex">
                <Form.Label style={{ width: "110px" }}>Password:</Form.Label>
                <Form.Control
                  id="disabledTextInput"
                  placeholder="Input your Password"
                  style={{ width: "300px" }}
                />
              </Form.Group>
              <Form.Group className="mb-3 d-flex">
                <Form.Label style={{ width: "110px" }}>E-mail:</Form.Label>
                <Form.Control
                  id="disabledTextInput"
                  placeholder="Input your E-mail Address"
                  style={{ width: "300px" }}
                />
              </Form.Group>
              <Form.Group className="mb-3 justify-content-center">
                <a href="/login">
                  Already have an account? click here to Login!
                </a>
              </Form.Group>
              <Button type="submit ">Register</Button>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
