// BASE IMPORTS
import { React, useEffect, useState } from "react";

// STYLED IMPORTS
import { RestaurantGrid } from "./restPage.styled";

// COMPONENTS IMPORTS
import RestaurantCard from "../../../Componets/restaurant/restaurantCard";
import { axiosWithToken } from "../../../Axios/axios";
import { v4 as uuid } from "uuid";
import { useOutletContext } from "react-router-dom";


// eslint-disable-next-line react-hooks/rules-of-hooks
function RestPage() {

  const [searchText, setSearchText] = useOutletContext();
  console.log(searchText)

  const [restaurantData, setRestaurantData] = useState([]);

  const getAllRestaurants = async () => {
    try {
      const response = await axiosWithToken.get(`restaurants/`);
      setRestaurantData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (!localStorage.getItem("access-token")) {
      return;
    }

    getAllRestaurants();
  }, []);

  return (
    <RestaurantGrid>
      {restaurantData.filter((restaurant) => {
        return restaurant.name.includes(searchText)
      } ).map((restaurant) => {
        console.log(restaurant.name.includes(searchText))
        return <RestaurantCard key={uuid()} restaurant={restaurant} />;
      })}
     
    </RestaurantGrid>
  );
}

export default RestPage;
