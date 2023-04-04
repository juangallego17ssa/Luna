import { React } from "react";
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
  RestaurantBannerAddressMapImage,
  RestaurantBannerAddressInfoWrapper,
  RestaurantBannerAddressSymbolsDiv,
  RestaurantBannerAddressText,
  RestaurantBannerAddressTextDiv,
  RestaurantBannerAddressSymbols,
} from "./restaurant.styled";

import Navbar from "../../Componets/Layout/Header/navbar";
import Footer from "../../Componets/Layout/Footer/footer";
import { Outlet, useParams } from "react-router-dom";
import StarRating from "../../Componets/StarsRating/starsRating";
import banner from "../../Assets/images/laederach_banner.png"; 
import map from '../../Assets/images/map.png'
import pin from "../../Assets/svg/pin.svg";
import phone from "../../Assets/svg/phone.svg";
import web from "../../Assets/svg/web.svg";





const Restaurant = () => {

  const params = useParams();
  const restaurantID = params.id

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
            
            <RestaurantBannerAddressMap>
              <RestaurantBannerAddressMapImage src={map} alt="restaurant location map"/>
              <RestaurantBannerAddressInfoWrapper>
                <RestaurantBannerAddressSymbolsDiv>
                  <RestaurantBannerAddressSymbols src={pin} />
                  <RestaurantBannerAddressSymbols src={phone} />
                  <RestaurantBannerAddressSymbols src={web} />
                </RestaurantBannerAddressSymbolsDiv>
                <RestaurantBannerAddressTextDiv>
                  <RestaurantBannerAddressText>Bahnhofstrasse 106</RestaurantBannerAddressText>
                  <RestaurantBannerAddressText>+41 44 211 53 72</RestaurantBannerAddressText>
                  <RestaurantBannerAddressText>laederach.com</RestaurantBannerAddressText>
                </RestaurantBannerAddressTextDiv>
              </RestaurantBannerAddressInfoWrapper>
            </RestaurantBannerAddressMap>
          
          </RestaurantBannerOverlayWrapper>
        </RestaurantBannerTitleDiv>
        <Outlet context={[restaurantID]}></Outlet>
      </RestaurantBody>
      <Footer />
    </RestaurantDiv>
  );
};
export default Restaurant;
