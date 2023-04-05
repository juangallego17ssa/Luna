import React, { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
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
import ReactTimeAgo from "react-time-ago";
import { axiosWithToken } from "../../Axios/axios";

const Reviews = (props) => {
  const [viewComments, SetViewComments] = useState(false);
  const [commentData, setCommentData] = useState([]);
  const [commentInput, setCommentInput] = useState('');
  const reviewID = props.reviews.id;

  const handleViewHideComments = (e) => {
    SetViewComments(!viewComments);
  };

  const handleCreateComment = (e) => {
    setCommentInput(e.target.value);
  };

  // API Fetches for Restaurant and Reviews
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


  // API POST Create a comment to a Review
  const handleCreateClick = async (e) => {
    e.preventDefault();


    // Prepare the request for login in and getting the token
    const myBody = JSON.stringify({
      text_content: commentInput
    });
    const myConfig = {
      method: "post",
      data: myBody,
    };

    
    try {
      console.log(myConfig);
      const response = (
        await axiosWithToken(`review/comment/new/${reviewID}/`, myConfig)).data;
      console.log("hey");
      console.log(response);
      // navigate(`/`)
    } catch (exception) {
      console.log(exception);
      window.alert("Error!");
    }
    SetViewComments(true);
    console.log("Submit");
  };

  useEffect(() => {
    if (!localStorage.getItem("access-token")) {
      return;
    }

    getCommentsByReviewID();
  }, []);


  return (
    <ReviewMainDiv>
      <ReviewHeadDiv>
        {props.reviews.user.ProfilePic == null ? (
          <ReviewHeadProfilePic src={ProfilePic} />
        ) : (
          <ReviewHeadProfilePic src={props.reviews.user.ProfilePic} />
        )}
        <ReviewHeadNameReviewCount>
          <h2>
            {props.reviews.user.first_name + " " + props.reviews.user.last_name}
          </h2>
          <p>{props.countReviews} Reviews in total</p>
        </ReviewHeadNameReviewCount>
        <ReviewHeadStarsDiv>
          <StarRating />
        </ReviewHeadStarsDiv>
        <ReviewHeadCreatedTime>
          <ReactTimeAgo
            date={Date.parse(props.reviews.date_modified)}
            locale="en-US"
          />
        </ReviewHeadCreatedTime>
      </ReviewHeadDiv>
      <ReviewContentDiv>
        <p>{props.reviews.text_content}</p>
      </ReviewContentDiv>
      {!viewComments ? (
        <ReviewLikeCommentDiv>
          <ReviewLikeCommentButtonsDiv>
            <button variant="contained">
              <img src={Like} alt="like sign" width={"25px"} />
              &nbsp;{"Like"}
            </button>
            <button onClick={handleViewHideComments}>Comment</button>
          </ReviewLikeCommentButtonsDiv>
          <ReviewViewAllCommentsDiv>
            <span onClick={handleViewHideComments}>View all comments</span>
          </ReviewViewAllCommentsDiv>
        </ReviewLikeCommentDiv>
      ) : (
        <ReviewCommentMainDiv>
          <ReviewCreateCommentDiv>
            <ReviewLikeCommentInput
              placeholder="Your comment..."
              onChange={handleCreateComment}
            ></ReviewLikeCommentInput>
            <ReviewCommentButton onClick={handleCreateClick}>
              POST
            </ReviewCommentButton>
            <ReviewViewAllCommentsDivHide>
              <span onClick={handleViewHideComments}>Hide</span>
            </ReviewViewAllCommentsDivHide>
          </ReviewCreateCommentDiv>
          {commentData.map((comment) => {
            return <RestaurantComment key={uuid()} comments={comment} />;
          })}
        </ReviewCommentMainDiv>
      )}
    </ReviewMainDiv>
  );
};

export default Reviews;
