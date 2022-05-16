import { lazy, Suspense, useState } from "react";
import Navbar from "./components/Navbar";
import SideMenu from "./components/SideMenu";
import Hero from "./components/Hero";
import Features from './components/Features';
import Footer from './components/Footer';
import CopyRight from "./components/CopyRight";
import { ProductLoader } from "./components/styles/Products.styled";

const Products = lazy(() => import("./components/Products"));

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
      <Suspense fallback={<ProductLoader>Please wait. Loading...</ProductLoader>}>
        <Products />
      </Suspense>
      <Features />
      <Footer />
      <CopyRight />
    </>
  );
}

export default Main;
