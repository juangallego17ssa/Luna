import { React } from "react";
import {
  RestaurantDiv,
  RestaurantBody,
  RestaurantBannerImgDiv,
  RestaurantBannerTitleDiv,
  RestaurantBannerTitleName,
  RestaurantBannerTitleCategory,
  RestaurantBannerTitleRaRe,
  RestaurantBannerTitleRating,
  RestaurantBannerTitleReview,
} from "./restaurant.styled"

import Navbar from "../../Componets/Layout/Header/navbar";
import Footer from "../../Componets/Layout/Footer/footer";
import { Outlet, useParams } from "react-router-dom";



const Restaurant = () => {

  const params = useParams();
  const restaurantID = params.id

  return (
    <RestaurantDiv>
      <Navbar />
      
      <RestaurantBody>

        <RestaurantBannerImgDiv></RestaurantBannerImgDiv>


        <RestaurantBannerTitleDiv>
          <RestaurantBannerTitleName>Restaurant Name</RestaurantBannerTitleName>
          <RestaurantBannerTitleCategory>Category</RestaurantBannerTitleCategory>
          <RestaurantBannerTitleRaRe>
            <RestaurantBannerTitleRating>STARS</RestaurantBannerTitleRating>
            <RestaurantBannerTitleReview>X reviews</RestaurantBannerTitleReview>
          </RestaurantBannerTitleRaRe>
        </RestaurantBannerTitleDiv>
        
        <Outlet context={[restaurantID]}></Outlet>
      </RestaurantBody>
      <Footer />
    </RestaurantDiv>
  );
};
export default Restaurant;
