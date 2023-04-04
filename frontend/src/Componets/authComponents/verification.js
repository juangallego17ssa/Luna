import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { axiosWithoutToken } from "../../Axios/axios";
import {
  AuthForm,
  CompleteButton,
  FormContainer,
  FormTitle,
  InputCode,
  InputContainer,
  InputField,
  ProgressCirclesContainer,
  ErrorMessage,
} from "./verification.styled";
import { useSelector } from "react-redux";

function Verification() {
  const registrationEmail = useSelector(
    (state) => state.signupemail.signupemail
  );
  const [userEmail, setEmail] = useState(registrationEmail);
  const [userPassword, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [passwordMatch, setPasswordMatch] = useState(true);
  const navigate = useNavigate();
  console.log();

  const [error, setError] = useState("");

  //store typed email
  const handleEmailInput = (e) => {
    setEmail(e.target.value);
  };

  //store typed password
  const handlePasswordInput = (e) => {
    setPassword(e.target.value);
  };

  //store typed repeat password
  const handleRepeatPasswordInput = (e) => {
    setRepeatPassword(e.target.value);
  };

  //check if passwords match
  useEffect(() => {
    checkPasswordMatch();
  }, [repeatPassword, userPassword]);

  const checkPasswordMatch = () => {
    if (repeatPassword !== "" && repeatPassword !== userPassword) {
      setPasswordMatch(false);
    } else {
      setPasswordMatch(true);
    }
  };

  //store typed username
  const handleUserNameInput = (e) => {
    setUserName(e.target.value);
  };

  //store typed firstname
  const handleFirstNameInput = (e) => {
    setFirstName(e.target.value);
  };

  //store typed lastname
  const handleLastNameInput = (e) => {
    setLastName(e.target.value);
  };

  //store typed verification code
  const handleVerificationCodeInput = (e) => {
    setVerificationCode(e.target.value);
  };

  //validation
  const handleActivateClick = async (e) => {
    e.preventDefault();

    if (
      !userEmail ||
      !userName ||
      !verificationCode ||
      !userPassword ||
      !repeatPassword ||
      !firstName ||
      !lastName
    ) {
      setError("Every field is required.");
      return;
    } else {
      let emessage = "";

      //registration request to API
      await axiosWithoutToken
        .patch(
          "registration/validate/",
          JSON.stringify({
            email: userEmail,
            username: userName,
            code: verificationCode,
            password: userPassword,
            password_repeat: repeatPassword,
            first_name: firstName,
            last_name: lastName,
          })
        )
        .catch((error) => (emessage = error.message));

      //console.log("68: "+emessage);
      if (!emessage) {
        //redirect to login page
        navigate("/login");

        return;
      } else {
        alert(emessage);
      }
    }
  };

  return (
    <AuthForm className="activation-form">
      {error && <ErrorMessage>{error}</ErrorMessage>}
      <FormTitle>VERIFICATION</FormTitle>
      <FormContainer>
        <InputCode
          placeholder="Verification Code"
          value={verificationCode}
          onChange={handleVerificationCodeInput}
        />
        <InputContainer>
          <InputField
            placeholder="Email"
            type="email"
            value={userEmail}
            onChange={handleEmailInput}
          />
          <InputField
            placeholder="Username"
            value={userName}
            onChange={handleUserNameInput}
          />
          <InputField
            placeholder="First Name"
            value={firstName}
            onChange={handleFirstNameInput}
          />
          <InputField
            placeholder="Last Name"
            value={lastName}
            onChange={handleLastNameInput}
          />
          <InputField
            placeholder="Password"
            type="password"
            value={userPassword}
            onChange={handlePasswordInput}
          />
          <InputField
            placeholder="Repeat Password"
            type="password"
            value={repeatPassword}
            onChange={handleRepeatPasswordInput}
          />
        </InputContainer>
        <p
          style={
            passwordMatch ? { visibility: "hidden" } : { visibility: "visible" }
          }
        >
          The passwords don't match
        </p>
      </FormContainer>
      <CompleteButton onClick={handleActivateClick}>
        Finish registration
      </CompleteButton>
      <ProgressCirclesContainer>
        <svg height="20" width="20">
          <circle
            cx="8"
            cy="8"
            r="0.3rem"
            fill="white"
            stroke="rgba(0, 0, 0, 0.2)"
            strokeWidth="2"
          />
        </svg>
        <svg height="20" width="20">
          <circle
            cx="8"
            cy="8"
            r="0.3rem"
            fill="white"
            stroke="rgba(0, 0, 0, 0.2)"
            strokeWidth="2"
          />
        </svg>
        <svg height="20" width="20">
          <circle cx="8" cy="8" r="0.3rem" fill="black" stroke="black" />
        </svg>
      </ProgressCirclesContainer>
    </AuthForm>
  );
}

export default Verification;
