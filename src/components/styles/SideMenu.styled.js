import styled from 'styled-components';
import { Link as RouteLink } from "react-router-dom";
import { Link } from 'react-scroll';
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
  @media ${({theme}) => theme.mediaQueries['md']} {
    top: 1.4rem;
    left: 1.4rem;
  }
`;

export const CloseIcon = styled.p`
  margin: 1.2rem 0 0 1.6rem;
  font-size: 1.4rem;
  font-weight: bold;
  filter: drop-shadow(0px 0px 3px rgba(255, 210, 168));
  transition: 0.2s ease-in-out;
  &:hover {
    color: ${props => props.theme.colors.light};
  }
`;

export const LoginWrapper = styled.div`
  width: 100%;
  text-align: center;
  font-size: 1.2rem;
`;

export const LoginButton = styled.button`
  font-size: 0.9rem;
  margin: 0.15rem;
  padding: 0.3rem 0.7rem;
  border: none;
  background: ${props => props.theme.colors.secondary};
  color: ${props => props.theme.colors.light};
  cursor: pointer;
  transition: all 0.2s ease-out;
  &:focus,
  &:active,
  &:hover {
    background: ${props => props.theme.colors.light};
    color: ${props => props.theme.colors.dark};
  }
`;

export const SidebarMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  h2 {
    text-align: center;
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
  svg {
    font-size: 1.8rem;
  }
`;

export const SideItemContent = styled(QuantityWrap)`
  flex: 1;
  font-size: 1.2rem;
  justify-content: space-around;
  padding: 1em;
  .times {
    font-weight: 700;
  }
`;


export const SideMenuLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.theme.colors.dark};
  font-size: 1.6rem;
  text-transform: capitalize;
  transition: 0.2s ease-in-out;
  &:hover, &.active{
    color: ${props => props.theme.colors.light};
  }
`;

export const SideImg = styled(ItemImg)`
  height: 50px;
`;

export const SideBtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SidebarRoute = styled(RouteLink)`
  background: ${props => props.theme.colors.secondary};
  white-space: nowrap;
  padding: 10px 24px;
  margin: 20px;
  color: ${props => props.theme.colors.light};
  font-size: 1rem;
  font-weight: 700;
  border-radius: 3px;
  border: none;
  transition: 0.2s ease-in-out;
  &:hover {
    transition: 0.2s ease-in-out;
    background: ${props => props.theme.colors.light};
    color: ${props => props.theme.colors.dark};
  }
`;
