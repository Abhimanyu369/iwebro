import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Signup from "./pages/Signup";
import Hiring from "./pages/Hiring";

function App() {
  return (
    <>
      {/* Developers */}
      {/* Benefits */}
      {/* Flow */}

      {/* <BuildTeam /> */}
      {/* <Requirements /> */}

      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/hiring" element={<Hiring />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
