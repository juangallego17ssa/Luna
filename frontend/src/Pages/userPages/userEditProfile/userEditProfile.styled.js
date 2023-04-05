import styled from "styled-components";

export const UserProfileDiv = styled.html.attrs({
  className: "UserProfileDiv",
})`
  width: 90vw;
  height: 90vh;
  background: green;
`;

export const UserProfileBody = styled.div.attrs({
  className: "UserProfileBody",
})`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: pink;
  width: 100%;
  height: 100vh;
  //height:75vh;
`;
