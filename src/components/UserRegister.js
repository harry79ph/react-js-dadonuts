import { Link } from "react-router-dom";
import { FormButton, FormWrap, UserForm, UserInput } from "./styles/SideMenu.styled";

const UserRegister = ({ onSubmit }) => {
    return (
        <FormWrap>
            <h2>Register</h2>
            <UserForm onSubmit={onSubmit}>
                <UserInput type="text" id="fullname" placeholder="Fullname"/>
                <UserInput type="text" id="username" placeholder="Username"/>
                <UserInput type="password" id="password" placeholder="Password"/>
                <UserInput type="password" id="confirm" placeholder="Confirm Password"/>
                <FormButton type="submit" value="Register"></FormButton>
            </UserForm>
            <p style={{textAlign: "center"}}><Link to="/home/login">Already have an account?</Link></p>
        </FormWrap>
    );
}
 
export default UserRegister;