import styled from "styled-components";

export const ProductsContainer = styled.div`
  min-height: 100vh;
  padding: 2rem calc((100vw - 1300px) / 2);
  background: #feafc4;
  color: #fff;
`;

export const ProductSection = styled.section`
  padding-bottom: 2rem;
`;

export const ProductsHeading = styled.h1`
  font-size: clamp(2rem, 2.2vw, 3rem);
  font-size: 2.1rem;
  font-weight: 500;
  text-transform: capitalize;
  text-align: center;
  margin: 2rem 0;
`;

export const SortWrap = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
  padding-left: 20rem;
  @media screen and (max-width: 650px) {
    margin-bottom: 0.5rem;
    padding-left: 0;
    text-align: start;
  }
`;

export const SortButtonsWrap = styled.div`
  &.list-btn {
    display: none;
    @media screen and (max-width: 650px) {
      display: block;
      margin-right: 2vw;
    }
  }
`;

export const SortButton = styled.button`
  margin: 0.15rem;
  padding: 0.3rem 0.7rem;
  border: none;
  background: #ff00b2;
  color: #fff;
  cursor: pointer;
  transition: all 0.2s ease-out;
  &:focus,
  &:active,
  &:hover {
    background: #ffd2a8;
    color: #000;
  }
`;

export const ProductWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
  @media screen and (max-width: 650px) {
    &.list > div {
      flex-direction: row;
      width: 90%;
      margin: 0.5rem;
      & img {
        height: 110px;
        margin-left: 7vw;
      }
      & .product-info {
        flex: 1;
        padding: 1rem 0;
        p {
          margin-bottom: 0;
          font-size: 17px;
        }
        button {
          padding: 0.4rem 0.9rem;
          font-size: 16px;
          span {
            display: none;
          }
        }
      }
    }
  }
`;

export const ProductCard = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2rem;
  width: 250px;
  box-shadow: 1px 2px 1px 1px rgba(255, 210, 168, 0.7);
  transition: width 0.2s ease-out;
  @media screen and (max-width: 650px) {
      margin: 1rem;
    }
`;

export const ProductImg = styled.img`
  height: 180px;
  display: block;
  max-width: 100%;
  margin: 0 auto;
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem 0 2rem 0;
  text-align: center;
`;

export const ProductTitle = styled.h2`
  font-size: 1.2rem;
`;

export const ProductPrice = styled.p`
  margin-bottom: 1rem;
  font-size: 1.4rem;
`;

export const ProductButton = styled.button`
  font-size: 1.2rem;
  padding: 0.7rem 1.4rem;
  border: none;
  border-radius: 2px;
  background: #ff00b2;
  color: #fff;
  cursor: pointer;
  transition: background 0.2s ease-out;
  &:hover,
  &.active {
    background: #ffd2a8;
    color: #000;
  }
`;
