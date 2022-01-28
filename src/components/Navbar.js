import { NavContainer, NavLink, ItemWrapper, MenuIcon, MenuWrapper, ShoppingCart } from './styles/Navbar.styled';
import logo from '../images/logo.svg';
import { products } from "../data/itemLists";
import { CartState } from '../context/Context';

const Navbar = ({ toggle }) => {

    const { totals } = CartState();

    return (
        <>
            <NavContainer>
                <NavLink activeClass="active" to="home" spy={true} smooth={true} offset={-120} duration={700}><img src={logo} alt="Dadonuts" /><p>Dadonuts</p></NavLink>
                <ItemWrapper>
                    {products.map((product, i) => <NavLink activeClass="active" to={product} spy={true} smooth={true} offset={-120} duration={700} key={'nav' + i} ><p>{product}</p></NavLink>)}
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