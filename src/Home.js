import { useState } from "react";
import Navbar from "./components/Navbar";
import SideMenu from "./components/SideMenu";
import Hero from "./components/Hero";
import Products from './components/Products';
import Features from './components/Features';
import Footer from './components/Footer';
import CopyRight from "./components/CopyRight";

function Main({ animation }) {

  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => {
    setIsOpen(prev => !prev);
  }

  return (
    <>
      <Navbar handleToggle={handleToggle} />
      <SideMenu isOpen={isOpen} handleToggle={handleToggle} />
      <Hero animation={animation} />
      <Products />
      <Features />
      <Footer />
      <CopyRight />
    </>
  );
}

export default Main;
