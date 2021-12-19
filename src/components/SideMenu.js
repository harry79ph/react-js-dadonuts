import { CloseIcon, IconWrapper, SideMenuContainer, SideMenuLink, SidebarMenu, SidebarRoute, SideBtnWrapper } from "./styles/SideMenu.styled";
import { products } from "./itemLists";

const SideNav = ({isOpen, toggle}) => {
    return (
        <SideMenuContainer isOpen={isOpen} onClick={toggle}>
            <IconWrapper>
                <CloseIcon onClick={toggle}/>
            </IconWrapper>
            <SidebarMenu>
                {products.map(product => <SideMenuLink activeClass="active" to={product} spy={true} smooth={true} offset={-120} duration={1000}>{product}</SideMenuLink>)}
            </SidebarMenu>
            <SideBtnWrapper>
                <SidebarRoute to="home">Go to Cart</SidebarRoute>
            </SideBtnWrapper>
        </SideMenuContainer>
    );
}
 
export default SideNav;