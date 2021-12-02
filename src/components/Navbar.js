import NavItems from './NavItems';
import { Nav, NavLink, MenuIcon, MenuWrapper, ShoppingCart} from './styles/Navbar.styled';
import logo from '../images/logo.svg';

const Navbar = ({toggle, text}) => {
    return (
        <>
            <Nav>
                <NavLink to='/'><img src={logo} alt="funnel" />Dadonuts</NavLink>
                <NavItems />
                <MenuWrapper onClick={toggle} text={text}>
                    <ShoppingCart />
                    <MenuIcon />
                    <p>{text}</p>
                </MenuWrapper>
            </Nav>
        </>
    );
}

export default Navbar;