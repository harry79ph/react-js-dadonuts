import CartNav from "./CartNav";
import { CartContainer, CartContent, CartItem, CartList, InnerWrap, ItemContent, ItemImg, ItemInfo, ItemQuantity, ItemRemove, ItemTotal, RemoveIcon } from "./styles/Cart.styled";
import { sections } from './itemLists';

const Cart = () => {
    const [ donutList ] = sections;
    return (
        <CartContainer>
            <CartNav />
            <CartContent>
                <CartList>
                    <CartItem>
                        <ItemImg src={donutList[0].img} alt={donutList[0].name} />
                        <InnerWrap>
                            <ItemContent>
                                <h3>{donutList[0].name}</h3>
                                <span>Price {donutList[0].price}</span>
                            </ItemContent>
                            <ItemInfo>
                                <ItemQuantity>
                                    <option value="0">0</option>
                                    <option value="1">1</option>
                                </ItemQuantity>
                                <ItemTotal>{donutList[0].price}</ItemTotal>
                                <ItemRemove>
                                    <RemoveIcon display="inline"/>
                                </ItemRemove>
                            </ItemInfo>
                        </InnerWrap>
                    </CartItem>
                    <CartItem>
                        <ItemImg src={donutList[1].img} alt={donutList[1].name} />
                        <InnerWrap>
                            <ItemContent>
                                <h3>{donutList[1].name}</h3>
                                <span>Price {donutList[1].price}</span>
                            </ItemContent>
                            <ItemInfo>
                                <ItemQuantity>
                                    <option value="0">0</option>
                                    <option value="1">1</option>
                                </ItemQuantity>
                                <ItemTotal>{donutList[1].price}</ItemTotal>
                                <ItemRemove>
                                    <RemoveIcon display="inline"/>
                                </ItemRemove>
                            </ItemInfo>
                        </InnerWrap>
                    </CartItem>
                </CartList>
            </CartContent>
        </CartContainer>
    );
}
 
export default Cart;