import { CloseIcon, IconWrapper, SideMenuContainer, SideMenuLink, SidebarMenu, SidebarRoute, SideBtnWrapper } from "./styles/SideMenu.styled";

const SideNav = ({isOpen, toggle}) => {
    return (
        <SideMenuContainer isOpen={isOpen} onClick={toggle}>
            <IconWrapper>
                <CloseIcon onClick={toggle}/>
            </IconWrapper>
            <SidebarMenu>
                <SideMenuLink to='/'>Donuts</SideMenuLink>
                <SideMenuLink to='/'>Desserts</SideMenuLink>
                <SideMenuLink to='/'>Cookies</SideMenuLink>
            </SidebarMenu>
            <SideBtnWrapper>
                <SidebarRoute to='/'>Order Now</SidebarRoute>
            </SideBtnWrapper>
        </SideMenuContainer>
    );
}
 
export default SideNav;