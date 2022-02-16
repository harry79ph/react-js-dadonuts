import { NavContainer, NavLink, ItemWrapper, MenuIcon, MenuWrapper, ShoppingCart } from './styles/Navbar.styled';
import logo from '../images/logo.svg';
import { products } from "../data/itemLists";
import { connect } from "react-redux";

const Navbar = ({ toggle, totals }) => {

    console.log(totals);
    console.log(totals.quantity);

    return (
        <>
            <NavContainer>
                <NavLink activeClass="active" to="home" spy={true} smooth={true} offset={-120} duration={700}><img src={logo} alt="Dadonuts" /><p>Dadonuts</p></NavLink>
                <ItemWrapper>
                    {products.map((product, i) => <NavLink activeClass="active" to={product} spy={true} smooth={true} offset={-120} duration={700} key={'nav' + i} ><p>{product}</p></NavLink>)}
                </ItemWrapper>
                <MenuWrapper onClick={toggle} isPresent={totals.quantity === 0}>
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
        cart: state.shop.cart
    };
};

export default connect(mapStateToProps)(Navbar);