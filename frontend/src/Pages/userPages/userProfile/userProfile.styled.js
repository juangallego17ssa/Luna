import styled from "styled-components";

export const UserProfileDiv = styled.html.attrs({
  className: "UserProfileDiv",
})`
  width: 100vw;
  height: 100vh;
  background: green;
`;

export const UserProfileBody = styled.div.attrs({
  className: "UserProfileBody",
})`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #f2f2f2;
  width: 100vw;
  height: 66%;
  //height:75vh;
`;
