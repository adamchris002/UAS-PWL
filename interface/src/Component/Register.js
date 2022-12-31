import React from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";

class Register extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      user: "",
      password: "",
      email: "",
    };
  }

  handleName = (inputName) => {
    this.setState({ name: inputName });
  };

  handleUser = (inputUser) => {
    this.setState({ user: inputUser });
  };

  handlePassword = (inputPassword) => {
    this.setState({ password: inputPassword });
  };

  handleEmail = (inputEmail) => {
    this.setState({ email: inputEmail });
  };

  onRegister = () => {
    const requestingData = {
      name: this.state.name,
      username: this.state.user,
      password: this.state.password,
      email: this.state.email,
    };
    axios({
      method: "POST",
      url: "http://localhost:3000/user/register",
      data: requestingData,
    })
      .then((result) => {
        console.log(result.data);
      })
      .catch((e) => alert("e"));
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
              height: "450px",
            }}
          >
            <div>
              <Form
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  marginLeft: "7px",
                  marginRight: "7px"
                }}
              >
                <h5 style={{ marginBottom: "20px" }}>Register Page</h5>
                <Form.Group className="mb-3 d-flex">
                  <Form.Label style={{ width: "90px" }}>Name:</Form.Label>
                  <Form.Control
                    id="disabledTextInput"
                    placeholder="Input your Name"
                    style={{ width: "250px" }}
                    required
                    onChange={(event) => this.handleName(event.target.value)}
                  />
                </Form.Group>
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
                <Form.Group className="mb-3 d-flex">
                  <Form.Label style={{ width: "90px" }}>E-mail:</Form.Label>
                  <Form.Control
                    id="disabledTextInput"
                    placeholder="Input your E-mail Address"
                    style={{ width: "250px" }}
                    required
                    onChange={(event) => this.handleEmail(event.target.value)}
                  />
                </Form.Group>
                <Form.Group className="mb-3 justify-content-center">
                  <a
                    href="/"
                    onClick={(e) => {
                      e.preventDefault();
                      this.props.changePage("login");
                    }}
                  >
                    Already have an account? click here to Login!
                  </a>
                </Form.Group>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <Button onClick={() => this.onRegister()}>Register</Button>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Register;
