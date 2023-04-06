import { React, useEffect, useState } from "react";
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
import banner from "../../Assets/images/laederach_banner.png"; 
import map from '../../Assets/images/map.png'
import pin from "../../Assets/svg/pin.svg";
import phone from "../../Assets/svg/phone.svg";
import web from "../../Assets/svg/web.svg";
import { axiosWithToken } from "../../Axios/axios";
import RatingStars from "../../Componets/ratingStars/ratingStars";



const Restaurant = () => {

  const params = useParams();
  const restaurantID = params.id
  const [restaurantData, setRestaurantData] = useState({});
  const [reviewData, setReviewData] = useState({});
  const categories = {
      "1": "Asian",
      "2": "Burgers",
      "3": "Chinese",
      "4": "Greek",
      "5": "Healthy",
      "6": "Italian",
      "7": "Mexican",
      "8": "Pizza",
      "9": "Poke",
      "10": "Sandwich",
      "11": "Sushi",
      "13": "Spanish",
      "14": "Vegan",
  }
  const restCategory = categories[restaurantData.category];


  // API Fetches for Restaurant and Reviews
  const getRestaurantByID = async () => {
    try {
      const response = await axiosWithToken.get(`restaurants/${restaurantID}/`);
      setRestaurantData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getReviewsToThisRestaurant = async () => {
    try {
      const response = await axiosWithToken.get(
        `reviews/restaurant/${restaurantID}/`
      );
      setReviewData(response.data);
    } catch (error) {
      console.log(error);
    }
  };


  useEffect(() => {
    if (!localStorage.getItem("access-token")) {
      return;
    }

    getRestaurantByID();
    getReviewsToThisRestaurant();
  }, []);

  // console.log(restaurantData)

  
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
                <h2>{restaurantData.name}</h2>
              </RestaurantBannerInformationRestName>
              <RestaurantBannerInformationRestCategory>
                <h3>{restCategory}</h3>
              </RestaurantBannerInformationRestCategory>
              <RestaurantBannerInformationRestRatingReviews>
                <RatingStars
                  value={restaurantData.rating_average}
                  readOnly={true}
                />
                <RestaurantBannerInformationRestReview>
                  {reviewData.length} reviews
                </RestaurantBannerInformationRestReview>
              </RestaurantBannerInformationRestRatingReviews>
            </RestaurantBannerInformation>

            {showMap ? (
              <RestaurantBannerAddressMap>
                <RestaurantBannerAddressMapImage
                  src={map}
                  alt="restaurant location map"
                />
                <RestaurantBannerAddressInfoWrapper>
                  <RestaurantBannerAddressSymbolsDiv>
                    <RestaurantBannerAddressSymbols src={pin} />
                    <RestaurantBannerAddressSymbols src={phone} />
                    <RestaurantBannerAddressSymbols src={web} />
                  </RestaurantBannerAddressSymbolsDiv>
                  <RestaurantBannerAddressTextDiv>
                    <RestaurantBannerAddressText>
                      {restaurantData.street}
                    </RestaurantBannerAddressText>
                    <RestaurantBannerAddressText>
                      {restaurantData.phone}
                    </RestaurantBannerAddressText>
                    <RestaurantBannerAddressText>
                      {restaurantData.website}
                    </RestaurantBannerAddressText>
                  </RestaurantBannerAddressTextDiv>
                </RestaurantBannerAddressInfoWrapper>
              </RestaurantBannerAddressMap>
            ) : (
              ""
            )}
          </RestaurantBannerOverlayWrapper>
        </RestaurantBannerTitleDiv>
        <Outlet
          context={[showMap, setShowMap, restaurantID]}
          restaurant={restaurantData}
          reviews={reviewData}
        ></Outlet>
      </RestaurantBody>
      <Footer />
    </RestaurantDiv>
  );
};
export default Restaurant;
