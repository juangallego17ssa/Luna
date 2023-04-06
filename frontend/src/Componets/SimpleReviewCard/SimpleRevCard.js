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
} from "./SimpleRevCard.styled";
import { axiosWithToken } from "../../Axios/axios";
import { FaRegSadCry } from "react-icons/fa";

const SimpleRevCard = (props) => {
  const [commentData, setCommentData] = useState([]);
  const reviewID = props.review.id;
  const latestTwoComents = commentData.slice(-2);
  let commentLength = 130;


  // console.log(props)

  const getCommentsByReviewID = async () => {
    try {
      const response = await axiosWithToken.get(
        `review/comment/all/${reviewID}/`
      );
      setCommentData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (!localStorage.getItem("access-token")) {
      return;
    }

    getCommentsByReviewID();
  }, []);

  // console.log(latestTwoComents);


  return (
    <CardWrapper>
      <CardLine />

      <UserInfos>
        {props.review.user.profile_picture == null ? (
          <UserImage
            src={require("../../Assets/images/user.png")}
            alt="user avatar"
          />
        ) : (
          <UserImage
            src={props.review.user.profile_picture}
            alt="user avatar"
          />
        )}

        <InfoCont>
          <UserName>
            {props.review.user.first_name + " " + props.review.user.last_name}
          </UserName>
          <Address>{commentData.length} Reviews in total</Address>
        </InfoCont>
      </UserInfos>

      <ContentDiv>
        {/* Need To Fetch */}
        <RestName>{props.review.restaurant.name}</RestName>

        <RevText>{props.review.text_content.slice(0, commentLength)}</RevText>

        <ReadMoreBtn>
          {props.review.text_content.length < commentLength ? "" : "read more"}
        </ReadMoreBtn>

        {/* Need To Fetch --> Like 63 / Comment 23 */}
        <ButtonGrey></ButtonGrey>

        <h3>Latest comments</h3>

        {latestTwoComents.map((comment) => {
          return (
            <CommentsOwner>
              <p class="orange">
                {comment.user.first_name + " " + comment.user.last_name}
              </p>
              <p class="black">{comment.text_content}</p>
            </CommentsOwner>
          );
        })}
      </ContentDiv>
    </CardWrapper>
  );
};

export default SimpleRevCard;
