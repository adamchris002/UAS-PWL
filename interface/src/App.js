import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Component/Home";
import Login from "./Component/Login";
import Register from "./Component/Register";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home title="HOME PAGE" />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="*" element={<h1>PAGE NOT FOUND</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
