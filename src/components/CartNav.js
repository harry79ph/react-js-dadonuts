import { NavContainer, MenuWrapper, ShoppingCart } from "./styles/Navbar.styled";
import { NavLink } from "./styles/Cart.styled";
import logo from '../images/logo.svg';
import { CartState } from "../context/Context";

const CartNav = () => {

    const { totals } = CartState();
    
    return (
        <NavContainer position="static">
            <NavLink to="/"><img src={logo} alt="Dadonuts" /><p>Dadonuts</p></NavLink>
            <MenuWrapper right="0">
                <ShoppingCart display="inline" cursor="auto"/>
                <span>
                    <p>{totals[0].quantity}</p>
                </span>
            </MenuWrapper>
        </NavContainer>
    );
}
 
export default CartNav;