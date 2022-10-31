import { Link, useNavigate } from "react-router-dom";
import {
  FormButton,
  FormWrap,
  UserForm,
  UserInput,
} from "./styles/SideMenu.styled";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { addUser, removeUser } from "../redux/actions/auth-actions";
import { apiURL } from "../data/url";

const UserLogin = ({ user, addUser, removeUser }) => {
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [credentials, setCredentials] = useState(null);
  const formRef = useRef(null);
  const navigate = useNavigate();

  axios.defaults.withCredentials = true;

  const handleSubmit = (e) => {
    e.preventDefault({ addUser });
    const email = e.target.email.value;
    const password = e.target.password.value;
    setCredentials({ ...credentials, email, password });
  };

  useEffect(() => {
    if (!credentials) return;
    setIsLoading(true);
    axios.post(`${apiURL}/login`, credentials)
      .then((data) => {
        setMessage(data.data.msg);
        addUser(data.data.fullname);
        navigate("/home");
      })
      .catch((err) => {
        console.log(err);
        const text = err.code === "ERR_BAD_REQUEST" ? err.response.data.errors[0].msg : "Please check your connection";
        setMessage(text);
        setIsLoading(false);
      });
      return () => {
        setCredentials(null);
        setIsLoading(false);
      }
  }, [credentials, user, addUser, removeUser, navigate]);

  return (
    <FormWrap>
      {message ? (
        <h3 style={{ color: "#e10099" }}>{message}</h3>
      ) : (
        <h2>Login</h2>
      )}
      <UserForm ref={formRef} onSubmit={handleSubmit}>
        <UserInput type="email" id="email" placeholder="Email" required autoFocus />
        <UserInput
          type="password"
          id="password"
          placeholder="Password"
          required
        />
        <FormButton type="submit" disabled={isLoading} value={isLoading ? "Please wait..." : "Login"} />
      </UserForm>
      <p style={{ textAlign: "center" }}>
        <Link to="/home/register">Don't have an account?</Link>
      </p>
    </FormWrap>
  );
};

const mapStateToProps = state => {
  return {
    user: state.auth.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addUser: (user) => dispatch(addUser(user)),
    removeUser: (user) => dispatch(removeUser(user))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserLogin);