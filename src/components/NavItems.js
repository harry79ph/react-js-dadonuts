import { navItems } from "./itemLists";
import { ItemWrapper, LinkItem } from "./styles/NavItems.styled";

const NavItems = () => {
    return (
        <ItemWrapper>
            {navItems.map(item => <LinkItem to='/'>{item}</LinkItem>)}
        </ItemWrapper>
    );
}
 
export default NavItems;