import styled from 'styled-components';
import { CgTrash } from 'react-icons/cg';
import { Link } from 'react-router-dom';
import { ProductButton } from './Products.styled';

export const CartContainer = styled.div`
    color: #000;
    max-width: 100vw;
    line-height: 1;
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
    img {
        width: 36px;
        margin-right: 5px;
        transform: rotate(-20deg);
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

export const CartContent = styled.div`
    background-color: #ffe4e6;
    padding: 0 clamp(3rem, 5vw, 8rem);
    h1 {
        margin: 1em 0;
    }
    h3 {
        display: inline-block;
    }
    @media screen and (max-width: 650px) {
        padding: 0 clamp(0.6rem, 2.6vw, 4rem);
    }
`;

export const CartList = styled.ul`
    background-color: #fff;
    transition: all .2s ease-out;
`;

export const CartItem = styled.li`
    display: flex;
    align-items: center;
    align-content: stretch;
    margin-bottom: 1.25rem;
    overflow: hidden;
    background-color: red;
    min-height: 100px;
    padding: 1rem;
    @media screen and (max-width: 650px) {
        padding: 0;
    }
`;

export const ItemImg = styled.img`
    display: block;
    height: 100px;
    min-width: 60px;
    max-width: 100%;
    @media screen and (max-width: 650px) {
        height: 80px;
    }
`;

export const InnerWrap = styled.div`
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: space-between;
    width: calc(100% - 100px);
    background: yellow;
    @media screen and (max-width: 650px) {
        width: calc(100% - 80px);
    }
`;

export const ItemContent = styled.div`
    flex-grow: 2;
    max-width: 40%;
    display: flex;
    flex-wrap: wrap;
`;

export const ItemInfo = styled.div`
    display: flex;
    flex-grow: 3;
    background-color: lime;
    align-items: center;
    justify-content: space-between;
`;

export const QuantityWrap = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    flex-grow: 3;
`;

export const ItemQuantity = styled.select`
    option {
        background-color: #fff;
        text-align: center;
    }
`;

export const ItemTotal = styled.div`
    min-width: 3rem;
    flex-grow: 4;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding-left: 2px;
    span {
        font-size: 1.2em;
    }
`;

export const ItemRemove = styled.div`
    padding-left: 0;
    flex-grow: 1;
`;

export const RemoveIcon = styled(CgTrash)`
    display: inline;
    font-size: 2.2rem;
    cursor: pointer;
    @media screen and (max-width: 650px) {
        display: ${props => props.display || "none"};
        font-size: 2rem;
    }
`;

export const SubtotalWrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 1em 0;
    h3 {
        font-size: 1.4rem;
    }
    button {
        margin: 5px;
    }
`;

export const CartButton = styled(ProductButton)`
    a {
        color: inherit;
    }
`;