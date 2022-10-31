import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  FormButton,
  FormWrap,
  UserForm,
  UserInput,
} from "./styles/SideMenu.styled";
import axios from "axios";
import { apiURL } from "../data/url";

const UserRegister = () => {
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);
  const formRef = useRef(null);

  axios.defaults.withCredentials = true;

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formValues = Object.fromEntries(formData);
    const { firstname, surname, email, password, confirm } = formValues;

    const check = password === confirm;
    if (!check) {
      setMessage("Oops! The passwords do not match");
      return;
    }
    setUser({ ...user, firstname, surname, email, password });
  };

  useEffect(() => {
    if (!user) return;
    setIsLoading(true);
    axios.post(`${apiURL}/signup`, user)
      .then((data) => {
        setMessage(data.data.msg);
        setUser(null);
        formRef.current.reset();
      })
      .catch((err) => {
        console.log(err);
        const text = err.code === "ERR_BAD_REQUEST" ? err.response.data.errors[0].msg : "Please check your connection";
        setMessage(text);
      });
      setIsLoading(false);
  }, [user]);

  return (
    <FormWrap>
      {message ? (
        <h3 style={{ color: "#e10099" }}>{message}</h3>
      ) : (
        <h2>Register</h2>
      )}
      <UserForm ref={formRef} onSubmit={handleSubmit}>
        <UserInput
          type="text"
          name="firstname"
          placeholder="First Name"
          required
          autoFocus
        />
        <UserInput type="text" name="surname" placeholder="Surname" required />
        <UserInput type="email" name="email" placeholder="Email" required />
        <UserInput
          type="password"
          name="password"
          placeholder="Password"
          required
        />
        <UserInput
          type="password"
          name="confirm"
          placeholder="Confirm Password"
          required
        />
        <FormButton type="submit" disabled={isLoading} value={isLoading ? "Please wait..." : "Register"} />
      </UserForm>
      <p style={{ textAlign: "center" }}>
        <Link to="/home/login">Already have an account?</Link>
      </p>
    </FormWrap>
  );
};

export default UserRegister;