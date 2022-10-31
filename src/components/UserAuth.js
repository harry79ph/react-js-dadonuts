import { connect } from "react-redux";
import {
  LoginButton,
  LoginWrapper,
  LogoutButton,
  SideBtnWrapper,
} from "./styles/SideMenu.styled";
import { useState } from "react";
import axios from "axios";
import { removeUser } from "../redux/actions/auth-actions";
import { apiURL } from "../data/url";

const UserAuth = ({ user, removeUser }) => {

  const [isLoading, setIsLoading] = useState(false);

  const handleLogout = () => {
    setIsLoading(true);
    axios
      .get(`${apiURL}/logout`)
      .then(() => {
        removeUser();
      })
      .catch(function (err) {
        console.log(err);
        setIsLoading(false);
      });
  }
  
  return (
    <LoginWrapper>
      {user ? (
        <>
          <span>
            Welcome, <strong>{user}</strong>
          </span>
          <SideBtnWrapper onClick={handleLogout}>
            <LogoutButton disabled={isLoading}>{isLoading ? "Please wait..." : "Logout"}</LogoutButton>
          </SideBtnWrapper>
        </>
      ) : (
        <>
          <span style={{ marginRight: "1px" }}>Please</span>
          <LoginButton to="login">Login</LoginButton>
          <span style={{ margin: "0 1px" }}>or</span>
          <LoginButton to="register">Register</LoginButton>
        </>
      )}
    </LoginWrapper>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.auth.user,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    removeUser: (user) => dispatch(removeUser(user))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserAuth);
