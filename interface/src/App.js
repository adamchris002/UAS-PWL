import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Component/home";
import Login from "./Component/login";
import Register from "./Component/register";
import Details from "./Component/details";
import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      viewsData: [],
    };
  }

  addView = (data) => {
    this.setState({ viewsData: this.state.viewsData.concat(data) });
  };

  render() {
    return (
      console.log(this.state.viewsData),
      (
        <Router>
          <Routes>
            <Route path="/home" element={<Home addView={this.addView} title="HOME PAGE" />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/details" element={<Details />} />
            <Route path="*" element={<h1>PAGE NOT FOUND</h1>} />
          </Routes>
        </Router>
      )
    );
  }
}

export default App;
