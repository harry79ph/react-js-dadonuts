import CartNav from "./CartNav";
import { CartButton, CartContainer, CartContent, CartList, SubtotalWrap } from "./styles/Cart.styled";
import { CartState } from "../context/Context";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";

const Cart = () => {

    const { state: { cart }, totals, dispatch } = CartState();

    let cartContent;

    if (!cart.length) {
        cartContent = <h3 style={{margin: "50px 0"}}>Cart is Empty!</h3>;
    } else {
        cartContent = cart.map(item => {
            return (
                <CartItem key={'cart' + item.id} item={item} dispatch={dispatch} />
            );
        });
    }

    return (
        <CartContainer>
            <CartNav />
            <CartContent>
                <h1>Your Cart</h1>
                <CartList>
                    {cartContent}
                </CartList>
                <SubtotalWrap>
                    <h2>Subtotal: £{totals[1].price}</h2>
                    <div>
                        <CartButton disabled={Number(totals[1].price) === 0}>Proceed to Checkout</CartButton>
                        <CartButton><Link to="/">Continue Shopping</Link></CartButton>
                    </div>
                </SubtotalWrap>
            </CartContent>
        </CartContainer>
    );
}

export default Cart;