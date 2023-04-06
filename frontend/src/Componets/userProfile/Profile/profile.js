import {
  ProfileWrapper,
  Button,
  ProfileButtonWrapper,
  ProfileContainer,
} from "./profile.styled";
import styled from "styled-components";
import React, { useState, useEffect } from "react";
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
import { axiosWithToken, axiosWithoutToken } from "../../../Axios/axios";

export default function Profile() {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = "scroll");
  });
  const [imageUrl, setImageUrl] = useState(null);
  const [profile, setProfile] = useState({});
  const [files, setFiles] = useState([]);
  const formData = new FormData();
  let user = useSelector((state) => state.userprofile.user_profile);
  const hiddenFileInput = React.useRef(null);
  const [firstName, setFirstName] = useState("Laurent");

  const [showReviews, setShowReviews] = useState(false);
  const [showComments, setShowComments] = useState(false);
  const [showRestaurants, setShowRestaurants] = useState(false);
  const [showEdit, setShowEdit] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    axiosWithToken
      .get("/me/")
      .then((response) => setImageUrl(response.data.profile_picture))
      .catch((error) => console.log(error));

    console.log("FOTO");
    console.log(imageUrl);
  }, []);

  function handleOn(event) {
    console.log(user);
  }

  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };

  function handleProfile(newUserProfile) {
    console.log(newUserProfile);
    console.log("Call new user PROFILE");
    setProfileUser(newUserProfile);
  }

  const Img = styled.img.attrs({
    src: `${imageUrl ? imageUrl : ""}`,
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
    top: -7rem;
    width: 60%;
    height: 60%;
    left: 4vw;
    object-fit: contain;
    background-repeat: no-repeat;
    max-width: 50%;
    z-index: 4000;
    opacity: 0.5;
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

  async function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData();

    formData.append("profile_picture", file);

    const myConfig = {
      method: "patch",
      data: formData,
      maxBodyLength: Infinity,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };

    const response = await (await axiosWithToken(`/me/`, myConfig)).data;
    console.log("RESPONSE");
    console.log(response);
  }

  const [file, setFile] = useState(null);

  function handleFileInputChange(event) {
    setFile(event.target.files[0]);
  }

  return (
    <>
      <ProfileWrapper>
        <Img src={imageUrl} alt="Image profile"></Img>
        {showEdit ? (
          <form onSubmit={handleSubmit}>
            <input type="file" onChange={handleFileInputChange} />
            <button type="submit">Submit</button>
          </form>
        ) : (
          <></>
        )}
        {/* {showEdit ? (
          <IconEdit
            src={EditIcon}
            alt="Edit logo"
            onClick={(e) => sendPost(e)}
          />
        ) : (
          <></>
        )}{" "}
        <input
          type="file"
          ref={hiddenFileInput}
          onChange={onFileChange}
          style={{ display: "none" }}
        /> */}
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
