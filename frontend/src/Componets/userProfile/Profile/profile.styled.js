import styled from "styled-components";

export const ProfileWrapper = styled.div`
  position: absolute;
  left: 10vh;
  width: 15vw;
  height: 20vh;
  top: 15vh;
  background-color: blue;
  margin: 10px;
`;
export const ProfileContainer = styled.div`
  position: absolute;
  left: 26.1vw;
  width: 40vw;
  height: 65vh;
  top: 21.9vh;
  background-color: white;
  padding-left: 10px;
  z-index: 0;
  border: 1px solid #ebebeb;
  border-top: none;
`;

export const ProfileButtonWrapper = styled.div`
  width: 100%;
  height: 80%;
  top: 30vh;
  background-color: white;
  max-width: 100%;
  display: flex;
  position: absolute;
  justify-content: center;
  flex-flow: column;
  h1 {
    font-family: "RobotoBold";
    font-size: 1rem;
    font-weight: 700;
    letter-spacing: 0rem;
    text-align: left;
    line-height: 100%;
    background: #ffffff;
    margin-bottom: 1rem;
    margin-top: 0.5rem;
  }
`;
export const Button = styled.button`
  width: 100%;
  height: 6vh;
  top: 0vh;
  background: #ffffff;
  max-width: 100%;
  z-index: 900;
  position: relative;
  display: flex;
  justify-content: center;
  border-right: none;
  border-left: none;
  div.options {
    font-family: "Roboto";
    font-size: 1rem;
    font-weight: 300;
    text-align: left;
    margin-bottom: 1rem;
    line-height: 100%;
    background: #ffffff;
    color: #303030;
  }
  &:hover {
    opacity: 0.9;
    border-left: 5px solid orange;
    //background-image: linear-gradient(rgb(0 0 0/40%) 0 0);
  }

  &:focus {
    background-color: ${({ clicked }) => (clicked ? "#00000015" : "#FFFFFF")};
    outline: none;
  }
`;
