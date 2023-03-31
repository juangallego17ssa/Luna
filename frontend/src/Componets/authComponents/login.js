import React from 'react'
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { axiosWithoutToken } from '../../Axios/axios';
import { setCurrentUser } from "../../Redux/Slices/currentUser";
import { useDispatch } from "react-redux";
import {
  AuthForm,
  FormIcon,
  FormTitle,
  HeaderButton,
  InputContainer,
  InputField,
  RightSide,
  SignInButton,
  SignInHeader,
  TextBesidesButton, ErrorMessage
} from './login.styled';
// import AvatarIcon from "../../../assets/svgs/avatar.svg";
// import PasswordIcon from "../../../assets/svgs/password.svg";


const Login = () => {
  const [userEmail, setEmail] = useState("");
  const [userPassword, setPassword] = useState("");
  const navigate = useNavigate();

  const dispatch = useDispatch();
  
  const [error, setError] = useState('');


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

    if (!userEmail || !userPassword) 
    {
      setError('Please enter both email and password.');
      return;
    }
    else
    {
     let emessage="";
    //redirect to homepage

    //login request to API
    const response = await axiosWithoutToken.post(
      "auth/token/",
      JSON.stringify({
        email: userEmail,
        password: userPassword,
      })
    ).catch(error => 
     
      emessage=error.message,
      
    
      );;

      if (!emessage) 
      {
        navigate("/");
        localStorage.setItem("access-token", response.data.access);
        console.log("access-token :" + response.data.access);
        
        dispatch(setCurrentUser(response.data.user))
        
      }
      else
      {
       
          alert('Please check your username and password!')
        
      }
     
    }


     
    
  };

  //navigate to sign up page
  const handleSignUpClick = () => {
    // navigate("/signup");
  };

  return (
    <RightSide>
      <SignInHeader>
        <TextBesidesButton>Don't have an account?</TextBesidesButton>
        <HeaderButton onClick={handleSignUpClick}>SIGN UP</HeaderButton>
      </SignInHeader>
      <AuthForm>
      {error && <ErrorMessage>{error}</ErrorMessage>}
        <FormTitle>Sign In</FormTitle>
        <InputContainer>
          {/* <FormIcon src={AvatarIcon}></FormIcon> */}
          <InputField
            placeholder="Email"
            type="email"
            required
            value={userEmail}
            onChange={handleEmailInput}
          />
        </InputContainer>
        <InputContainer>
          {/* <FormIcon src={PasswordIcon} alt="Password icon" /> */}
          <InputField
            placeholder="Password"
            type="password"
            required
            value={userPassword} 
            onChange={handlePasswordInput}
          />
        </InputContainer>
        <SignInButton onClick={handleLoginClick}>SIGN IN</SignInButton>
      </AuthForm>
    </RightSide>
  );
}


export default Login