import styled from "styled-components";
//import img1 from "../../../Assets/images/b1.png";
import React, { useState, useEffect } from "react";
import { axiosWithToken, axiosWithoutToken } from "../../../Axios/axios";

export const BannerElements = styled.div`
  position: relative;
  display: flex;
  width: 100vw;
  height: 15vh;
  background-color: green;
  z-index: -1;
`;

export const Button = styled.button`
  position: absolute;
  background-color: white;
  position: absolute; /* Add this */
  left: 86vw; /* Also add this for position: absolute to work properly */
  top: 10vh;
  border-radius: 3px;
  min-width: 10%;
  display: inline-block;
  z-index: 10;
`;

export const BannerTextWrapper = styled.div`
  position: absolute;
  left: 25vh;
  width: 20%;
  height: 50%;
  top: 28%;
  background-color: transparent;
  padding-left: 8rem;
  z-index: 100;

  div.name {
    font-family: "Roboto";
    font-size: 1.1rem;
    font-weight: 700;
    letter-spacing: 0rem;
    text-align: left;
    margin-bottom: 0rem;
    line-height: 100%;
    color: #ffffff;
    margin-bottom: 1rem;
  }
  div.details {
    font-family: "Roboto";
    font-size: 0.8rem;
    font-weight: 300;
    text-align: left;
    margin-bottom: 0.5rem;
    line-height: 50%;
    color: #ffffff;
  }
`;

export const BannerText = ({
  firstName,
  lastName,
  location,
  reviews,
  comments,
}) => {
  // const [profile, setProfile] = useState({});
  // const [name, setName] = useState("");
  // const [reviews, setReviews] = useState("");
  // const [comments, setComments] = useState("");

  // useEffect(() => {
  //   axiosWithToken
  //     .get("me/")
  //     .then((response) => setProfile(response.data))
  //     .catch((error) => console.log(error));

  //   if (profile) {
  //     setName(
  //       `${profile.first_name} ${
  //         profile.last_name ? profile.last_name.charAt(0) + "." : ""
  //       }`
  //     );
  //   }

  //   axiosWithToken
  //     .get("reviews/comments/")
  //     .then((response) =>
  //       setComments(response.data ? response.data.length.toString() : "")
  //     )
  //     .catch((error) => console.log(error));

  //   if (profile.id) {
  //     axiosWithToken
  //       .get(`reviews/user/${profile.id}/`)
  //       .then((response) =>
  //         setReviews(response.data ? response.data.length.toString() : "")
  //       )
  //       .catch((error) => console.log(error));
  //     console.log("reviwes", reviews);
  //     console.log(`reviews/user/${profile.id}/`);
  //     console.log(reviews);
  //   }
  // }, []);

  return (
    <BannerTextWrapper>
      <div className="name">
        {firstName ? firstName : ""} {lastName ? lastName.charAt(0) + "." : ""}
      </div>
      <div className="details">
        <span>{location ? location : ""}</span>
      </div>
      <div className="details">
        <span>{`${reviews ? reviews.length.toString() : ""} reviews`}</span>
      </div>
      <div className="details">
        <span>{`${comments} comments`}</span>
      </div>
    </BannerTextWrapper>
  );
};
