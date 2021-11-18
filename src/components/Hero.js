import Navbar from "./Navbar";
import { HeroBtn, HeroContainer, HeroContent, HeroH1, HeroItems, HeroP } from "./styles/Hero.styled";

const Hero = () => {
    return (
        <HeroContainer>
            <Navbar />
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