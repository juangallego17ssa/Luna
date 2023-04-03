import React from "react";
import {
    Address,
    CardLine,
    CardWrapper,
    RestaurantName,
    RestaurantPicture,
    StarsCommentsWrapper
} from "./restaurantCard.styled";
import star from '../../Assets/svg/star.svg'
const RestaurantCard = () => {

    return (
        <CardWrapper>
            <CardLine/>
            <RestaurantName>Restaurant Name</RestaurantName>
            <Address>Adress</Address>
            <StarsCommentsWrapper>
                <div>
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                </div>
                <div>24</div>
            </StarsCommentsWrapper>
            <RestaurantPicture src={'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'}></RestaurantPicture>
        </CardWrapper>

    );

};

export default RestaurantCard;