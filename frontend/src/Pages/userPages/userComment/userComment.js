import UserProfile from "../userProfile/userProfile";
import React, { useState, useEffect } from "react";
import { axiosWithToken } from "../../../Axios/axios";
import RestaurantComment from "../../../Componets/restaurantComment/restaurantComment";
import { v4 as uuid } from "uuid";
import { ReviewCreateCommentDiv } from "../../../Componets/reviewsCard/reviewsCard.styled";

export default function ProfileComments() {
  const [comments, setComments] = useState([]);
  useEffect(() => {
    axiosWithToken
      .get("reviews/comments/")
      .then((response) => setComments(response.data))
      .catch((error) => console.log(error));
  });

  return (
    <>
      <ReviewCreateCommentDiv>
        {comments.map((comment) => {
          return <RestaurantComment key={uuid()} comments={comment} />;
        })}
      </ReviewCreateCommentDiv>
    </>
  );
}
