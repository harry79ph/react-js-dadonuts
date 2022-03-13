import { CloseIcon, IconWrapper, SideMenuContainer, SideMenuLink, SidebarMenu, SidebarRoute, SideBtnWrapper, CartContent, CartHeader } from "./styles/SideMenu.styled";
import { products } from "../data/itemLists";
import { connect } from "react-redux";
import SideMenuItem from "./SideMenuItem";

const SideMenu = ({ totals, isOpen, toggle, cart }) => {

    return (
        <SideMenuContainer isOpen={isOpen}>
            <IconWrapper>
                <CloseIcon onClick={toggle} />
            </IconWrapper>
            <SidebarMenu>
                <h2>Choose Product</h2>
                {products.map((product, i) => <SideMenuLink activeClass="active" to={product} spy={true} smooth={true} offset={-120} duration={1000} key={'menu' + i}>{product}</SideMenuLink>)}
            </SidebarMenu>
            <CartHeader>Shopping Cart</CartHeader>
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