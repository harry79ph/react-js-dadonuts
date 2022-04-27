import { NavContainer, NavLink, ItemWrapper, MenuIcon, MenuWrapper, ShoppingCart, Account, AccountWrapper } from './styles/Navbar.styled';
import logo from '../images/logo.svg';
import { products } from "../data/itemLists";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';

const Navbar = ({ handleToggle, totals }) => {

    return (
        <>
            <NavContainer>
                <NavLink activeClass="active" to="home" spy={true} smooth={true} offset={-120} duration={700}><img src={logo} alt="Dadonuts" role="button"/><p tabIndex="1">Dadonuts</p></NavLink>
                <ItemWrapper>
                    {products.map((product, i) => <NavLink activeClass="active" to={product} spy={true} smooth={true} offset={-120} duration={700} key={'nav' + i} role="button" tabIndex={i + 1}><p>{product}</p></NavLink>)}
                </ItemWrapper>
                <AccountWrapper onClick={handleToggle} role="button" tabIndex="4">
                    <Account />
                    <p>LOGIN</p>
                </AccountWrapper>
                <MenuWrapper isPresent={totals.quantity === 0}>
                    <Link to="/cart">
                        <ShoppingCart />
                    </Link>
                    <MenuIcon onClick={handleToggle} />
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