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
  

  // {
  //     text_content: 'Last Comment',
  //     user: {
  //       first_name: 'Frist Name',
  //       last_name: 'Last Name'
  //     }, 

  //   }

  const reviewID = props.review.id;
  
  
  
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
    
    console.log(commentData);
    
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
            <Address>{} Reviews in total</Address>
          </InfoCont>
        </UserInfos>

        <ContentDiv>
          {/* Need To Fetch */}
          <RestName>{props.review.restaurant.name}</RestName>

          <RevText>{props.review.text_content}</RevText>

          <ReadMoreBtn>read more</ReadMoreBtn>

          {/* Need To Fetch --> Like 63 / Comment 23 */}
          <ButtonGrey></ButtonGrey>

          <h3>Latest comments</h3>

          {/* Need To Fetch */}
          {/* <CommentsOwner>
            <p class="orange"></p>
            <p class="black">Your review is very nice!</p>
          </CommentsOwner>

          {/* Need To Fetch */}

          {/* <CommentsOwner>
            <p class="orange">
              {commentData.user.first_name +
                " " +
                commentData.user.last_name}
            </p>
            <p class="black">
              {commentData.text_content}
            </p>
          </CommentsOwner> */}
        </ContentDiv>
      </CardWrapper>
    );
};

export default SimpleRevCard;
