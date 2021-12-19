
import { HomeBtn, HomeContainer, HomeContent, HomeH1, HomeItems, HomeP } from "./styles/Home.styled";

const Home = () => {
    

    return (
        <HomeContainer>
            <HomeContent>
                <HomeItems>
                    <HomeH1>Tastiest hand made doughnuts</HomeH1>
                    <HomeP>Irresistibly delicious!!</HomeP>
                    <HomeBtn>Shop Now</HomeBtn>
                </HomeItems>
            </HomeContent>
        </HomeContainer>
    );
}
 
export default Home;