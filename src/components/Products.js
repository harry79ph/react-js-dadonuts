import React from 'react';
import { ProductsContainer, ProductSection, ProductWrapper, ProductsHeading, SortWrap, SortButton } from './styles/Products.styled';
import { products } from '../data/itemLists';
import ProductItem from './ProductItem';
import { connect } from 'react-redux';
import { sortByName, sortByPrice } from '../redux/actions/cart-actions';

const Products = ({ sections, cart, sortByName, sortByPrice }) => {

    console.log(cart);
    console.log(sections);

    return (
        <ProductsContainer>
            {sections.map((section, i) => {
                return (
                    <ProductSection id={products[i]} key={'section' + i}>
                        <ProductsHeading>{products[i]}</ProductsHeading>
                        <SortWrap>
                            <span>Sort By:</span>
                            <SortButton tabIndex="1" onClick={() => sortByName(i)}>name</SortButton>
                            <SortButton tabIndex="2" onClick={() => sortByPrice(i)}>price</SortButton>
                        </SortWrap>
                        <ProductWrapper>
                            {section.map((product, i) => {
                                return (
                                    <ProductItem key={'product' + i} product={product} cart={cart} />
                                );
                            })}
                        </ProductWrapper>
                    </ProductSection>
                );
            })}
        </ProductsContainer>
    );
}

const mapStateToProps = state => {
    return {
        sections: state.shop.sections,
        cart: state.shop.cart
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        sortByName: (index) => dispatch(sortByName(index)),
        sortByPrice: (index) => dispatch(sortByPrice(index))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);