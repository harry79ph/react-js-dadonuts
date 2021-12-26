import { CloseIcon, IconWrapper, SideMenuContainer, SideMenuLink, SidebarMenu, SidebarRoute, SideBtnWrapper, CartContent, CartHeader } from "./styles/SideMenu.styled";
import { products } from "./itemLists";
import { CartState } from "../context/Context";

const SideMenu = ({isOpen, toggle}) => {
    const cartContex =  CartState();
    console.log(cartContex);
    const { state: { cart }, dispatch } = CartState();
    console.log(cart);
    return (
        <SideMenuContainer isOpen={isOpen}>
            <IconWrapper>
                <CloseIcon onClick={toggle}/>
            </IconWrapper>
            <SidebarMenu>
                <h2>Choose Product</h2>
                {products.map(product => <SideMenuLink activeClass="active" to={product} spy={true} smooth={true} offset={-120} duration={1000}>{product}</SideMenuLink>)}
            </SidebarMenu>
            <CartHeader>Shopping Cart</CartHeader>
            <CartContent>
                <ul>
                    {cart.length > 0 ? (
                        <>
                            {cart.map(item => {
                            return (
                                <li><span>{item.name}</span><button onClick={
                                    () => { dispatch({
                                        type: 'REMOVE_FROM_CART',
                                        payload: item
                                    });}
                                }>X</button></li>
                            );
                        })}
                        </>
                    ) : (
                        <li>Cart is Empty!</li>
                    )}
                </ul>
            </CartContent>
            <SideBtnWrapper>
                <SidebarRoute to="cart">Go to Cart</SidebarRoute>
            </SideBtnWrapper>
        </SideMenuContainer>
    );
}
 
export default SideMenu;