import styled from "styled-components";
import BgImg from '../../images/doughnut-bg.jpg';

export const HeroContainer = styled.div`
    background: linear-gradient(to right, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.05)),
    url(${BgImg});
    background-color: #cf6e9e;//If the images cannot be loaded—for instance, when the network is down—the background color will be used as a fallback.
    height: 100vh;
    background-position: center;
    background-size: cover;
`;

export const HeroContent = styled.div`
  height: min(calc(100vh - 80px), 100%);
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
  box-shadow: 3px 5px #e9ba23;
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
  background: #9e2edb;
  color: #fff;
  transition: 0.2s ease-out;

  &:hover {
    background: #ffc500;
    transition: 0.2s ease-out;
    cursor: pointer;
    color: #000;
  }
`;