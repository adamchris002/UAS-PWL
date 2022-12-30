import Home from "./Component/home";
import Login from "./Component/login";
import Register from "./Component/register";
import Details from "./Component/details";
import Cart from "./Component/cart";
import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: "home",
      courseData: [],
      viewIndex: "",
    };
  }

  getIndex = (index) => {
    this.setState({ viewIndex: index });
  };

  changePage = (newPage) => {
    this.setState({ page: newPage });
  };

  render() {
    return (
      console.log(this.state.viewIndex),
      <div>
        {this.state.page === "login" ? (
          <Login changePage={this.changePage} />
        ) : this.state.page === "register" ? (
          <Register changePage={this.changePage} />
        ) : this.state.page === "home" ? (
          <Home changePage={this.changePage} getIndex={this.getIndex} />
        ) : this.state.page === "details" ? (
           
            <Details
              changePage={this.changePage}
              index={this.state.viewIndex}
            />
          
        ): (<Cart changePage={this.changePage}/>)}

      </div>

      // <Router>
      //   <Routes>
      //     <Route path="/home" element={<Home addView={this.addView} title="HOME PAGE" />} />
      //     <Route path="/login" element={<Login />} />
      //     <Route path="/register" element={<Register />} />
      //     <Route path="/details" element={<Details data = {this.state.viewsData}/>} />
      //     <Route path="*" element={<h1>PAGE NOT FOUND</h1>} />
      //   </Routes>
      // </Router>
    );
  }
}

export default App;
