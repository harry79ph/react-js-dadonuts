import CartNav from "./CartNav";
import { CartContainer, CartContent, CartItem, CartList, InnerWrap, ItemContent, ItemImg, ItemInfo, ItemQuantity, ItemRemove, ItemTotal, RemoveIcon } from "./styles/Cart.styled";
import { sections } from './itemLists';

const Cart = () => {
    const [ donutList ] = sections;
    const list = [donutList[0], donutList[1]];
    return (
        <CartContainer>
            <CartNav />
            <CartContent>
                <CartList>
                    {list.map((item) => {
                        return (
                            <CartItem>
                                <ItemImg src={item.img} alt={item.name} />
                                <InnerWrap>
                                    <ItemContent>
                                        <h3>{item.name}</h3>
                                        <span>Price {item.price}</span>
                                    </ItemContent>
                                    <ItemInfo>
                                        <ItemQuantity>
                                            <option value="0">0</option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                        </ItemQuantity>
                                        <ItemTotal>{item.price}</ItemTotal>
                                        <ItemRemove>
                                            <RemoveIcon display="inline"/>
                                        </ItemRemove>
                                    </ItemInfo>
                                </InnerWrap>
                            </CartItem>
                        );
                    })}
                </CartList>
            </CartContent>
        </CartContainer>
    );
}
 
export default Cart;