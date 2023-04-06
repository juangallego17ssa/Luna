import React from "react";
import {
  Address,
  CardLine,
  CardWrapper,
  RestaurantName,
  RestaurantPicture,
  StarsCommentsWrapper,
} from "./restaurantCard.styled";
import { useNavigate } from "react-router-dom";
import RatingStars from "../ratingStars/ratingStars";

const RestaurantCard = (props) => {
  // console.log(props.restaurant)
  
  const navigate = useNavigate();
  const handleClickDivRestaurantCard = (e) => {
    e.preventDefault();
    navigate(`/restaurant/${props.restaurant.id}/`);
  };



  return (
    <CardWrapper>
      <CardLine />
      <RestaurantName onClick={handleClickDivRestaurantCard}>
        {props.restaurant.name}
      </RestaurantName>
      <Address>
        {props.restaurant.zip} {props.restaurant.city} (
        {props.restaurant.street})
      </Address>
      <StarsCommentsWrapper>
        <div>
          <RatingStars
            value={props.restaurant?.rating_average}
            readOnly={true}
            // onChange={handleRatingChange}
          />
        </div>
        <div>{props.restaurant.reviews_quantity}</div>
      </StarsCommentsWrapper>

      {props.restaurant.image == null ? (
        <RestaurantPicture src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" />
      ) : (
        <RestaurantPicture src={props.restaurant.image} />
      )}
    </CardWrapper>
  );
};

export default RestaurantCard;
