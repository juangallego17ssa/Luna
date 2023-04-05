import React from "react";
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
} from "./reviewsCard.styled";
import StarRating from "../StarsRating/starsRating.js";
import ProfilePic from "../../Assets/images/user.png";
import Like from "../../Assets/images/Like.png";


const Reviews = () => {
  return (
    <ReviewMainDiv>
      <ReviewHeadDiv>
        <ReviewHeadProfilePic src={ProfilePic} />
        <ReviewHeadNameReviewCount>
          <h2>Laurent. H</h2>
          <p>6 Reviews in total</p>
        </ReviewHeadNameReviewCount>
        <ReviewHeadStarsDiv>
          <StarRating />
        </ReviewHeadStarsDiv>
        <ReviewHeadCreatedTime>TIME</ReviewHeadCreatedTime>
      </ReviewHeadDiv>
      <ReviewContentDiv>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
          sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
          et justo duo dolores et ea rebum.
        </p>
      </ReviewContentDiv>
      <ReviewLikeCommentDiv>
        <ReviewLikeCommentButtonsDiv>
          <button variant="contained"><img src={Like} alt="like sign" width={'25px'} />&nbsp;{'Like'}</button>
          <button>Comment</button>
        </ReviewLikeCommentButtonsDiv>
        <ReviewViewAllCommentsDiv>
          <span>View all comments</span>
        </ReviewViewAllCommentsDiv>
      </ReviewLikeCommentDiv>
    </ReviewMainDiv>
  );
};

export default Reviews;
