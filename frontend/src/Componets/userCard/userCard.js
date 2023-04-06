import React, { useEffect, useState } from "react";
import {
  Address,
  CardLine,
  CardWrapper,
  UserName,
  UserImage,
  InfoCont,
  UserInfos,
  ContentDiv,
  RestName,
  RevText,
  ReadMoreBtn,
  ButtonGrey,
  CommentsOwner,
} from "./userCard.styled";
import { axiosWithToken } from "../../Axios/axios";
import { FaRegSadCry } from "react-icons/fa";

const UserCard = (props) => {
  const [reviewData, setReviewData] = useState([]);
  const userID = props.user.id;
  const latestTwoReviews = reviewData.slice(-2);
  
  // console.log(props)

  const getReviewsByUserID = async () => {
    try {
      const response = await axiosWithToken.get(`reviews/user/${userID}/`);
      setReviewData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (!localStorage.getItem("access-token")) {
      return;
    }

    getReviewsByUserID();
  }, []);

  console.log(reviewData);

  return (
    <CardWrapper>
      <CardLine />
      <UserInfos>
        {props.user.profile_picture == null ? (
          <UserImage
            src={require("../../Assets/images/user.png")}
            alt="user avatar"
          />
        ) : (
          <UserImage
            src={props.user.profile_picture}
            alt="user avatar"
          />
        )}

        <InfoCont>
          <UserName>
            {props.user.first_name + " " + props.user.last_name}
          </UserName>
          <Address>{} Reviews in total</Address>
        </InfoCont>
      </UserInfos>

      <ContentDiv>
        <h3>Latest Reviews</h3>

        {latestTwoReviews.map((review) => {
          return (
            <CommentsOwner>
              <p class="black">{review.text_content}</p>
            </CommentsOwner>
          );
        })}
      </ContentDiv>
    </CardWrapper>
  );
};

export default UserCard;
