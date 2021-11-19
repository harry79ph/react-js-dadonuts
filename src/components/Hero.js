import React, { useState } from "react";
import Navbar from "./Navbar";
import SideBar from "./SideBar";
import { HeroBtn, HeroContainer, HeroContent, HeroH1, HeroItems, HeroP } from "./styles/Hero.styled";

const Hero = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
        setIsOpen(!isOpen);
    }
    return (
        <HeroContainer>
            <Navbar toggle={toggle}/>
            <SideBar isOpen={isOpen} toggle={toggle}/>
            <HeroContent>
                <HeroItems>
                    <HeroH1>Tastiest doughnuts ever</HeroH1>
                    <HeroP>Irresistibly delicious!!</HeroP>
                    <HeroBtn>Order Now</HeroBtn>
                </HeroItems>
            </HeroContent>
        </HeroContainer>
    );
}
 
export default Hero;