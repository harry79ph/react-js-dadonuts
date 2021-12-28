import CartNav from "./CartNav";
import { CartButton, CartContainer, CartContent, CartItem, CartList, InnerWrap, ItemContent, ItemImg, ItemInfo, ItemQuantity, ItemRemove, ItemTotal, QuantityWrap, RemoveIcon, SubtotalWrap } from "./styles/Cart.styled";
import { CartState } from "../context/Context";
import { Link } from "react-router-dom";

const Cart = () => {

    const { state: { cart }, totals, dispatch } = CartState();

    return (
        <CartContainer>
            <CartNav />
            <CartContent>
                <h1>Your Cart</h1>
                <CartList>
                    {cart.map((item, i) => {
                        return (
                            <CartItem key={item.name + i}>
                                <ItemImg src={item.img} alt={item.name} />
                                <InnerWrap>
                                    <ItemContent>
                                        <h3>{item.name}</h3>
                                        <span>Price £{item.price}</span>
                                    </ItemContent>
                                    <ItemInfo>
                                        <QuantityWrap>
                                            <span>Quantity</span>
                                            <ItemQuantity value={item.qty} onChange={(e) => {
                                                dispatch({
                                                    type: "CHANGE_ITEM_QTY",
                                                    payload: {
                                                        id: item.id,
                                                        qty: e.target.value,
                                                    }
                                                });
                                            }}>
                                                {
                                                    [...new Array(5)].map((_, i) => <option value={i + 1}>{i + 1}</option>)
                                                }
                                            </ItemQuantity>
                                        </QuantityWrap>
                                        <ItemTotal><span>Total</span><h3>£{Number(item.price) * Number(item.qty)}</h3></ItemTotal>
                                        <ItemRemove>
                                            <RemoveIcon display="inline" onClick={() => {
                                                dispatch({
                                                    type: 'REMOVE_FROM_CART',
                                                    payload: item
                                                });
                                            }} />
                                        </ItemRemove>
                                    </ItemInfo>
                                </InnerWrap>
                            </CartItem>
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