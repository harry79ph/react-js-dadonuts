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
import { products, donutList, desertList, cookieList } from './itemLists';

const Products = () => {
    return (
        <ProductsContainer>
            <ProductSection id={products[0]}>
                <ProductsHeading>{products[0]}</ProductsHeading>
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
            <ProductSection id={products[1]}>
                <ProductsHeading>{products[1]}</ProductsHeading>
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
            <ProductSection id={products[2]}>
                <ProductsHeading>{products[2]}</ProductsHeading>
                <ProductWrapper>
                    {cookieList.map((product, index) => {
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