import {React} from "react";

import {
    HomepageDiv,
    HomepageBannerContainerDiv,
    HomepageBannerSearchbarButton,
    HomepageBannerSearchbarContainerDiv,
    HomepageBannerSearchbarInputField,
    HomepageBody,
    HomepageHighligherLine,
    RestaurantCardsContainerDiv,
    RestaurantGrid
} from "./homepage.styled";

import Navbar from "../../Componets/Layout/Header/navbar";
import Footer from "../../Componets/Layout/Footer/footer";
import { axiosWithToken } from "../../Axios/axios";
import { useState } from "react";
import { useEffect } from "react";
import RestaurantCard from "../../Componets/restaurant/restaurantCard";
import { v4 as uuid } from "uuid";

function Homepage() {
    
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
  
  
  const sortedList = restaurantData?.sort(
    (a, b) => b.average_rating - a.average_rating
  );
  const topFourRestaurants = sortedList?.slice(0, 4);


    
    return (
      <HomepageDiv>
        <Navbar />
        <HomepageBody>
          <HomepageBannerContainerDiv>
            <HomepageBannerSearchbarContainerDiv>
              <HomepageBannerSearchbarInputField
                type="text"
                placeholder=" Search..."
              />
              <HomepageBannerSearchbarButton>
                Search
              </HomepageBannerSearchbarButton>
            </HomepageBannerSearchbarContainerDiv>
          </HomepageBannerContainerDiv>

          <h4> BEST RATED RESTAURANTS</h4>
          <HomepageHighligherLine />

          <RestaurantCardsContainerDiv>
            <RestaurantGrid>
              {topFourRestaurants.map((restaurant) => {
                return <RestaurantCard key={uuid()} restaurant={restaurant} />;
              })}
            </RestaurantGrid>
          </RestaurantCardsContainerDiv>
        </HomepageBody>
        <Footer />
      </HomepageDiv>
    );
}

export default Homepage;