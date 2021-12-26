import CartNav from "./CartNav";
import { CartContainer, CartContent, CartItem, CartList, InnerWrap, ItemContent, ItemImg, ItemInfo, ItemQuantity, ItemRemove, ItemTotal, RemoveIcon } from "./styles/Cart.styled";
import { CartState } from "../context/Context";
import { ProductButton } from "./styles/Products.styled";
import { useEffect, useState } from "react";

const Cart = () => {

    const { state: { cart }, dispatch } = CartState();
    const [total, setTotal] = useState(0);

    useEffect(() => {
        setTotal(
            cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0)
        );
    }, [cart]);

    return (
        <CartContainer>
            <CartNav />
            <CartContent>
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
                                        <ItemQuantity value={item.qty} onChange={(e) => {
                                            dispatch({
                                                type: "CHANGE_CART_QTY",
                                                payload: {
                                                    id: item.id,
                                                    qty: e.target.value,
                                                }
                                            });
                                        }}>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                        </ItemQuantity>
                                        <ItemTotal>£{Number(item.price) * Number(item.qty)}</ItemTotal>
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
            </CartContent>
            <h3>Cart Total: £{total.toFixed(2)}</h3>
            <ProductButton disabled={cart.length === 0}>Proceed to Checkout</ProductButton>
            <ProductButton>Continue Shopping</ProductButton>
        </CartContainer>
    );
}

export default Cart;