import styled from 'styled-components';
import { CgTrash } from 'react-icons/cg';

export const CartContainer = styled.div`
    color: #000;
    line-height: 1;
`;

export const CartContent = styled.div`
    background-color: #ffe4e6;
    height: 1000px;
`;

export const CartList = styled.ul`
    background-color: #fff;
    height: 800px;
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
    padding: 1.25rem;
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
    width: calc(100% - 120px);
    background: yellow;
`;

export const ItemContent = styled.div`
    padding-left: 1.25rem;
`;

export const ItemInfo = styled.div`
    display: flex;
    align-items: center;
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