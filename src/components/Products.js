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
import { donutList, desertList } from './productLists';

const Products = () => {
    return (
        <ProductsContainer>
            <ProductSection>
                <ProductsHeading>Donuts</ProductsHeading>
                <ProductWrapper>
                    {donutList.map((product, index) => {
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
            <ProductSection>
                <ProductsHeading>Desserts</ProductsHeading>
                <ProductWrapper>
                    {desertList.map((product, index) => {
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
        </ProductsContainer>

    );
}

export default Products;