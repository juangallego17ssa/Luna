import styled from "styled-components";

export const AuthForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: #f2f2f2;
`;

export const FormTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 5%;
  position: relative;

  &:after {
    content: "";
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 2px;
    background-color: #e47d31;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 100%;
`;

export const InputField = styled.input`
  margin: 0.5rem;
  line-height: 2.5rem;
  border: 1px solid #ebebeb;
  border-radius: 3px;
  font-weight: 700;
  width: 20%;
  text-indent: 1rem;
`;

export const RegisterButton = styled.button`
  padding: 0.9rem 4rem;
  border-radius: 35px;
  border: none;
  background: #e47d31;
  color: white;
  font-size: 1.2rem;
  line-height: 1.2rem;
  font-family: "Roboto", sans-serif;
  letter-spacing: 1px;
  margin-top: 3%;
  &:hover {
    cursor: pointer;
  }
`;

export const ProgressCirclesContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 8%;
`;
export const ErrorMessage = styled.div`
  color: red;
  font-size: 14px;
  margin-bottom: 10px;
`;
