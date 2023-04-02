import styled from "styled-components";


export const AuthForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 12%;
  height: 90%;
  width: 100%;
`;

export const FormTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 400;
  padding-bottom: 4%;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60%;
`;

export const InputCode = styled.input`
  line-height: 2rem;
  border-bottom: 2px solid rgba(0, 0, 0, 0.1);
  border-top: none;
  border-right: none;
  border-left: none;
  width: 99%;
  margin-top: 5%;
`;

export const InputContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 100%;
`;

export const InputField = styled.input`
  line-height: 2rem;
  border-bottom: 2px solid rgba(0, 0, 0, 0.1);
  border-top: none;
  border-right: none;
  border-left: none;
  width: 90%;
  margin-top: 12%;
`;

export const FormIcon = styled.img`
  width: 1.5rem;
  height: 1.5rem;
  position: absolute;
  margin-top: 22px;
  margin-left: 20px;
`;

export const CompleteButton = styled.button`
  padding: 1.2rem 6rem;
  border-radius: 30px;
  border: none;
  background: linear-gradient(132.96deg, #c468ff 3.32%, #6e91f6 100%);
  color: white;
  font-size: 0.8rem;
  font-family: "Roboto", sans-serif;
  letter-spacing: 1px;
  margin-top: 6%;
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
