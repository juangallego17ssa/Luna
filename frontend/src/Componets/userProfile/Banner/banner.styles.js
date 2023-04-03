import styled from "styled-components";
//import img1 from "../../../Assets/images/b1.png";

export const BannerElements = styled.div`
  position: relative;
  display: flex;
  width: 100vw;
  height: 22vh;
  background-color: aliceblue;
`;

export const Button = styled.button`
  position: absolute;
  background-color: white;
  position: absolute; /* Add this */
  left: 85vw; /* Also add this for position: absolute to work properly */
  top: 15vh;
  border-radius: 3px;
  min-width: 10%;
  display: inline-block;
`;
