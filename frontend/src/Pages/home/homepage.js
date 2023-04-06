import {React, useState} from "react";

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
import { useEffect } from "react";
import RestaurantCard from "../../Componets/restaurant/restaurantCard";
import { v4 as uuid } from "uuid";
import { useNavigate } from "react-router-dom";



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


    
    const [searchText, setSearchText] = useState()
    const handleSearchChange = (event) => {
        setSearchText(event.target.value);
    }
    
    const navigate = useNavigate()
    const handleSearchClick = () => {
        navigate(`/search/restaurant/${searchText}`)
    }
    
    return (
      <HomepageDiv>
        <Navbar />
        <HomepageBody>
          <HomepageBannerContainerDiv>
            <HomepageBannerSearchbarContainerDiv>
              <HomepageBannerSearchbarInputField
                onChange={handleSearchChange} type="text"
                placeholder=" Search..."
              />
              <HomepageBannerSearchbarButton onClick={handleSearchClick}>
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