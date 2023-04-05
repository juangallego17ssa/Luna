import React, { useState } from "react";
import {
  ReviewHeadDiv,
  ReviewHeadNameReviewCount,
  ReviewHeadProfilePic,
  ReviewMainDiv,
  ReviewHeadCreatedTime,
  ReviewHeadStarsDiv,
  ReviewContentDiv,
  ReviewLikeCommentDiv,
  ReviewLikeCommentButtonsDiv,
  ReviewViewAllCommentsDiv,
  ReviewLikeCommentInput,
  ReviewCommentButton,
  ReviewViewAllCommentsDivHide,
  ReviewCommentMainDiv,
  ReviewCreateCommentDiv,
} from "./reviewsCard.styled";
import StarRating from "../StarsRating/starsRating.js";
import ProfilePic from "../../Assets/images/user.png";
import Like from "../../Assets/images/Like.png";
import RestaurantComment from "../restaurantComment/restaurantComment";

const Reviews = (props) => {
  const [viewComments, SetViewComments] = useState(false);
  console.log(props.reviews)

  const handleViewHideComments = (e) => {
    SetViewComments(!viewComments);
  };

  return (
    <ReviewMainDiv>
      <ReviewHeadDiv>
        {props.reviews.user.ProfilePic == null ? (
          <ReviewHeadProfilePic src={ProfilePic} />
        ) : (
          <ReviewHeadProfilePic src={props.reviews.user.ProfilePic} />
        )}
        <ReviewHeadNameReviewCount>
          <h2>{props.reviews.user.first_name + ' ' + props.reviews.user.last_name}</h2>
          <p>{props.countReviews} Reviews in total</p>
        </ReviewHeadNameReviewCount>
        <ReviewHeadStarsDiv>
          <StarRating />
        </ReviewHeadStarsDiv>
        <ReviewHeadCreatedTime>TIME</ReviewHeadCreatedTime>
      </ReviewHeadDiv>
      <ReviewContentDiv>
        <p>
          {props.reviews.text_content}
        </p>
      </ReviewContentDiv>
      {!viewComments ? (
        <ReviewLikeCommentDiv>
          <ReviewLikeCommentButtonsDiv>
            <button variant="contained">
              <img src={Like} alt="like sign" width={"25px"} />
              &nbsp;{"Like"}
            </button>
            <button>Comment</button>
          </ReviewLikeCommentButtonsDiv>
          <ReviewViewAllCommentsDiv>
            <span onClick={handleViewHideComments}>View all comments</span>
          </ReviewViewAllCommentsDiv>
        </ReviewLikeCommentDiv>
      ) : (
        <ReviewCommentMainDiv>
          <ReviewCreateCommentDiv>
            <ReviewLikeCommentInput placeholder="Your comment..."></ReviewLikeCommentInput>
            <ReviewCommentButton>POST</ReviewCommentButton>
            <ReviewViewAllCommentsDivHide>
              <span onClick={handleViewHideComments}>Hide</span>
            </ReviewViewAllCommentsDivHide>
          </ReviewCreateCommentDiv>
          <RestaurantComment/>
        </ReviewCommentMainDiv>
      )}
    </ReviewMainDiv>
  );
};

export default Reviews;
