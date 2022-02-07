import React from 'react';
import { ProductsContainer, ProductSection, ProductWrapper, ProductsHeading, SortWrap, SortButton } from './styles/Products.styled';
import { products } from '../data/itemLists';
import { CartState } from '../context/Context';
import ProductItem from './ProductItem';

const Products = () => {

    const { state: { cart, sections }, dispatch } = CartState();

    return (
        <ProductsContainer>
            {sections.map((section, i) => {
                return (
                    <ProductSection id={products[i]} key={'section' + i}>
                        <ProductsHeading>{products[i]}</ProductsHeading>
                        <SortWrap>
                            <span>Sort By:</span>
                            <SortButton onClick={() => {dispatch({
                                type: 'SORT_BY_NAME',
                                payload: i
                            })}}>name</SortButton>
                            <SortButton onClick={() => {dispatch({
                                type: 'SORT_BY_PRICE',
                                payload: i
                            })}}>price</SortButton>
                        </SortWrap>
                        <ProductWrapper>
                            {section.map((product, i) => {
                                return (
                                    <ProductItem key={'product' + i} product={product} cart={cart} dispatch={dispatch} />
                                );
                            })}
                        </ProductWrapper>
                    </ProductSection>
                );
            })}
        </ProductsContainer>
    );
}

export default Products;