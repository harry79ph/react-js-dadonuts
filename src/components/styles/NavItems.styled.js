import styled from 'styled-components';
import { Link } from "react-router-dom";

export const ItemWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding-right: 10em;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const LinkItem = styled(Link)`
    color: rgba(255, 255, 255, 0.7);
    text-decoration: none;
    font-size: 2rem;
    margin: 0 0.8em;
    font-weight: 500;
    transition: 0.2s ease-out;
    &:hover{
        color: #fff;
    }
`;