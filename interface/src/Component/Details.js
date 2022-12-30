import React from "react";
import axios from "axios";
import { Container, Navbar, Nav, Form, Button } from "react-bootstrap";

class Details extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      courseData: [],
    };
  }
  componentDidMount() {
    axios({
      method: "GET",
      url: `http://localhost:3000/class/view/${this.props.index}`,
    }).then((result) => this.setState({ courseData: result.data }));
  }

  onLogout = () => {};

  onAdd = () => {
    const requestingData = {
      name: this.state.courseData.name,
      price: this.state.courseData.price,
      classcode: this.state.courseData.code,
    };
    axios({
      method: "POST",
      url: `http://localhost:3000/cart/addcart`,
      data: requestingData,
    }).then(() => this.props.changePage("home"));
  };

  render() {
    console.log(this.state.courseData);
    return (
      <>
        <Navbar bg="light" expand="lg">
          <Container fluid>
            <Navbar.Brand href="#">
              {localStorage.getItem("nama")}{" "}
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <Nav.Link href="/home">Home</Nav.Link>
                <Nav.Link href="#action2">Cart</Nav.Link>
              </Nav>
              <Form className="d-flex">
                <Button
                  onClick={() => this.onLogout()}
                  className="btn btn-danger"
                >
                  Logout
                </Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <div className="container">
          <h2 style={{ fontWeight: "bold" }}>{this.state.courseData.name}</h2>
          <div style={{ display: "flex" }}>
            <div style={{ display: "flex" }}>
              <h4 style={{ fontWeight: "bold" }}>Class Code: </h4>
              <h4 style={{ fontStyle: "italic" }}>
                {" "}
                {this.state.courseData.code}
              </h4>
            </div>
            <div style={{ display: "flex" }}>
              <h4 style={{ marginLeft: "20px", fontWeight: "bold" }}>
                Price: $.{" "}
              </h4>
              <h4 style={{ fontStyle: "italic" }}>
                {this.state.courseData.price}
              </h4>
            </div>
          </div>
          <hr />
          <div>
            <img
              src="https://www.pooc.org/wp-content/uploads/2022/04/contoh-iklan-pendidikan-3.png"
              alt=""
              style={{ height: "300px", width: "300px" }}
              className="justify-content-center text-center"
            />
          </div>
          <br />
          <div>
            <h4>About this Class:</h4>
            <h5>{this.state.courseData.description}</h5>
          </div>
          <br />
          <br />
          <Button
            style={{
              justifyContent: "center",
            }}
            className="justify-content-center"
            onClick={() => this.onAdd()}
          >
            Add to Cart
          </Button>
        </div>
      </>
    );
  }
}

export default Details;
