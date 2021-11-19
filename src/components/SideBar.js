import { CloseIcon, IconWrapper, SidebarContainer, SidebarLink, SidebarMenu, SidebarRoute, SideBtnWrapper } from "./styles/Sidebar.styled";

const SideBar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <IconWrapper>
                <CloseIcon onClick={toggle}/>
            </IconWrapper>
            <SidebarMenu>
                <SidebarLink to='/'>Donuts</SidebarLink>
                <SidebarLink to='/'>Ice Cream</SidebarLink>
                <SidebarLink to='/'>Cookies</SidebarLink>
            </SidebarMenu>
            <SideBtnWrapper>
                <SidebarRoute to='/'>Order Now</SidebarRoute>
            </SideBtnWrapper>
        </SidebarContainer>
    );
}
 
export default SideBar;