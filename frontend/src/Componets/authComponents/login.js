import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { axiosWithoutToken } from "../../Axios/axios";
import { setCurrentUser } from "../../Redux/Slices/currentUser";
import { useDispatch } from "react-redux";
import {
  AuthForm,
  FormTitle,
  InputContainer,
  InputField,
  LoginButton,
  ErrorMessage,
} from "./login.styled";



const Login = () => {
  const [userEmail, setEmail] = useState("");
  const [userPassword, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [error, setError] = useState("");

  //store typed email
  const handleEmailInput = (e) => {
    setEmail(e.target.value);
  };

  //store typed password
  const handlePasswordInput = (e) => {
    setPassword(e.target.value);
  };

  //login
  const handleLoginClick = async (e) => {
    e.preventDefault();

    if (!userEmail || !userPassword) {
      setError("Please enter both email and password.");
      return;
    } else {
      let emessage = "";
      //redirect to homepage
    }
    else
    {
     let emessage="";

      //login request to API
      const response = await axiosWithoutToken
        .post(
          "auth/token/",
          JSON.stringify({
            email: userEmail,
            password: userPassword,
          })
        )
        .catch((error) => (emessage = error.message));

      if (!emessage) {
        navigate("/");
        localStorage.setItem("access-token", response.data.access);
        console.log("access-token :" + response.data.access);

        dispatch(setCurrentUser(response.data.user));
      } else {
        alert("Please check your username and password!");
      }
    }
  };


  return (
    <AuthForm>
      <FormTitle>LOGIN</FormTitle>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      <InputContainer>
        <InputField
          placeholder="Username"
          type="email"
          required
          value={userEmail}
          onChange={handleEmailInput}
        />
      </InputContainer>
      <InputContainer>
        <InputField
          placeholder="Password"
          type="password"
          required
          value={userPassword} 
          onChange={handlePasswordInput}
        />
      </InputContainer>
      <LoginButton onClick={handleLoginClick}>Login</LoginButton>
    </AuthForm>
  );
};

export default Login;
