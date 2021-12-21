import React from 'react';
import {
    ProductsContainer,
    ProductSection,
    ProductWrapper,
    ProductsHeading,
    ProductTitle,
    ProductCard,
    ProductImg,
    ProductInfo,
    ProductPrice,
    ProductButton
} from './styles/Products.styled';
import { products, sections } from './itemLists';

const Products = () => {
    return (
        <ProductsContainer>
            {sections.map((section, i) => {
                return (
                    <ProductSection id={products[i]} key={'section' + i}>
                        <ProductsHeading>{products[i]}</ProductsHeading>
                        <ProductWrapper>  
                            {section.map((product, index) => {
                                return (
                                    <ProductCard key={index}>
                                        <ProductImg src={product.img} alt={product.name} />
                                        <ProductInfo>
                                            <ProductTitle>{product.name}</ProductTitle>
                                            <ProductPrice>{product.price}</ProductPrice>
                                            <ProductButton>Add to Cart</ProductButton>
                                        </ProductInfo>
                                    </ProductCard>
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