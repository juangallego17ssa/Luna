// BASE IMPORTS
import { React } from "react";

// STYLED IMPORTS
import { RestaurantGrid } from "./restPage.styled"

// COMPONENTS IMPORTS
import RestaurantCard from "../../Componets/restaurant/restaurantCard";


// eslint-disable-next-line react-hooks/rules-of-hooks
function RestPage() {

return (
    <RestaurantGrid>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
    </RestaurantGrid>
);
}

export default RestPage;