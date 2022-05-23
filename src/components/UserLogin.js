import { Link } from "react-router-dom";
import { FormButton, FormWrap, UserForm, UserInput } from "./styles/SideMenu.styled";

const UserLogin = ({ onSubmit }) => {
    return (
        <FormWrap>
            <h2>Login</h2>
            <UserForm onSubmit={onSubmit}>
                <UserInput type="text" id="username" placeholder="Username"/>
                <UserInput type="password" id="password" placeholder="Password"/>
                <FormButton type="submit" value="Login"></FormButton>
            </UserForm>
            <p style={{textAlign: "center"}}><Link to="/home/register">Don't have an account?</Link></p>
        </FormWrap>
    );
}
 
export default UserLogin;