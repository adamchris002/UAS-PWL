import React from "react";
import {
  Container,
  Navbar,
  Nav,
  Form,
  Button,
  Card,
  ButtonGroup,
} from "react-bootstrap";
import axios from "axios";

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      course: [],
      classIndex: "",
      filtered: [],
      courseDetail: [],
      categoryData: "",
    };
  }

  componentDidMount() {
    axios({
      method: "GET",
      url: "http://localhost:3000/class",
    }).then((result) => this.setState({ course: result.data }));
  }

  viewDetails = (index) => {
    this.props.getIndex(index.id);
    this.props.changePage("details");
  };

  render() {
    return (
      <>
        <div>
          <Navbar bg="light" expand="lg">
            <Container fluid>
              <Navbar.Brand href="#"></Navbar.Brand>
              <Navbar.Toggle aria-controls="navbarScroll" />
              <Navbar.Collapse id="navbarScroll">
                <Nav
                  className="me-auto my-2 my-lg-0"
                  style={{ maxHeight: "100px" }}
                  navbarScroll
                >
                  <Nav.Link href="/home">Home</Nav.Link>
                  <Nav.Link
                    href="/"
                    onClick={(e) => {
                      e.preventDefault();
                      this.props.changePage("cart");
                    }}
                  >
                    Cart
                  </Nav.Link>
                </Nav>
                <Form className="d-flex">
                  <Button
                    onClick={() => this.props.changePage("login")}
                    className="btn btn-danger"
                  >
                    Logout
                  </Button>
                </Form>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>

        <div className="container">
          <h2>Welcome to Bimbel Semesta</h2>
          <ButtonGroup>
            <Button
              variant="outline-primary"
              onClick={() => this.setState({ categoryData: "" })}
            >
              All
            </Button>
            <Button
              variant="outline-primary"
              onClick={() => this.setState({ categoryData: "SE" })}
            >
              Software Engineering
            </Button>
            <Button
              variant="outline-primary"
              onClick={() => this.setState({ categoryData: "DS" })}
            >
              Data Science
            </Button>
            <Button
              variant="outline-primary"
              onClick={() => this.setState({ categoryData: "M" })}
            >
              Management
            </Button>
          </ButtonGroup>
        </div>

        <div className="justify-content-center container">
          <div className="row justify-content-center">
            {this.state.course
              .filter((object) => {
                return object.code.includes(this.state.categoryData);
              })
              .map((object, i) => {
                return (
                  <div
                    className="col-sm-4 d-flex justify-content-center mt-5"
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
                          <Button onClick={() => this.viewDetails(object)}>
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
