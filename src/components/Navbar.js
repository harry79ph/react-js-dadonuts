import { Nav, NavLink, MenuIcon, MenuWrapper } from './styles/Navbar.styled';

const Navbar = ({toggle}) => {
    return (
        <>
            <Nav>
                <NavLink to='/'>Dadonuts</NavLink>
                <MenuWrapper onClick={toggle}>
                    <MenuIcon />
                    <p>Menu</p>
                </MenuWrapper>
            </Nav>
        </>
    );
}

export default Navbar;