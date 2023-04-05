import styled from "styled-components";

export const EditUserProfileWrapper = styled.div`
  position: absolute;
  left: 0vh;
  width: 38vw;
  height: 60vh;
  z-index: -3;

  background-color: yellow;

  h1.title {
    margin-top: 5px;
    margin-bottom: 0px;
    font-family: "RobotoBold";
    font-style: normal;
    font-weight: 700;
    font-size: 0.8rem;
    line-height: 23px;
    text-transform: uppercase;
    padding-left: 10px;

    color: #303030;
    background-color: #ffffff;
  }
  h1.subtitle {
    font-family: "RobotoBold";
    font-style: normal;
    font-weight: 700;
    font-size: 0.7rem;
    line-height: 23px;

    color: #979797;
    background-color: #ffffff;
    margin-bottom: 0.1rem;
    margin-top: 0.1rem;
    padding-bottom: 0.1rem;
  }
  form {
    margin: 10px;
  }
`;

export const SubmitButton = styled.button`

  border-radius: 35px;
  border: none;
  background: #e47d31;
  color: white;
  font-size: 0.7rem;
  line-height: 1rem;
  font-family: "Roboto", sans-serif;
  letter-spacing: 1px;
  margin-top: 1%;
  height: 1.563rem;
  width: 4.688rem;
  font-size: 1rem;
  &:hover {
    cursor: pointer;
  }
  &:hover {
    cursor: pointer;
  }
`;
