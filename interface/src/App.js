
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Component/Home";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home title="HOME PAGE" />} />
        
        <Route path="*" element={<h1>PAGE NOT FOUND</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
