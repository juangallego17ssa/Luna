import styled from "styled-components";
import img1 from "../../../Assets/images/b1.png";

export const BannerElements = styled.div`
  position: relative;
  display: flex;
  width: 100vw;
  height: 22vh;
  flex-direction: row;
`;

export const Img = styled.img.attrs({
  src: `${img1}`,
})`
  display: flex;
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  background-repeat: no-repeat;
  max-width: 100%;
  z-index: 0;
`;
