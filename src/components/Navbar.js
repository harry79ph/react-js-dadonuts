import { Nav, NavLink, ItemWrapper, LinkItem, MenuIcon, MenuWrapper, ShoppingCart} from './styles/Navbar.styled';
import logo from '../images/logo.svg';
import { products } from "./itemLists";
import { animateScroll as scroll } from "react-scroll";

const Navbar = ({ toggle }) => {
    return (
        <>
            <Nav>
                <NavLink onClick={() => scroll.scrollToTop()}><img src={logo} alt="Dadonuts" />Dadonuts</NavLink>
                <ItemWrapper>
                    {products.map(product => <LinkItem activeClass="active" to={product} spy={true} smooth={true} offset={-120} duration={700}>{product}</LinkItem>)}
                </ItemWrapper>
                <MenuWrapper onClick={toggle}>
                    <ShoppingCart />
                    <MenuIcon />
                    <span>
                        <p>3</p>
                    </span>
                </MenuWrapper>
            </Nav>
        </>
    );
}

export default Navbar;