import { React, useState } from "react";
import {
  RestaurantDiv,
  RestaurantBody,
  RestaurantBannerImgDiv,
  RestaurantBannerTitleDiv,
  RestaurantNavBarWrapper,
  RestaurantBannerOverlayWrapper,
  RestaurantBannerInformation,
  RestaurantBannerInformationRestName,
  RestaurantBannerInformationRestCategory,
  RestaurantBannerInformationRestRatingReviews,
  RestaurantBannerInformationRestReview,
  RestaurantBannerAddressMap,
} from "./restaurant.styled";

import Navbar from "../../Componets/Layout/Header/navbar";
import Footer from "../../Componets/Layout/Footer/footer";
import { Outlet, useParams } from "react-router-dom";
import banner from "../../Assets/images/laederach_banner.png"; 
import StarRating from "../../Componets/StarsRating/starsRating";



const Restaurant = () => {

  const params = useParams();
  const restaurantID = params.id
  const [showMap, setShowMap] = useState(true)

  return (
    <RestaurantDiv>
      {/* NavWrapper needed because otherwise the banner will hide a little bit of the navbar */}
      <RestaurantNavBarWrapper>
        <Navbar />
      </RestaurantNavBarWrapper>

      <RestaurantBody>
        <RestaurantBannerImgDiv>
          <img src={banner} alt="restaurant banner" />
        </RestaurantBannerImgDiv>
        <RestaurantBannerTitleDiv>
          <RestaurantBannerOverlayWrapper>
            <RestaurantBannerInformation>
              <RestaurantBannerInformationRestName>
                <h2>Läderach Chocolatier Suisse</h2>
              </RestaurantBannerInformationRestName>
              <RestaurantBannerInformationRestCategory>
                <h3>Chocolatiers & Shops</h3>
              </RestaurantBannerInformationRestCategory>
              <RestaurantBannerInformationRestRatingReviews>
                <StarRating />
                <RestaurantBannerInformationRestReview>
                  68 reviews
                </RestaurantBannerInformationRestReview>
              </RestaurantBannerInformationRestRatingReviews>
            </RestaurantBannerInformation>
            {showMap ? <RestaurantBannerAddressMap>Adresse</RestaurantBannerAddressMap> : "" }
          </RestaurantBannerOverlayWrapper>
        </RestaurantBannerTitleDiv>
        <Outlet context={[showMap, setShowMap, restaurantID]}></Outlet>
      </RestaurantBody>
      <Footer />
    </RestaurantDiv>
  );
};
export default Restaurant;
