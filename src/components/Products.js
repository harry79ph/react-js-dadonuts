import React from 'react';
import { ProductsContainer, ProductSection, ProductWrapper, ProductsHeading } from './styles/Products.styled';
import { products, sections } from './itemLists';
import { CartState } from '../context/Context';
import ProductItem from './ProductItem';

const Products = () => {

    const { state: { cart }, dispatch } = CartState();

    return (
        <ProductsContainer>
            {sections.map((section, i) => {
                return (
                    <ProductSection id={products[i]} key={'section' + i}>
                        <ProductsHeading>{products[i]}</ProductsHeading>
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