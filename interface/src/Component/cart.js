import { Container, Navbar, Nav, Form, Button, Modal } from "react-bootstrap";
import axios from "axios";
import React from "react";

class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cartDatas: [],
      id:[],
      total: "",
      show: false,
    };
  }

  componentDidMount() {
    axios({
      method: "GET",
      url: "http://localhost:3000/cart",
    }).then((result) => this.setState({ cartDatas: result.data }));
  }

  onDelete = (index) => {
    const id = Number(index);
    axios({
      method: "DELETE",
      url: `http://localhost:3000/cart/delete/${id}`,
    });
  };

handleClose = () => {
    this.setState({show: false})
}

handleShow = () => {
    let tempTotal = 0;
    this.state.cartDatas.map((object, i) => {
        tempTotal += Number(object.price);
        return (tempTotal)
    })
    this.setState({total: tempTotal})
    this.setState({show: true})
}

  render() {
    return (
      <>
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
          <h1>Your Cart</h1>
          {this.state.cartDatas.map((object, i) => {
            return (
              <>
                <div>
                  <hr />
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <h5>{object.name}</h5>
                    <Button
                      className="btn btn-danger"
                      onClick={() => this.onDelete(object.id)}
                      style={{height: "30px", textAlign: "center", fontSize: "12px"}}
                    >
                      Delete
                    </Button>
                  </div>
                  <div style={{ display: "flex" }}>
                    <div style={{ display: "flex" }}>
                      <p>Class Code: </p>
                      <p style={{ marginLeft: "5px", fontWeight: "bold" }}>
                        {object.classcode}
                      </p>
                    </div>
                    <div style={{ display: "flex", marginLeft: "10px" }}>
                      <p>Price: </p>
                      <p style={{ marginLeft: "5px", fontWeight: "bold" }}>
                        $. {object.price}
                      </p>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "50px",
              marginBottom: "50px",
            }}
          >
            <Button onClick={() => this.handleShow()}>Check Out</Button>
          </div>
        </div>
        <Modal show={this.state.show} onHide={this.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Check Out Page</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{display: "flex"}}>
            <p>Total for your Classess: </p>
            <p style={{fontWeight: "bold", marginLeft: "5px"}}> $.{this.state.total}</p>
            </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      </>
    );
  }
}

export default Cart;
