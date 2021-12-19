import styled from "styled-components";

export const FeatureCard = styled.div`
    margin: 2rem;
    width: 24%;
    box-shadow: 3px 5px 1px 1px rgba(255, 210, 168, 0.7);
    @media screen and (max-width: 992px) {
      width: 100%;
    }
`;

export const FeatureWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 0 auto;
`;

export const FeatureInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    svg{
      font-size: 6rem;
      margin: 3rem;
    }
`;

export const FeatureDesc = styled.p`
  padding: 0.3rem 0.5rem;
  line-height: 1.2;
  font-size: 1.2rem;
`;

export const FeatureButton = styled.button`
  font-size: 1.1rem;
  padding: 0.8rem 1.2rem;
  margin: 1.4rem;
  border: none;
  border-radius: 2px;
  background: #ff00b2;
  color: #fff;
  cursor: pointer;
  transition: 0.2s ease-out;

  &:hover {
    background: #ffd2a8;
    color: #000;
  }
`;