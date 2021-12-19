import NavItems from './NavItems';
import { Nav, NavLink, MenuIcon, MenuWrapper, ShoppingCart} from './styles/Navbar.styled';
import logo from '../images/logo.svg';

const Navbar = ({toggle, number}) => {
    return (
        <>
            <Nav>
                <NavLink to='/'><img src={logo} alt="Dadonuts" />Dadonuts</NavLink>
                <NavItems />
                <MenuWrapper onClick={toggle}>
                    <ShoppingCart />
                    <MenuIcon />
                    <span>
                        <p>0</p>
                    </span>
                </MenuWrapper>
            </Nav>
        </>
    );
}

export default Navbar;