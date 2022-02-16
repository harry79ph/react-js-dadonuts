import { useState } from "react";
import Navbar from "./components/Navbar";
import SideMenu from "./components/SideMenu";
import Home from "./components/Home";
import Products from './components/Products';
import Features from './components/Features';
import Footer from './components/Footer';

function Main({ totals }) {

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <Navbar toggle={toggle} totals={totals}/>
      <SideMenu totals={totals} isOpen={isOpen} toggle={toggle} />
      <Home />
      <Products />
      <Features />
      <Footer />
    </>
  );
}

export default Main;
