import styled from "styled-components";
import BgImg from '../../images/doughnut-bg.jpg';

export const HeroContainer = styled.div`
    background: linear-gradient(to right, rgba(255, 0, 178, 0.1), rgba(255, 0, 178, 0.01)),
    url(${BgImg});
    background-color: #cf6e9e;//If the images cannot be loaded—for instance, when the network is down—the background color will be used as a fallback.
    height: 100vh;
    background-position: center;
    background-size: cover;
    @media screen and (max-width: 1080px) {
      background-position: 90% 50%;
    }
`;

export const HeroContent = styled.div`
  height: min(calc(100vh - 100px), 100%);
  padding: 0 calc((100vw - 1300px) / 2);
`;

export const HeroItems = styled.div`
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

  @media screen and (max-width: 650px) {
    width: 100%;
  }
`;

export const HeroH1 = styled.h1`
  font-size: clamp(2rem, 5vw, 3rem);
  margin-bottom: 1rem;
  box-shadow: 3px 5px  1px 1px rgba(255, 210, 168, 0.7);
  letter-spacing: 3px;
  text-transform: uppercase;
`;

export const HeroP = styled.p`
  font-size: clamp(1.5rem, 2.5vw, 3rem);
  margin-bottom: 2rem;
`;

export const HeroBtn = styled.button`
  font-size: 1.4rem;
  padding: 1rem 4rem;
  border: none;
  border-radius: 3px;
  background: #ff00b2;
  color: #fff;
  transition: 0.2s ease-out;

  &:hover {
    background: #ffd2a8;
    transition: 0.2s ease-out;
    cursor: pointer;
    color: #000;
  }
`;