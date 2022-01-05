import { CartItemWrap, InnerWrap, ItemContent, ItemImg, ItemInfo, ItemQuantity, ItemRemove, ItemTotal, QuantityWrap, RemoveIcon } from "./styles/CartItem.styled";

const CartItem = ({ item, dispatch }) => {
    
    return (
        <CartItemWrap>
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
                    <ItemTotal><span>Total</span><h3>£{(Number(item.price) * Number(item.qty)).toFixed(2)}</h3></ItemTotal>
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
        </CartItemWrap>
    );
}

export default CartItem;