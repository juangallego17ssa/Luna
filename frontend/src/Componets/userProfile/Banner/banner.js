import {
  BannerElements,
  Button,
  BannerTextWrapper,
  BannerText,
} from "./banner.styles";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import React, { useState, useEffect } from "react";

export default function Banner() {
  const dispatch = useDispatch();
  const [banner, setBanner] = useState("");
  const [firstName, setFirstName] = useState("Laurent");
  const [lastName, setLasttName] = useState("Heron");
  const [location, setLocation] = useState("Zurich, CH");
  const [numberComments, setNumberComments] = useState(2);
  const [numberReviews, setNumberReviews] = useState(3);

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
    position: relative;
    width: 100%;
    height: 100%;
    object-fit: cover;
    background-repeat: no-repeat;
    max-width: 100%;
    z-index: 5;
    filter: brightness(60%);
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
      <BannerText
        firstName={firstName}
        lastName={lastName}
        location={location}
        numberComments={numberComments}
        numberReviews={numberReviews}
      ></BannerText>
    </BannerElements>
  );
}
