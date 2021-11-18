import { Nav, NavLink, Bars, NavIcon } from './styles/Navbar.styled';

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavLink to='/'>Dadonuts</NavLink>
                <NavIcon>
                    <p>Menu</p>
                    <Bars />
                </NavIcon>
            </Nav>
        </>
    );
}

export default Navbar;