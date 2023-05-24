import About from "./components/About";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import Skill from "./components/Skill";
import Contact from "./components/Contact";
// import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <NavBar />
      <Home />
      <About />
      <Portfolio />
      <Skill />
      <Contact />

      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/skills" element={<Skill />} />
        <Route path="/contact" element={<Contact />} />
      </Routes> */}

    </>
  );
}

export default App;
