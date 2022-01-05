import styled from 'styled-components';
import { Link as RouteLink } from "react-router-dom";
import { Link } from 'react-scroll';
import { BsArrowBarRight } from 'react-icons/bs';
import { CartItemWrap, QuantityWrap, ItemImg } from "./CartItem.styled";

export const SideMenuContainer = styled.aside`
  position: fixed;
  z-index: 100;
  width: 300px;
  height: 100%;
  background: rgba(255, 210, 168, 0.95);
  text-shadow: 0px 0px 3px rgba(255, 210, 168);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-content: stretch;
  transition: 0.3s ease-in-out;
  li {
    font-size: 1.2rem;
    text-align: center;
  }
  right: ${({ isOpen }) => (isOpen ? '0' : '-400px')};
  h2 {
    text-shadow: 0px 0px 3px rgba(255, 210, 168);
  }
  @media screen and (max-width: 350px) {
    width: 100%;
    background: rgba(255, 210, 168, 0.7);
  }
`;

export const IconWrapper = styled.div`
  background: transparent;
  border: transparent;
  cursor: pointer;
  @media screen and (max-width: 768px) {
    top: 0.8rem;
    left: 1.4rem;
  }
`;

export const CloseIcon = styled(BsArrowBarRight)`
  color: #000;
  margin: 1.6rem 0 0 1.6rem;
  font-size: 2.4rem;
  filter: drop-shadow(0px 0px 3px rgba(255, 210, 168));
`;

export const SidebarMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  h2 {
    text-align: center;
    /* text-shadow: 0px 0px 3px rgba(255, 210, 168); */
  }
  @media screen and (min-width: 992px) {
    display: none;
  }
`;

export const CartHeader = styled.h2`
  text-align: center;
  text-shadow: 0px 0px 3px rgba(255, 210, 168);
  @media screen and (min-width: 992px) {
    padding-top: 10px;
  }
`;

export const CartContent = styled.ul`
  display: flex;
  flex-grow: 1;
  width: 100%;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  overflow-y: auto;
`;

export const SideItemWrapper = styled(CartItemWrap)`
  display: flex;
  align-content: stretch;
  align-items: center;
  justify-content: space-between;
  min-height: 80px;
  width: 100%;
  margin-bottom: 0;
  padding: 1em;
  box-shadow: none;
`;

export const SideItemContent = styled(QuantityWrap)`
  flex: 1;
  font-size: 1.2rem;
  justify-content: space-around;
  padding: 1em;
  .times {
    font-weight: 700;
  }
`


export const SideMenuLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #000;
  font-size: 1.6rem;
  text-transform: capitalize;
  transition: 0.2s ease-in-out;
  &:hover, &.active{
    color: #fff;
  }
`;

export const SideImg = styled(ItemImg)`
  height: 50px;
`

export const SideBtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SidebarRoute = styled(RouteLink)`
  background: #ff00b2;
  white-space: nowrap;
  padding: 10px 24px;
  margin: 20px;
  color: #fff;
  font-size: 20px;
  font-weight: 700;
  border-radius: 3px;
  border: none;
  transition: 0.2s ease-in-out;
  &:hover {
    transition: 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`;
