import { NavContainer, NavLink, ItemWrapper, LinkItem, MenuIcon, MenuWrapper, ShoppingCart } from './styles/Navbar.styled';
import logo from '../images/logo.svg';
import { products } from "./itemLists";
import { animateScroll as scroll } from "react-scroll";
import { CartState } from '../context/Context';

const Navbar = ({ toggle }) => {

    const { totals } = CartState();

    return (
        <>
            <NavContainer>
                <NavLink onClick={() => scroll.scrollToTop()}><img src={logo} alt="Dadonuts" />Dadonuts</NavLink>
                <ItemWrapper>
                    {products.map((product, i) => <LinkItem activeClass="active" to={product} spy={true} smooth={true} offset={-120} duration={700} key={'nav' + i} >{product}</LinkItem>)}
                </ItemWrapper>
                <MenuWrapper onClick={toggle} isPresent={totals[0].quantity === 0}>
                    <ShoppingCart />
                    <MenuIcon />
                    <span>
                        <p>{totals[0].quantity}</p>
                    </span>
                </MenuWrapper>
            </NavContainer>
        </>
    );
}

export default Navbar;