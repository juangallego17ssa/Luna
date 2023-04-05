import {
  ProfileWrapper,
  Button,
  ProfileButtonWrapper,
  ProfileContainer,
} from "./profile.styled";
import styled from "styled-components";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import EditIcon from "../../../Assets/svg/edit.svg";
import RestaurantIcon from "../../../Assets/svg/restaurant.svg";
import CommentIcon from "../../../Assets/svg/comment.svg";
import StarIcon from "../../../Assets/svg/star.svg";

import UserImage from "../../../Assets/images/user.png";
import ProfileReviews from "../../../Pages/userPages/userReview/userReview";
import ProfileRestaurants from "../../../Pages/userPages/userRestaurant/userRestaurant";
import ProfileComments from "../../../Pages/userPages/userComment/userComment";
import ProfileEdit from "../../../Pages/userPages/userEditProfile/userEditProfile";
import EditUserProfile from "../EditProfile/editprofile";
import { useDispatch, useSelector } from "react-redux";
import {
  setProfileUser,
  getProfileUser,
} from "../../../Redux/Slices/userProfile";

export default function Profile() {
  let user = useSelector((state) => state.userprofile.user_profile);
  const hiddenFileInput = React.useRef(null);
  const [avatar, setAvatar] = useState("");
  const [firstName, setFirstName] = useState("Laurent");

  const [showReviews, setShowReviews] = useState(false);
  const [showComments, setShowComments] = useState(false);
  const [showRestaurants, setShowRestaurants] = useState(false);
  const [showEdit, setShowEdit] = useState(false);

  const dispatch = useDispatch();

  function handleOn(event) {
    console.log(user);
  }

  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };

  function handleProfile(newUserProfile) {
    console.log(newUserProfile);
    console.log("Call new user PROFILE");
    dispatch(setProfileUser(newUserProfile));
  }

  const handleBackgroundChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      setAvatar(e.target.result);
    };
    reader.readAsDataURL(file);
  };

  const Img = styled.img.attrs({
    src: `${UserImage ? UserImage : ""}`,
  })`
    width: 100%;
    height: 100%;
    object-fit: cover;
    background-repeat: no-repeat;
    max-width: 100%;
    z-index: 3000;
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
  `;

  const handleNavComment = () => {
    setShowReviews(false);
    setShowComments(true);
    setShowRestaurants(false);
    setShowEdit(false);
  };

  const handleNavReviews = () => {
    setShowReviews(true);
    setShowComments(false);
    setShowRestaurants(false);
    setShowEdit(false);
  };

  const handleNavRestaurant = () => {
    setShowReviews(true);
    setShowComments(false);
    setShowRestaurants(true);
    setShowEdit(false);
  };

  const handleNavEdit = () => {
    setShowReviews(false);
    setShowComments(false);
    setShowRestaurants(false);
    setShowEdit(true);
  };
  //<IconEdit src={EditIcon} alt="Edit logo" onClick={handleClick} />
  return (
    <>
      <ProfileWrapper>
        <Img src={avatar} alt="Image profile"></Img>

        <ProfileButtonWrapper>
          <h1>{firstName}'s profile</h1>
          <div>
            <Button onClick={handleNavReviews}>
              <div className="options">
                <img src={StarIcon} alt="Reviews Logo" />
                Reviews
              </div>
            </Button>
          </div>
          <div>
            <Button onClick={handleNavComment}>
              <div className="options">
                <img src={CommentIcon} alt="Comments Logo" />
                Comments
              </div>
            </Button>
          </div>
          <div>
            <Button onClick={handleNavRestaurant}>
              <div className="options">
                <img src={RestaurantIcon} alt="Restaurants Logo" />
                Restaurants
              </div>
            </Button>
          </div>
          <div>
            <Button onClick={handleNavEdit}>
              <div className="options">
                <img src={EditIcon} alt="Edit Profile Logo" />
                Edit Profile
              </div>
            </Button>
          </div>
        </ProfileButtonWrapper>
      </ProfileWrapper>
      <ProfileContainer>
        {showReviews && <ProfileReviews />}
        {showComments && <ProfileComments />}
        {showRestaurants && <ProfileRestaurants />}
        {showEdit && <EditUserProfile onSave={handleProfile} />}
      </ProfileContainer>
    </>
  );
}
