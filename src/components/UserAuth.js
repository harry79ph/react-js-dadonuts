import { LoginButton, LoginWrapper } from "./styles/SideMenu.styled";

const UserAuth = () => {
    return (
        <LoginWrapper><span style={{marginRight: "1px"}}>Please</span>
            <LoginButton to="login">Login</LoginButton><span style={{margin: "0 1px"}}>or</span>
            <LoginButton to="register">Register</LoginButton>
        </LoginWrapper>
    );
}
 
export default UserAuth;