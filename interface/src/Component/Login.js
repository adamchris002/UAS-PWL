import React from "react";
import { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";

const Login = () => {

  const [user, setUser] = useState("")
  const [pass, setPass] = useState("")

  const handleUser =(inputUser) =>{
    setUser(inputUser)
  }

  const handlePassword =(inputPassword) =>{
    setPass(inputPassword)
  }

  const onLogin = () => {
    const requestingData = {
      user: user,
      password: pass,
    };
    axios({
      method: "GET",
      url: "http://localhost:3000/endoint",
      data: requestingData,
    }).then((result) => {
      localStorage.setItem("nama", result.)
      window.location.replace("/Home");
    });
  }


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
            <h1 style={{ marginBottom: "20px" }}>Login Page</h1>
            <Form
              style={{
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Form.Group className="mb-3 d-flex">
                <Form.Label style={{ width: "110px" }}>Username:</Form.Label>
                <Form.Control
                  id="disabledTextInput"
                  placeholder="Input your Username"
                  style={{ width: "300px" }}
                  required
                  onChange={(event) => handleName(event.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3 d-flex">
                <Form.Label style={{ width: "110px" }}>Password:</Form.Label>
                <Form.Control
                  id="disabledTextInput"
                  placeholder="Input your Password"
                  style={{ width: "300px" }}
                  required
                  onChange={(event) => handlePassword(event.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3 justify-content-center">
                <a href="/register">
                  Don't have an account yet? click here to register an account!
                </a>
              </Form.Group>
              <Button onClick={() => onLogin()}>Login</Button>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
