import styled from 'styled-components';

export const ItemWrapper = styled.ul`
    display: flex;
    align-items: center;
    padding-right: 3em;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const ListItem = styled.li`
    list-style: none;
    font-size: 1.6rem;
    margin: 0 0.6em;
`;