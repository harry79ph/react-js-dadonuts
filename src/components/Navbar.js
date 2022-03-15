import { NavContainer, NavLink, ItemWrapper, MenuIcon, MenuWrapper, ShoppingCart } from './styles/Navbar.styled';
import logo from '../images/logo.svg';
import { products } from "../data/itemLists";
import { connect } from "react-redux";

const Navbar = ({ handleToggle, totals }) => {

    return (
        <>
            <NavContainer>
                <NavLink activeClass="active" to="home" spy={true} smooth={true} offset={-120} duration={700}><img src={logo} alt="Dadonuts" /><p>Dadonuts</p></NavLink>
                <ItemWrapper>
                    {products.map((product, i) => <NavLink activeClass="active" to={product} spy={true} smooth={true} offset={-120} duration={700} key={'nav' + i} ><p>{product}</p></NavLink>)}
                </ItemWrapper>
                <MenuWrapper onClick={handleToggle} isPresent={totals.quantity === 0}>
                    <ShoppingCart />
                    <MenuIcon />
                    <span>
                        <p>{totals.quantity}</p>
                    </span>
                </MenuWrapper>
            </NavContainer>
        </>
    );
}

const mapStateToProps = (state) => {
    return {
        cart: state.shop.cart,
        totals: state.shop.totals
    };
};

export default connect(mapStateToProps)(Navbar);