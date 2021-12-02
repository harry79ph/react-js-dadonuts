import styled from 'styled-components';
import { Link } from "react-router-dom";
import { CgMenuCake } from 'react-icons/cg';
import { CgShoppingCart } from 'react-icons/cg';

export const Nav = styled.nav`
    background: transparent;
    height: 100px;
    display: flex;
    justify-content: space-between;
    font-weight: 700;
`;

export const NavLink = styled(Link)`
    background: -webkit-linear-gradient(#cc0a14, #e3e395);
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
        width: 38px;
        margin-right: 5px;
    }

    @media screen and (max-width: 400px) {
        top: 10px;
        left: 25px;
    }
`;

export const MenuWrapper = styled.div`
    display: block;
    position: absolute;
    top: 1.2rem;
    right: 2rem;
    color: #fff;
    p {
        font-weight: bold;
        padding-left: 0.5em;
    }
`;

export const ShoppingCart = styled(CgShoppingCart)`
    display: none;
    font-size: 3rem;
        cursor: pointer;
    @media screen and (min-width: 768px) {
        display: inline;
    }
`;

export const MenuIcon = styled(CgMenuCake)`
    font-size: 3rem;
    cursor: pointer;

    @media screen and (min-width: 768px) {
        display: none;
    }
`;