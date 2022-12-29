import React from "react";
import { Container, Navbar, Nav, Form, Button, Card } from "react-bootstrap";
import axios from "axios";

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      course: [],
      classIndex: "",
      classData: [],
    };
  }

  componentDidMount() {
    axios({
      method: "GET",
      url: "http://localhost:3000/class",
    }).then((result) => this.setState({course: result.data}));
  };

   viewDetails = (index) => {
    this.setState({classIndex: index.id})
    axios({
      method: "GET",
      url: `http://localhost:3000/class/view/${this.state.classIndex}`,
    }).then((result) => this.setState({classData: result.data}))
    this.props.addView(this.state.classData)
  }

  render() {
    return (
      <>
        <div>
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
                  <a href="/login" className="btn btn-danger">
                    Logout
                  </a>
                </Form>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
  
        <h2 className="container">Welcome to online course</h2>
  
        <div className="justify-content-center container">
          <div className="row justify-content-center">
            {this.state.course.map((object, i) => {
              return (
                <div
                  className="col m-4"
                  style={{ justifyContent: "center" }}
                  key={i + 1}
                >
                  <Card
                    style={{
                      width: "300px",
                      height: "300px",
                      justifyContent: "center",
                    }}
                  >
                    <Card.Body className="">
                      <Card.Title>{object.name}</Card.Title>
                      <Card.Text>{object.description}</Card.Text>
  
                      <div
                        className="d-flex"
                        style={{
                          bottom: 0,
                          position: "absolute",
                          marginBottom: 15,
                        }}
                      >
                        <Button
                        onClick={() => this.viewDetails(object)}
                        >
                          View Details
                        </Button>
                        <Card.Text
                          style={{
                            marginLeft: 15,
                            textAlign: "center",
                            justifyContent: "center",
                          }}
                        >
                          $. {object.price}
                        </Card.Text>
                      </div>
                    </Card.Body>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </>
    );
  }
}

export default Home;
