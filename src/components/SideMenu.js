import { CloseIcon, IconWrapper, SideMenuContainer, SideMenuLink, SidebarMenu, SidebarRoute, SideBtnWrapper, CartContent, SideItemWrapper, CartHeader, SideImg, SideItemContent } from "./styles/SideMenu.styled";
import { products } from "./itemLists";
import { CartState } from "../context/Context";
import { ItemRemove, RemoveIcon } from "./styles/CartItem.styled";

const SideMenu = ({ isOpen, toggle }) => {

    const { state: { cart }, dispatch, totals } = CartState();
    const context = CartState();
    console.log(context);

    return (
        <SideMenuContainer isOpen={isOpen}>
            <IconWrapper>
                <CloseIcon onClick={toggle} />
            </IconWrapper>
            <SidebarMenu>
                <h2>Choose Product</h2>
                {products.map(product => <SideMenuLink activeClass="active" to={product} spy={true} smooth={true} offset={-120} duration={1000}>{product}</SideMenuLink>)}
            </SidebarMenu>
            <CartHeader>Shopping Cart</CartHeader>
                {totals[0].quantity > 0 ? (
                    <CartContent>
                        {cart.map(item => {
                            return (
                                <SideItemWrapper>
                                    <SideImg src={item.img} alt={item.name} />
                                    <SideItemContent>
                                        <span>{item.price}</span>
                                        <span className="times">X</span>
                                        <span>{item.qty}</span>
                                    </SideItemContent>
                                    <ItemRemove>
                                        <RemoveIcon display="inline" onClick={
                                            () => {
                                                dispatch({
                                                    type: 'REMOVE_FROM_CART',
                                                    payload: item
                                                });
                                            }
                                        } />
                                    </ItemRemove>
                                </SideItemWrapper>
                            );
                        })}
                        <h3>Total: {totals[1].price}</h3>
                    </CartContent>
                ) : (
                    <li>Cart is Empty!</li>
                )}
            <SideBtnWrapper>
                <SidebarRoute to="cart">Go to Cart</SidebarRoute>
            </SideBtnWrapper>
        </SideMenuContainer>
    );
}

export default SideMenu;