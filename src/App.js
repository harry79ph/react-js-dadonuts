import { BrowserRouter as Router } from 'react-router-dom';
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import SideMenu from "./components/SideMenu";
import GlobalStyle from "./theme/GlobalStyle";
import Home from "./components/Home";
import Products from './components/Products';
import Features from './components/Features';
import Footer from './components/Footer';

function App() {

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  }

  return (
    <Router>
      <GlobalStyle />
      <Navbar toggle={toggle} />
      <SideMenu isOpen={isOpen} toggle={toggle} />
      <Home />
      <Products />
      <Features />
      <Footer />
    </Router>
  );
}

export default App;
