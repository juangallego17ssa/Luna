import {
  BannerElements,
  Button,
  BannerTextWrapper,
  BannerText,
} from "./banner.styles";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import React, { useState, useEffect } from "react";
import { axiosWithoutToken, axiosWithToken } from "../../../Axios/axios";

export default function Banner() {
  const dispatch = useDispatch();
  const [banner, setBanner] = useState("");
  const [profile, setProfile] = useState({});
  const [reviews, setReviews] = useState([]);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    axiosWithToken
      .get("me/")
      .then((response) => setProfile(response.data))
      .catch((error) => console.log(error));
  }, []);
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
        firstName={profile ? profile.first_name : ""}
        lastName={profile ? profile.last_name : ""}
        location={profile ? profile.location : ""}
        reviews={reviews.length.toString()}
        comments={comments.length.toString()}
      ></BannerText>
    </BannerElements>
  );
}
