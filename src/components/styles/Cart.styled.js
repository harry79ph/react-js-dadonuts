import styled from 'styled-components';
import { CgTrash } from 'react-icons/cg';
import { Link } from 'react-router-dom';
import { ProductButton } from './Products.styled';

export const CartContainer = styled.div`
    color: #26001b;
    background-color: #fff9fd;
    min-height: 100vh;
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
    padding: 0 clamp(3rem, 5vw, 8rem);
    h1 {
        font-size: clamp(1.8rem, 2.2vw, 2.4rem);
        margin: 1em 0;
    }
    h3 {
        font-size: clamp(1.2rem, 1.8vw, 1.5rem);
        display: inline-block;
    }
    @media screen and (max-width: 650px) {
        padding: 0 clamp(0.6rem, 2.6vw, 4rem);
    }
`;

export const CartList = styled.ul`
    transition: all .2s ease-out;
`;

export const CartItem = styled.li`
    display: flex;
    align-items: center;
    align-content: stretch;
    margin-bottom: 1.25rem;
    overflow: hidden;
    min-height: 100px;
    padding: 1rem;
    box-shadow: 1px 2px 1px 1px rgba(255, 210, 168, 0.7);
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
    span {
        margin: 0 min(0.6vw, 10px);
        font-size: clamp(1rem, 1.6vw, 1.4rem);
    }
    @media screen and (max-width: 650px) {
        width: calc(100% - 80px);
    }
`;

export const ItemContent = styled.div`
    flex-grow: 2;
    max-width: 40%;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    h3 {
        font-size: clamp(1.2rem, 1.8vw, 1.5rem);
    }
`;

export const ItemInfo = styled.div`
    display: flex;
    flex-grow: 3;
    align-items: center;
    justify-content: space-between;
    span {
        font-size: clamp(1.2rem, 2vw, 1.8rem);
    }
`;

export const QuantityWrap = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    flex-grow: 3;
`;

export const ItemQuantity = styled.select`
    font-size: 1.2rem;
    background-color: #fff;
    color: inherit;
    border-radius: 3px;
    option {
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
`;

export const ItemRemove = styled.div`
    padding-left: 0;
`;

export const RemoveIcon = styled(CgTrash)`
    display: inline;
    font-size: 2.2rem;
    color: inherit;
    cursor: pointer;
    @media screen and (max-width: 650px) {
        display: ${props => props.display || "none"};
        font-size: 2rem;
    }
`;

export const SubtotalWrap = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: center;
    margin: 1em 0;
    h2 {
        font-size: clamp(1.4rem, 2vw, 1.7rem);
        margin: 1em 5px;
    }
    button {
        margin: 5px;
    }
`;

export const CartButton = styled(ProductButton)`
    a {
        color: inherit;
    }
    @media screen and (max-width: 650px) {
        font-size: 1rem;
        padding: 0.6rem 1rem;
    }
`;