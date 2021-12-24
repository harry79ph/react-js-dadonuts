import styled from 'styled-components';

export const CartHeader = styled.h2`
    color: #fff;
    text-shadow: 0px 0px 3px rgba(255, 0, 178, 0.3);
    text-decoration: none;
    line-height: 1;
    text-align: center;
    font-size: clamp(1.4rem, 2.2vw, 2rem);
    margin: 0 0.8em;
    font-weight: 500;
    @media screen and (max-width: 420px) {
        display: none;
    }
`;