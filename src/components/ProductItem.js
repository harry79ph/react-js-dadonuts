import { ProductButton, ProductCard, ProductImg, ProductInfo, ProductPrice, ProductTitle } from "./styles/Products.styled";
import { connect } from 'react-redux';
import { addToCart, removeFromCart } from '../redux/actions/cart-actions'

const ProductItem = ({ cart, product, addToCart, removeFromCart  }) => {
    
    return (
        <ProductCard>
            <ProductImg src={product.img} alt={product.name} />
            <ProductInfo>
                <ProductTitle>{product.name}</ProductTitle>
                <ProductPrice>£{product.price}</ProductPrice>
                {cart.some((item) => item.id === product.id) ? (
                    <ProductButton className='active' onClick={() => removeFromCart(product)}>Remove from Cart</ProductButton>
                ) : (
                    <ProductButton onClick={() => addToCart(product)}>Add to Cart</ProductButton>
                )}
            </ProductInfo>
        </ProductCard>
    );
}

const mapDispatchToProps = dispatch => {
    return {
        addToCart: (product) => dispatch(addToCart(product)),
        removeFromCart: (product) => dispatch(removeFromCart(product))
    }
}

export default connect(null, mapDispatchToProps)(ProductItem);//we said null because we don't use state,we don't map anything from the state to props