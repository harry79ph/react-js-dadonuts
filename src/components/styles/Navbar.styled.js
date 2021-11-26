import styled from 'styled-components';
import { Link } from "react-router-dom";
import { CgMenuCake } from 'react-icons/cg';

export const Nav = styled.nav`
    background: transparent;
    height: 80px;
    display: flex;
    justify-content: center;
    font-weight: 700;
`;

export const NavLink = styled(Link)`
    background: -webkit-linear-gradient(#ff00f2, #f0d478);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 2.5rem;
    display: flex;
    align-items: center;
    text-decoration: none;
    cursor: pointer;

    @media screen and (max-width: 400px) {
        top: 10px;
        left: 25px;
    }
`;

export const MenuWrapper = styled.div`
    display: block;
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    color: #fff;
    p {
        font-weight: bold;
    }
`;

export const MenuIcon = styled(CgMenuCake)`
    font-size: 3rem;
    cursor: pointer;
`;