import styled from 'styled-components';
import { CgTrash } from 'react-icons/cg';

export const CartContainer = styled.div`
    color: #000;
    max-width: 100vw;
    line-height: 1;
`;

export const CartContent = styled.div`
    background-color: #ffe4e6;
    padding: clamp(0.6rem, 3.6vw, 4rem);;
`;

export const CartList = styled.ul`
    background-color: #fff;
`;

export const CartItem = styled.li`
    display: flex;
    align-items: center;
    align-content: stretch;
    margin-bottom: 1.25rem;
    overflow: hidden;
    background-color: red;
    min-height: 100px;
    transition: all .2s cubic-bezier(0, 0, .2, 1);
    padding: 1rem;
`;

export const ItemImg = styled.img`
    display: block;
    height: 90px;
    min-width: 60px;
    max-width: 100%;
    @media screen and (max-width: 650px) {
        height: 80px;
    }
`;

export const InnerWrap = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: calc(100% - 80px);
    background: yellow;
`;

export const ItemContent = styled.div`
    padding-left: 1.25rem;
    flex-grow: 1;
`;

export const ItemInfo = styled.div`
    flex-grow: 5;
    display: flex;
    background-color: green;
    align-items: center;
    justify-content: space-between;
    padding-right: 0;
    padding-left: 1.25rem;
    @media screen and (min-width: 650px) {
        display: flex;
        align-items: center;
    }
`;

export const ItemQuantity = styled.select`
    option {
        background-color: #fff;
    }
`;

export const ItemTotal = styled.div`
    min-width: 3rem;
    text-align: center;
`;

export const ItemRemove = styled.div`
    padding-left: 0;
`;

export const RemoveIcon = styled(CgTrash)`
    display: inline;
    font-size: 2.4rem;
    cursor: pointer;
    @media screen and (max-width: 650px) {
        display: ${props => props.display || "none"};
        font-size: 2rem;
    }
`;