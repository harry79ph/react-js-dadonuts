import styled from 'styled-components';
import { Link } from 'react-scroll';
import BgImg from '../../images/doughnut-bg.jpg';

export const HomeContainer = styled.div`
    background-image: linear-gradient(to right, rgba(255, 0, 178, 0.15), rgba(255, 0, 178, 0.01)),
    url(${BgImg});
    background-color: #fec3c7;//If the images cannot be loaded—for instance, when the network is down—the background color will be used as a fallback.
    height: 100vh;
    background-position: center;
    background-size: cover;
    @media screen and (max-width: 992px) {
      background-position: 90% 50%;
    }
`;

export const HomeContent = styled.div`
  height: 100vh;
  padding: 0 calc((100vw - 1300px) / 2);
  @media screen and (max-width: 420px) {
    padding-top: 30vh;
  }
`;

export const HomeItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 100%;
  max-height: 100%;
  padding: 0 2rem;
  width: 550px;
  color: #fff;
  line-height: 1;
  font-weight: bold;
  transition: all .2s ease-out;
  @media screen and (max-width: 650px) {
    width: 100%;
  }
`;

export const HomeH1 = styled.h1`
  font-size: clamp(2rem, 5vw, 3rem);
  margin-bottom: 1rem;
  box-shadow: 3px 5px 1px 1px rgba(255, 210, 168, 0.7);
  letter-spacing: 3px;
  text-transform: uppercase;
`;

export const HomeP = styled.p`
  font-size: clamp(1.5rem, 2.5vw, 3rem);
  margin-bottom: 2rem;
`;

export const HomeBtn = styled(Link)`
  font-size: 1.6rem;
  padding: 1rem 3rem;
  border: none;
  border-radius: 3px;
  background: #ff00b2;
  color: #fff;
  transition: 0.2s ease-out;
  &:hover {
    background: #ffd2a8;
    color: #000;
  }
`;