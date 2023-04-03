import React from "react";
import {CardWrapper} from "./restaurantCard.styled";

const RestaurantCard = () => {

    return (
        <CardWrapper>
            <div>Line</div>
            <div>Restaurant Name</div>
            <div>Adress</div>
            <div>
                <div>Stars</div>
                <div>24</div>
            </div>
            <div>Image</div>
        </CardWrapper>

    );

};

export default RestaurantCard;