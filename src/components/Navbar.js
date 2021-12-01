import NavItems from './NavItems';
import { Nav, NavLink, MenuIcon, MenuWrapper, ShoppingCart} from './styles/Navbar.styled';

const Navbar = ({toggle, text}) => {
    return (
        <>
            <Nav>
                <NavLink to='/'>Dadonuts</NavLink>
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