import styled from "styled-components";

export const UserProfileDiv = styled.html.attrs({
  className: "UserProfileDiv",
})`
  width: 100vw;
  height: 99.5vh;
  background: white;
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
  height:66vh;
`;
