import { ProfileWrapper, Button } from "./profile.styled";
import styled from "styled-components";
import React, { useState } from "react";
import EditIcon from "../../../Assets/svg/edit.svg";

export default function Profile() {
  const hiddenFileInput = React.useRef(null);
  const [avatar, setAvatar] = useState("");

  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };

  const handleBackgroundChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      setAvatar(e.target.result);
    };
    reader.readAsDataURL(file);
  };

  const Img = styled.img.attrs({
    src: `${avatar ? avatar : ""}`,
  })`
    position: relative;
    width: 100%;
    height: 100%;
    object-fit: cover;
    background-repeat: no-repeat;
    max-width: 100%;
    z-index: 0;
    filter: brightness(60%);
  `;

  const IconEdit = styled.img.attrs({
    src: `${EditIcon ? EditIcon : ""}`,
  })`
    position: relative;
    top: 1rem;
    width: 50%;
    height: 50%;
    object-fit: contain;
    background-repeat: no-repeat;
    max-width: 50%;
    z-index: 0;
    opacity: 0.5;
    fill: white;
    color: red;
    fill: currentColor;
    .path {
      color: red;
      fill: currentcolor;
    }
  `;

  return (
    <>
      <ProfileWrapper>
        <Img></Img>
        <IconEdit src={EditIcon} alt="Edit logo" onClick={handleClick} />
        <Button onClick={handleClick}>
          <img src={EditIcon} alt="Edit logo" />
        </Button>
      </ProfileWrapper>
    </>
  );
}
