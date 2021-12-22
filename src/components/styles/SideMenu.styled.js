import styled from 'styled-components';
import { Link } from 'react-scroll';
import { BsArrowBarRight } from 'react-icons/bs';

export const SideMenuContainer = styled.aside`
  position: fixed;
  z-index: 100;
  width: 300px;
  height: 100%;
  background: rgba(255, 210, 168, 0.95);
  display: grid; 
  grid-template-columns: 1fr; 
  grid-template-rows: 2.5fr 0.5fr 5fr 1fr;
  justify-items: stretch;
  align-items: center;
  top: 0;
  transition: 0.3s ease-in-out;
  right: ${({ isOpen }) => (isOpen ? '0' : '-400px')};
  @media screen and (min-width: 992px) {
    grid-template-rows: 1.6fr 8fr 1.6fr;
  }
  @media screen and (max-width: 350px) {
    width: 100%;
    background: rgba(255, 210, 168, 0.7);
  }
`;

export const IconWrapper = styled.div`
  position: absolute;
  top: 1.6rem;
  left: 1.6rem;
  background: transparent;
  border: transparent;
  cursor: pointer;
  @media screen and (max-width: 768px) {
    top: 0.4rem;
    left: 1.4rem;
  }
`;

export const CloseIcon = styled(BsArrowBarRight)`
  color: #000;
  font-size: 2.4rem;
`;

export const SidebarMenu = styled.div`
  display: flex;
  flex-direction: column;
  h2 {
    padding-top: 1rem;
    text-align: center;
  }
  @media screen and (min-width: 992px) {
    display: none;
  }
`;

export const CartHeader = styled.h2`
  text-align: center;
  @media screen and (min-width: 992px) {
    padding-top: 60px;
  }
`;

export const CartContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  overflow-y: auto;
  ul {
    li {
      font-size: 1.4rem;
    }
  }
`;

export const SideMenuLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #000;
  font-size: 1.6rem;
  text-decoration: none;
  text-transform: capitalize;
  list-style: none;
  text-shadow: 0px 0px 3px rgba(255, 210, 168);
  transition: 0.2s ease-in-out;
  &:hover, &.active{
    color: #fff;
  }
`;

export const SideBtnWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const SidebarRoute = styled(Link)`
  background: #ff00b2;
  white-space: nowrap;
  padding: 10px 24px;
  color: #fff;
  font-size: 20px;
  font-weight: 700;
  border-radius: 3px;
  border: none;
  transition: 0.2s ease-in-out;
  text-decoration: none;
  &:hover {
    transition: 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`;
