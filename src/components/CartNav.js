import { NavContainer, MenuWrapper, ShoppingCart, AccountWrapper, Account } from "./styles/Navbar.styled";
import { NavLink } from "./styles/Cart.styled";
import logo from '../images/logo.svg';

const CartNav = ({ totals }) => {

    const quantity = totals?.quantity;
    
    return (
        <NavContainer position="static">
            <NavLink to="/"><img src={logo} alt="Dadonuts" /><p>Dadonuts</p></NavLink>
            <AccountWrapper to="home" role="button" tabIndex="4">
                <Account />
                <p>LOGIN</p>
            </AccountWrapper>
            <MenuWrapper right="0" isPresent={quantity === 0} style={quantity ? {visibility: "visible"} : {visibility: "hidden"}}>
                <ShoppingCart display="inline" cursor="auto" fontSize="3rem"/>
                <span style={{cursor: "auto"}}>
                    <p>{quantity}</p>
                </span>
            </MenuWrapper>
        </NavContainer>
    );
}
 
export default CartNav;