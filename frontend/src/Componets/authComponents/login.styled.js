import styled from "styled-components";


export const AuthForm = styled.form`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: #f2f2f2;
  padding: 1% 0;
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
    background-color: #E47D31;
  }
`;

export const InputContainer = styled.div`
  text-align: center;
  width: 100%;
`;

export const InputField = styled.input`
  margin: 0.5rem;
  line-height: 2.5rem;
  border: 1px solid #ebebeb;
  border-radius: 3px;
  font-weight: 700;
  width: 15%;
  text-indent: 1rem;
`;

export const LoginButton = styled.button`
  padding: 0.9rem 4rem;
  border-radius: 35px;
  border: none;
  background: #E47D31;
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

export const ErrorMessage = styled.div`
  color: red;
  font-size: 14px;
  margin: 10px 0;
`;
