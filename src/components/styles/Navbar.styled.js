import styled from 'styled-components';
import { Link } from "react-router-dom";
import { CgMenuCake } from 'react-icons/cg';
import { CgShoppingCart } from 'react-icons/cg';

export const Nav = styled.nav`
    background: rgba(254, 175, 196, 0.95);
    height: 80px;
    display: flex;
    justify-content: space-between;
    font-weight: 700;
    position: fixed;
    width: 100%;
`;

export const NavLink = styled(Link)`
    background: -webkit-linear-gradient(#ffd2a8, #de00a2);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-left: 1.8em;
    font-size: 2rem;
    display: flex;
    align-items: center;
    text-decoration: none;
    cursor: pointer;
    img{
        width: 36px;
        margin-right: 5px;
        transform: rotate(-20deg);
    }

    @media screen and (max-width: 400px) {
        top: 10px;
        left: 25px;
    }
`;

export const MenuWrapper = styled.div`
    display: block;
    position: relative;
    top: 1.2rem;
    right: 2rem;
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
        p {
            display: block;
            padding-left: 2px;
        }
    }
`;

export const ShoppingCart = styled(CgShoppingCart)`
    display: none;
    font-size: 3rem;
    margin-right: 0.8em;
    cursor: pointer;
    
    @media screen and (min-width: 992px) {
        display: inline;
    }
`;

export const MenuIcon = styled(CgMenuCake)`
    font-size: 3rem;
    cursor: pointer;

    @media screen and (min-width: 992px) {
        display: none;
    }
`;