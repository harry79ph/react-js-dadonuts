import { NavContainer, NavLink, MenuWrapper, ShoppingCart } from "./styles/Navbar.styled";
import logo from '../images/logo.svg';

const CartNav = () => {
    return (
        <NavContainer position="static">
            <NavLink><img src={logo} alt="Dadonuts" />Dadonuts</NavLink>
            <MenuWrapper right="0">
                <ShoppingCart display="inline" cursor="auto"/>
                <span>
                    <p>3</p>
                </span>
            </MenuWrapper>
        </NavContainer>
    );
}
 
export default CartNav;