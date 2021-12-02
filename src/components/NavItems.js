import { ItemWrapper, LinkItem } from "./styles/NavItems.styled";

const NavItems = () => {
    return (
        <ItemWrapper>
            {['Donuts', 'Ice Cream', 'Cookies'].map(item => <LinkItem to='/'>{item}</LinkItem>)}
        </ItemWrapper>
    );
}
 
export default NavItems;