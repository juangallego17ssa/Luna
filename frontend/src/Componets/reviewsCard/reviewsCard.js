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
  ReviewCommentGrid,
  ReviewCommentNameTimeDiv,
  ReviewCommentName,
  ReviewCommentCreatedTime,
  ReviewCommentDiv,
  ReviewCommentMainDiv,
  ReviewCreateCommentDiv,
} from "./reviewsCard.styled";
import StarRating from "../StarsRating/starsRating.js";
import ProfilePic from "../../Assets/images/user.png";
import Like from "../../Assets/images/Like.png";

const Reviews = () => {
  const [viewComments, SetViewComments] = useState(false);

  const handleViewHideComments = (e) => {
    SetViewComments(!viewComments);
  };

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
          <ReviewCommentGrid>
            <ReviewCommentNameTimeDiv>
              <ReviewCommentName>Colin Wirz</ReviewCommentName>
              <ReviewCommentCreatedTime>Time</ReviewCommentCreatedTime>
            </ReviewCommentNameTimeDiv>
            <ReviewCommentDiv>
              Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
              dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
              elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
              magna aliquyam erat, sed diam voluptua. At vero eos et accusam et
              justo duo dolores et ea rebum.
            </ReviewCommentDiv>
          </ReviewCommentGrid>
          <ReviewCommentGrid>
            <ReviewCommentNameTimeDiv>
              <ReviewCommentName>Colin Wirz</ReviewCommentName>
              <ReviewCommentCreatedTime>Time</ReviewCommentCreatedTime>
            </ReviewCommentNameTimeDiv>
            <ReviewCommentDiv>
              Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
              dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
              elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
              magna aliquyam erat, sed diam voluptua. At vero eos et accusam et
              justo duo dolores et ea rebum.
            </ReviewCommentDiv>
          </ReviewCommentGrid>
        </ReviewCommentMainDiv>
      )}
    </ReviewMainDiv>
  );
};

export default Reviews;
