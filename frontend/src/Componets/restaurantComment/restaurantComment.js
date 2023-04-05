import React from "react";
import {
  ReviewCommentCreatedTime,
  ReviewCommentDiv,
  ReviewCommentGrid,
  ReviewCommentName,
  ReviewCommentNameTimeDiv,
} from "./restaurantComment.styled";
import ReactTimeAgo from "react-time-ago";
import { RiDeleteBinLine } from "react-icons/ri";
import { axiosWithToken } from "../../Axios/axios";

const RestaurantComment = (props) => {

  console.log(props.comments);
  const commentID = props.comments.id
  
  const handleDeleteComment = async () => {
    try {
      const response = await axiosWithToken.delete(
        `review/comment/${commentID}/`
      );
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <ReviewCommentGrid>
      <ReviewCommentNameTimeDiv>
        <ReviewCommentName>
          {props.comments.user.first_name + " " + props.comments.user.last_name}
        </ReviewCommentName>
        <ReviewCommentCreatedTime>
          <ReactTimeAgo
            date={Date.parse(props.comments.date_modified)}
            locale="en-US"
          />
        </ReviewCommentCreatedTime>
      </ReviewCommentNameTimeDiv>
      <ReviewCommentDiv>
        {props.comments.text_content}
        <RiDeleteBinLine onClick={handleDeleteComment} style={{ cursor: 'pointer'}}/>
      </ReviewCommentDiv>
    </ReviewCommentGrid>
  );
};

export default RestaurantComment;
