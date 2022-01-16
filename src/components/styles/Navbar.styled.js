import styled from "styled-components";
import { Link } from "react-scroll";
import { CgMenuCake } from "react-icons/cg";
import { CgShoppingCart } from "react-icons/cg";

export const NavContainer = styled.nav`
  background: rgba(254, 175, 196, 0.95);
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 700;
  position: ${(props) => props.position || "fixed"};
  width: 100%;
  @media screen and (max-width: 650px) {
    height: 60px;
  }
`;

export const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  margin-left: 2em;
  font-size: 1.6rem;
  img {
    width: 36px;
    margin-right: 5px;
  }
  p {
    display: block;
    background: -webkit-linear-gradient(#ffd2a8, #e83d71);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-shadow: initial;
  }
  &:hover,
  &.active > p {
    background: -webkit-linear-gradient(#ffd065, #de00a2);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  @media screen and (max-width: 650px) {
    margin-left: 1em;
    font-size: 1.5rem;
    img {
      width: 27px;
      margin-right: 4px;
    }
  }
  @media screen and (max-width: 420px) {
    margin-left: 0.6em;
    font-size: 1.5rem;
    img {
      width: 24px;
      margin-right: 3px;
    }
  }
`;

export const ItemWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  text-transform: capitalize;
  @media screen and (max-width: 992px) {
    display: ${(props) => props.display || "none"};
  }
`;

export const MenuWrapper = styled.div`
  display: block;
  position: relative;
  color: #fff;
  span {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    background-color: #ff00b2;
    border-radius: 50%;
    width: 22px;
    height: 22px;
    top: 20px;
    left: 36px;
    font-weight: bold;
    opacity: ${(props) => (props.isPresent ? "0" : "1")};
    @media screen and (max-width: 650px) {
      top: 0;
      right: ${(props) => props.right || "2rem"};
      width: 20px;
      height: 20px;
      top: 16px;
      left: 30px;
    }
  }
`;

export const ShoppingCart = styled(CgShoppingCart)`
  display: inline;
  font-size: 3rem;
  margin-right: 1.6em;
  cursor: ${(props) => props.cursor || "pointer"};
  @media screen and (max-width: 650px) {
    display: ${(props) => props.display || "none"};
    font-size: 3rem;
    margin-right: 0.6em;
  }
  @media screen and (max-width: 420px) {
    font-size: 2.4rem;
  }
`;

export const MenuIcon = styled(CgMenuCake)`
  display: none;
  font-size: 3rem;
  margin-right: 1.6em;
  cursor: pointer;
  @media screen and (max-width: 650px) {
    display: inline;
    font-size: 3rem;
    margin-right: 0.6em;
  }
  @media screen and (max-width: 420px) {
    font-size: 2.4rem;
  }
`;
