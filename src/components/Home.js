
import { HomeBtn, HomeContainer, HomeContent, HomeH1, HomeItems, HomeP } from "./styles/Home.styled";

const Home = () => {
    

    return (
        <HomeContainer id="home">
            <HomeContent>
                <HomeItems>
                    <HomeH1>Tastiest hand made doughnuts</HomeH1>
                    <HomeP>Irresistibly delicious!!</HomeP>
                    <HomeBtn activeClass="active" to="donuts" spy={true} smooth={true} offset={-120} duration={1000}>Shop Now</HomeBtn>
                </HomeItems>
            </HomeContent>
        </HomeContainer>
    );
}
 
export default Home;