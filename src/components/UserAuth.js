import { LoginButton, LoginWrapper } from "./styles/SideMenu.styled";

const UserAuth = () => {
    return (
        <LoginWrapper>Please
            <LoginButton to="login">Login</LoginButton>or
            <LoginButton to="register">Register</LoginButton>
        </LoginWrapper>
    );
}
 
export default UserAuth;