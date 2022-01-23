import CartNav from "./CartNav";
import { CartButton, CartContainer, CartContent, CartList, SubtotalWrap } from "./styles/Cart.styled";
import { CartState } from "../context/Context";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";

const Cart = () => {

    const { state: { cart }, totals, dispatch } = CartState();
    console.log(CartState());

    return (
        <CartContainer>
            <CartNav />
            <CartContent>
                <h1>Your Cart</h1>
                <CartList>
                    {cart.length === 0 && <h3 style={{margin: "50px 0"}}>Cart is Empty!</h3>}
                    {cart.map((item, i) => {
                        return (
                            <CartItem key={'cart' + i} item={item} dispatch={dispatch} />
                        );
                    })}
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