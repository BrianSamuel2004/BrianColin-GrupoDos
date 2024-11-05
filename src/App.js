import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import MainSection from "./components/MainSection/MainSection";
import Shop from "./components/Shopping/Shop"; 
import About from "./components/About/About";
import Contacto from "./components/Contacto/Contacto";

function App() {
  return (
    <div className="App flex flex-col min-h-screen">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<MainSection />} />
          <Route path="/shop" element={<Shop />} /> 
          <Route path="/about" element={<About />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
