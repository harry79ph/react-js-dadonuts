import { CloseIcon, IconWrapper, SideMenuContainer, SideMenuLink, SidebarMenu, SidebarRoute, SideBtnWrapper, CartContent, CartHeader } from "./styles/SideMenu.styled";
import { products } from "./itemLists";

const SideMenu = ({isOpen, toggle}) => {
    return (
        <SideMenuContainer isOpen={isOpen} onClick={toggle}>
            <IconWrapper>
                <CloseIcon onClick={toggle}/>
            </IconWrapper>
            <SidebarMenu>
                <h2>Choose Product</h2>
                {products.map(product => <SideMenuLink activeClass="active" to={product} spy={true} smooth={true} offset={-120} duration={1000}>{product}</SideMenuLink>)}
            </SidebarMenu>
            <CartHeader>Shopping Cart</CartHeader>
            <CartContent>
                <ul>
                    <li>Cart is Empty!</li>
                    <li>Cart is Empty!</li>
                    <li>Cart is Empty!</li>
                    <li>Cart is Empty!</li>
                    <li>Cart is Empty!</li>
                    <li>Cart is Empty!</li>
                    <li>Cart is Empty!</li>
                    <li>Cart is Empty!</li>
                    <li>Cart is Empty!</li>
                    <li>Cart is Empty!</li>
                    <li>Cart is Empty!</li>
                    <li>Cart is Empty!</li>
                    <li>Cart is Empty!</li>
                    <li>Cart is Empty!</li>
                    <li>Cart is Empty!</li>
                    <li>Cart is Empty!</li>
                    <li>Cart is Empty!</li>
                    <li>Cart is Empty!</li>
                    <li>Cart is Empty!</li>
                    <li>Cart is Empty!</li>
                </ul>
            </CartContent>
            <SideBtnWrapper>
                <SidebarRoute to="cart">Go to Cart</SidebarRoute>
            </SideBtnWrapper>
        </SideMenuContainer>
    );
}
 
export default SideMenu;