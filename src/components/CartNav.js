import { NavContainer, MenuWrapper, ShoppingCart } from "./styles/Navbar.styled";
import { NavLink } from "./styles/Cart.styled";
import logo from '../images/logo.svg';

const CartNav = ({ totals }) => {
    
    return (
        <NavContainer position="static">
            <NavLink to="/"><img src={logo} alt="Dadonuts" /><p>Dadonuts</p></NavLink>
            <MenuWrapper right="0" isPresent={totals.quantity === 0}>
                <ShoppingCart display="inline" cursor="auto"/>
                <span style={{cursor: 'auto'}}>
                    <p>{totals.quantity}</p>
                </span>
            </MenuWrapper>
        </NavContainer>
    );
}
 
export default CartNav;