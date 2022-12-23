import { useEffect, useState } from "react";
import {
  Container,
  NavDropdown,
  Navbar,
  Nav,
  Form,
  Button,
  Card,
} from "react-bootstrap";
import axios from "axios";

function Home({ title }) {
  const [course, setCourse] = useState([]);

  useEffect(() => {
    axios({
      method: "GET",
      url: "http://localhost:3000/class",
    }).then((result) => setCourse(result.data));
  }, []);

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
                <Nav.Link href="#action1">Home</Nav.Link>
                <Nav.Link href="#action2">Link</Nav.Link>
                <NavDropdown title="Link" id="navbarScrollingDropdown">
                  <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">
                    Something else here
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#" disabled>
                  Link
                </Nav.Link>
              </Nav>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button className="btn btn-danger">Logout</Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>

      <h3 className="container">Welcome to online course</h3>

      <div className="justify-content-center">
        <div className="row justify-content-center">
          {course.map((object, i) => {
            return (
              <div className="col m-4" style={{justifyContent: "center"}} key={i + 1}>
                <Card style={{ width: "300px", height: "300px", justifyContent: "center"}}>
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
                      <Button>Add to Cart</Button>
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

export default Home;
