import { H1Wrapper, HomeBtn, HomeContainer, HomeContent, HomeH1, HomeItems, HomeP } from "./styles/Home.styled";
import { connect } from "react-redux";

const Home = ({ animation }) => {

    console.log(animation);
    
    return (
        <HomeContainer id="home">
            <HomeContent>
                <HomeItems>
                    <H1Wrapper>
                        <HomeH1 className={animation}>Tastiest hand made doughnuts</HomeH1>
                    </H1Wrapper>
                    <HomeP className={animation}>Irresistibly delicious!!</HomeP>
                    <HomeBtn activeClass="active" to="donuts" spy={true} smooth={true} offset={-120} duration={1000}>Shop Now</HomeBtn>
                </HomeItems>
            </HomeContent>
        </HomeContainer>
    );
}
 
const mapStateToProps = state => {
    return {
        animation: state.shop.animation
    }
}

export default connect(mapStateToProps)(Home);