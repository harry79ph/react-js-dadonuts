import { NavContainer, NavLink, ItemWrapper, MenuWrapper, ShoppingCart } from "./styles/Navbar.styled";
import logo from '../images/logo.svg';
import { CartHeader } from "./styles/CartNav.styled";

const CartNav = () => {
    return (
        <NavContainer position="static">
            <NavLink><img src={logo} alt="Dadonuts" />Dadonuts</NavLink>
            <ItemWrapper display="flex">
                <CartHeader>Shopping Cart</CartHeader>
            </ItemWrapper>
            <MenuWrapper right="0">
                <ShoppingCart display="inline"/>
                <span>
                    <p>3</p>
                </span>
            </MenuWrapper>
        </NavContainer>
    );
}
 
export default CartNav;