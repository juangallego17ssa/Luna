import { BannerElements, Img, Button } from "./banner.styles";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import React, { useState } from "react";

export default function Banner() {
  const dispatch = useDispatch();
  const [banner, setBanner] = useState("");

  const hiddenFileInput = React.useRef(null);

  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };

  const handleBackgroundChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      setBanner(e.target.result);
    };
    reader.readAsDataURL(file);
  };

  const Img = styled.img.attrs({
    src: `${banner ? banner : ""}`,
  })`
    display: flex;
    position: relative;
    width: 100%;
    height: 100%;
    object-fit: cover;
    background-repeat: no-repeat;
    max-width: 100%;
    z-index: 0;
    filter: brightness(80%);
  `;

  return (
    <BannerElements>
      <Img></Img>
      <Button onClick={handleClick}>Update Banner</Button>
      <input
        id="banner-img"
        type="file"
        accept="image/*"
        ref={hiddenFileInput}
        onChange={handleBackgroundChange}
        style={{ display: "none" }}
      />
    </BannerElements>
  );
}
