import styled from "styled-components";

export const ProfileWrapper = styled.div`
  position: absolute;
  left: 10vh;
  width: 18vw;
  height: 40vh;
  top: 20vh;
  background-color: blue;
`; 
export const ProfileContainer = styled.div`
  position: absolute;
  left: 25vw;
  width: 40vw;
  height: 50vh;
  top:30vh;
  background-color: blue;
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
    font-size: 1.2rem;
    font-weight: 700;
    letter-spacing: 0rem;
    text-align: left;
    line-height: 100%;

    background: #f2f2f2;
    margin-bottom: 0.4rem;
  }
`;
export const Button = styled.button`
  width: 100%;
  height: 6vh;
  top: 0vh;
  background-color: yellow;
  max-width: 100%;
  z-index: 900;
  position: relative;
  display: flex;
  justify-content: center;
  div.options {
    font-family: "Roboto";
    font-size: 1.3rem;
    font-weight: 300;
    text-align: left;
    margin-bottom: 1rem;
    line-height: 100%;
    background: #f2f2f2;
    color: #303030;
  }
`;
