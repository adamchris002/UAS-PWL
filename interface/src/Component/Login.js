import axios from "axios";
import React from "react";
import { Form, Button } from "react-bootstrap";

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: "",
      pass: "",
    };
  }

  handleUser = (inputUser) => {
    this.setState({ user: inputUser });
    console.log(this.state.user);
  };

  handlePassword = (inputPassword) => {
    this.setState({ pass: inputPassword });
  };

  handleRegister = () => {
    this.props.changePage("register");
  };

  handleLogin = () => {
    const dataUser = { username: this.state.user, password: this.state.pass };
    axios({
      method: "POST",
      url: "http://localhost:3000/user/login",
      data: dataUser,
    }).then((result) => {
      if (result.data === null) {
        alert("Data yang dimasukkan tidak sesuai");
      } else {
        this.props.changePage("home");
      }
    });
  };

  render() {
    return (
      <>
        <div
          className="d-flex justify-content-center"
          style={{ height: "700px", alignItems: "center", margin: "20px", padding: "50px" }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              boxShadow: "1px 2px 5px",
              borderRadius: "15px",
              justifyContent: "center",
              height: "400px",
              
            }}
          >
            <div>
              <Form
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  marginLeft: "7px", 
                  marginRight: "7px", 
                }}
              >
                <h5 style={{ marginBottom: "20px" }}>Login Page</h5>
                <Form.Group className="mb-3 d-flex">
                  <Form.Label style={{ width: "90px" }}>Username:</Form.Label>
                  <Form.Control
                    id="disabledTextInput"
                    placeholder="Input your Username"
                    style={{ width: "250px" }}
                    required
                    onChange={(event) => this.handleUser(event.target.value)}
                  />
                </Form.Group>
                <Form.Group className="mb-3 d-flex">
                  <Form.Label style={{ width: "90px" }}>Password:</Form.Label>
                  <Form.Control
                    id="disabledTextInput"
                    placeholder="Input your Password"
                    style={{ width: "250px" }}
                    required
                    onChange={(event) =>
                      this.handlePassword(event.target.value)
                    }
                    type="password"
                  />
                </Form.Group>
                <Form.Group className="mb-3 justify-content-center">
                  <a
                    href="/"
                    onClick={(e) => {
                      e.preventDefault();
                      this.handleRegister();
                    }}
                  >
                    Don't have an account yet? click here to register an
                    account!
                  </a>
                </Form.Group>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <Button onClick={() => this.handleLogin()}>Login</Button>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Login;
