import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import SideBar from "./SideBar";
import { HeroBtn, HeroContainer, HeroContent, HeroH1, HeroItems, HeroP } from "./styles/Hero.styled";

const Hero = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [text, setText] = useState('');
    const toggle = () => {
        setIsOpen(!isOpen);
    }
    useEffect(() => {
        window.innerWidth > 768 ? setText('Cart') : setText('Menu');
    }, []);

    return (
        <HeroContainer>
            <Navbar toggle={toggle} text={text}/>
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