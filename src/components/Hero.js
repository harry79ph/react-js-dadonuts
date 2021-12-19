
import { HeroBtn, HeroContainer, HeroContent, HeroH1, HeroItems, HeroP } from "./styles/Hero.styled";

const Hero = () => {
    

    return (
        <HeroContainer>
            <HeroContent>
                <HeroItems>
                    <HeroH1>Tastiest hand made doughnuts</HeroH1>
                    <HeroP>Irresistibly delicious!!</HeroP>
                    <HeroBtn>Shop Now</HeroBtn>
                </HeroItems>
            </HeroContent>
        </HeroContainer>
    );
}
 
export default Hero;