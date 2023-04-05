import styled from "styled-components";

export const UserProfileDiv = styled.html.attrs({
  className: "UserProfileDiv",
})`
  width: 90vw;
  height: 99vh;
  background: white;
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
  height: 80vh;
  //height:75vh;
`;
