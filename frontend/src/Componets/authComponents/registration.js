import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  AuthForm,
  FormTitle,
  InputContainer,
  InputField,
  ProgressCirclesContainer,
  RegisterButton,
  ErrorMessage,
} from "./registration.styled";
import { setSignUpEmail } from "../..//Redux/Slices/signUpEmailAdress";
import { axiosWithoutToken } from "../../Axios/axios";

function Registration() {
  const [userEmail, setEmail] = useState("");
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [error, setError] = useState("");
  //store typed email
  const handleEmailInput = (e) => {
    setEmail(e.target.value);
  };


  //sign up - create a new user
  const handleSignUpClick = async (e) => {
    e.preventDefault();

    if (!userEmail) {
      setError("Please enter email");
      return;
    } else {
      let emessage = "";
      dispatch(setSignUpEmail(userEmail));

      //store user email in redux for congratulations page

      //redirect to activation page

      //registration request to API
      await axiosWithoutToken
        .post(
          "auth/registration/",
          JSON.stringify({
            email: userEmail,
          })
        )
        .catch((error) => (emessage = error.message));

      //console.log(emessage);

      if (!emessage) {
        setSuccessMessage(`
        Thanks for your registration.\n 
        Our hard working monkeys are preparing a digital\n 
        message called E-Mail that will be sent to you soon.\n
        Since monkeys aren't good in writing, the message could\n
        end up in your junk folder. Our apologies for any inconvienience.\n
        Thank you
        `);

        setTimeout(() => {
          navigate('/verification');
        }, 10000)
        
      } else {
        alert("Please check your email");
      }
    }
  };

  

  return (
      <AuthForm>
        <FormTitle>REGISTRATION</FormTitle>
        {error && <ErrorMessage>{error}</ErrorMessage>}
        {successMessage
          ? <p style={{ whiteSpace: 'pre-wrap', textAlign: 'center' }}>{successMessage}</p>
          : <InputContainer>
                <InputField
                  placeholder="Email"
                  type="email"
                  value={userEmail}
                  onChange={handleEmailInput}
                />
                <RegisterButton onClick={handleSignUpClick}>SIGN UP</RegisterButton>
              </InputContainer>}
        <ProgressCirclesContainer>
          <svg height="20" width="20">
            <circle cx="8" cy="8" r="0.3rem" fill="black" stroke="black" />
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
            <circle
              cx="8"
              cy="8"
              r="0.3rem"
              fill="white"
              stroke="rgba(0, 0, 0, 0.2)"
              strokeWidth="2"
            />
          </svg>
        </ProgressCirclesContainer>
      </AuthForm>
  );
}

export default Registration;
