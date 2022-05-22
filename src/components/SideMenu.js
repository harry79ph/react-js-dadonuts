import { CloseIcon, IconWrapper, SideMenuContainer, SideMenuLink, SidebarMenu, SidebarRoute, SideBtnWrapper, CartContent, CartHeader, LoginWrapper, LoginButton } from "./styles/SideMenu.styled";
import { products } from "../data/itemLists";
import SideMenuItem from "./SideMenuItem";
import { connect } from "react-redux";

const SideMenu = ({ totals, isOpen, handleToggle, cart }) => {

    const handleClick = (e) => {
        if (e.target.tagName !== 'svg') {
            handleToggle();
        }
    }

    return (
        <SideMenuContainer isOpen={isOpen} onClick={handleClick}>
            <IconWrapper>
                <CloseIcon>X</CloseIcon>
            </IconWrapper>
            <LoginWrapper>Please
                <LoginButton>Login</LoginButton>or
                <LoginButton>Register</LoginButton>
            </LoginWrapper>
            <SidebarMenu>
                <h2>Choose Product</h2>
                {products.map((product, i) => <SideMenuLink activeClass="active" to={product} spy={true} smooth={true} offset={-120} duration={1000} key={'menu' + i}>{product}</SideMenuLink>)}
            </SidebarMenu>
            <CartHeader>Your Items</CartHeader>
            <CartContent>
                {totals.quantity > 0 ? (
                    <>
                        {cart.map(item => {
                            return (
                                <SideMenuItem item={item} key={'side' + item.id}/>
                            );
                        })}
                        <h3>Total: {totals.price}</h3>
                    </>
                ) : (
                    <li style={{ margin: "30px 0" }}>Cart is Empty!</li>
                )}
            </CartContent>
            <SideBtnWrapper>
                <SidebarRoute to="cart">Go to Cart</SidebarRoute>
            </SideBtnWrapper>
        </SideMenuContainer>
    );
}

const mapStateToProps = (state) => {
    return {
        cart: state.shop.cart,
        totals: state.shop.totals
    };
};

export default connect(mapStateToProps)(SideMenu);