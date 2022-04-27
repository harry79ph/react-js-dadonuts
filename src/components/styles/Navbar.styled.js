import styled from "styled-components";
import { Link } from "react-scroll";
import { CgMenuCake } from "react-icons/cg";
import { CgShoppingCart } from "react-icons/cg";
import { RiAccountCircleLine } from "react-icons/ri";

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
    width: 32px;
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

export const AccountWrapper = styled(Link)`
  display: flex;
  align-items: center;
  color: #fff;
  margin-left: auto;
  margin-right: 0.3em;
  cursor: ${(props) => props.cursor || "pointer"};
  @media screen and (max-width: 650px) {
    display: none;
  }
`;

export const Account = styled(RiAccountCircleLine)`
  display: inline;
  position: relative;
  font-size: 2.2rem;
  @media screen and (max-width: 650px) {
    font-size: 3rem;
  }
  @media screen and (max-width: 420px) {
    font-size: 2.4rem;
  }
`;

export const MenuWrapper = styled.div`
  display: flex;
  position: relative;
  color: #fff;
  a {
    display: block;
    color: inherit;
  }
  span {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    background-color: #ff00b2;
    border-radius: 50%;
    width: 17px;
    height: 17px;
    top: ${(props) => props.right ? "24px" : "16px"};
    left: ${(props) => props.right ? "36px" : "26px"};
    font-weight: bold;
    cursor: pointer;
    opacity: ${(props) => (props.isPresent ? "0" : "1")};
    transition: all 0.3s ease-out;
    @media screen and (max-width: 650px) {
      width: 20px;
      height: 20px;
      top: 24px;
      left: 34px;
    }
  }
`;

export const ShoppingCart = styled(CgShoppingCart)`
  display: inline;
  font-size: ${(props) => props.fontSize || "2.2rem"};
  margin-right: 1.6em;
  height: 100%;
  cursor: ${(props) => props.cursor || "pointer"};
  @media screen and (max-width: 650px) {
    display: ${(props) => props.display || "none"};
    font-size: 3rem;
    margin-right: 0.6em;
  }
`;

export const MenuIcon = styled(CgMenuCake)`
  display: none;
  margin-right: 1.6em;
  cursor: pointer;
  @media screen and (max-width: 650px) {
    display: inline;
    font-size: 3rem;
    margin-right: 0.6em;
  }
  @media screen and (max-width: 420px) {
    font-size: 2.7rem;
  }
`;
