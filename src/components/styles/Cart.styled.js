import styled from 'styled-components';
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