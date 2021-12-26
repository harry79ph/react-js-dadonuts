import { NavContainer, NavLink, ItemWrapper, LinkItem, MenuIcon, MenuWrapper, ShoppingCart} from './styles/Navbar.styled';
import logo from '../images/logo.svg';
import { products } from "./itemLists";
import { animateScroll as scroll } from "react-scroll";
import { CartState } from '../context/Context';

const Navbar = ({ toggle }) => {
    
    const { state: { cart } } = CartState();
    
    return (
        <>
            <NavContainer>
                <NavLink onClick={() => scroll.scrollToTop()}><img src={logo} alt="Dadonuts" />Dadonuts</NavLink>
                <ItemWrapper display="none">
                    {products.map(product => <LinkItem activeClass="active" to={product} spy={true} smooth={true} offset={-120} duration={700}>{product}</LinkItem>)}
                </ItemWrapper>
                <MenuWrapper onClick={toggle}>
                    <ShoppingCart />
                    <MenuIcon />
                    <span>
                        <p>{cart.length}</p>
                    </span>
                </MenuWrapper>
            </NavContainer>
        </>
    );
}

export default Navbar;