import { ProductButton, ProductCard, ProductImg, ProductInfo, ProductPrice, ProductTitle } from "./styles/Products.styled";

const ProductItem = ({ cart, dispatch, product, key }) => {
    
    return (
        <ProductCard key={key}>
            <ProductImg src={product.img} alt={product.name} />
            <ProductInfo>
                <ProductTitle>{product.name}</ProductTitle>
                <ProductPrice>£{product.price}</ProductPrice>
                {cart.some((p) => p.id === product.id) ? (
                    <ProductButton className='active' onClick={() => dispatch({
                        type: 'REMOVE_FROM_CART',
                        payload: product
                    })}>Remove from Cart</ProductButton>
                ) : (
                    <ProductButton onClick={() => dispatch({
                        type: 'ADD_TO_CART',
                        payload: product
                    })}>Add to Cart</ProductButton>
                )}
            </ProductInfo>
        </ProductCard>
    );
}

export default ProductItem;