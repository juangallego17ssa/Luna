import React from "react";
import {
  ReviewCommentCreatedTime,
  ReviewCommentDiv,
  ReviewCommentGrid,
  ReviewCommentName,
  ReviewCommentNameTimeDiv,
} from "./restaurantComment.styled";

const RestaurantComment = (props) => {
  return (
    <ReviewCommentGrid>
      <ReviewCommentNameTimeDiv>
        <ReviewCommentName>Colin Wirz</ReviewCommentName>
        <ReviewCommentCreatedTime>Time</ReviewCommentCreatedTime>
      </ReviewCommentNameTimeDiv>
      <ReviewCommentDiv>
        Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor
        sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
        diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
        erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et
        ea rebum.
      </ReviewCommentDiv>
    </ReviewCommentGrid>
  );
};

export default RestaurantComment;
