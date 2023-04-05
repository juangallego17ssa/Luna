import React, { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
import {
  RestaurantHomeDiv,
  ImageHolderDiv,
  RestaurantHomeDetailWrapperDiv,
  RestaurantHomeDetailWrapperDivSpacer,
  RestaurantHomeDetailReviews,
  RestaurantHomeDetailInformations,
  RestaurantHomeDetailReviewsFilterDiv,
  RestaurantHomeDetailReviewsFilterButton,
  RestaurantHomeDetailReviewsFilterInput,
  RestaurantHomeDetailReviewsGrid,
  RestaurantHomeDetailInformationsOpeningHours,
  RestaurantHomeDetailInformationsPriceLevel,
  RestaurantHomeDetailInformationsButtons,
  RestaurantHomeDetailInformationsButtonsDiv,
} from "./restaurantHome.styled";

import clock from '../../Assets/svg/clock.svg';
import money from '../../Assets/svg/money.svg';
import Reviews from "../../Componets/reviewsCard/reviewsCard";
import { useNavigate, useParams } from "react-router-dom";
import { axiosWithToken } from "../../Axios/axios";



const RestaurantHome = () => {
  const params = useParams();
  const restaurantID = params.id;
  const [restaurantData, setRestaurantData] = useState({});
  const [reviewData, setReviewData] = useState([]);
  const navigate = useNavigate();

  const priceLevelHelper = {
    '1': '$',
    '2': '$$',
    '3': '$$$',
  }

  const priceLevel = priceLevelHelper[restaurantData.price_level]

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


  const handleWriteReview = (e) => {
    navigate(`/restaurant/${restaurantID}/write_review/`);
  }

  return (
    <RestaurantHomeDiv>
      <ImageHolderDiv />
      <RestaurantHomeDetailWrapperDiv>
        <RestaurantHomeDetailWrapperDivSpacer>
          <RestaurantHomeDetailReviews>
            <RestaurantHomeDetailReviewsFilterDiv>
              <RestaurantHomeDetailReviewsFilterInput placeholder="Filter list..."></RestaurantHomeDetailReviewsFilterInput>
              <RestaurantHomeDetailReviewsFilterButton>
                FILTER
              </RestaurantHomeDetailReviewsFilterButton>
            </RestaurantHomeDetailReviewsFilterDiv>
            <RestaurantHomeDetailReviewsGrid>
              {reviewData.map((review) => {
                return (
                  <Reviews
                    key={uuid()}
                    reviews={review}
                    countReviews={reviewData.length}
                  />
                );
              })}
            </RestaurantHomeDetailReviewsGrid>
          </RestaurantHomeDetailReviews>
          <RestaurantHomeDetailInformations>
            <RestaurantHomeDetailInformationsOpeningHours>
              <img src={clock} alt="clock icon"></img>
              <h3>Monday-Friday {restaurantData.opening_hours}</h3>
            </RestaurantHomeDetailInformationsOpeningHours>
            <RestaurantHomeDetailInformationsPriceLevel>
              <img src={money} alt="money icon"></img>
              <h3>Price Level: {priceLevel}</h3>
            </RestaurantHomeDetailInformationsPriceLevel>
            <RestaurantHomeDetailInformationsButtonsDiv>
              <RestaurantHomeDetailInformationsButtons
                onClick={handleWriteReview}
              >
                WRITE A REVIEW
              </RestaurantHomeDetailInformationsButtons>
              <RestaurantHomeDetailInformationsButtons>
                EDIT DATA
              </RestaurantHomeDetailInformationsButtons>
            </RestaurantHomeDetailInformationsButtonsDiv>
          </RestaurantHomeDetailInformations>
        </RestaurantHomeDetailWrapperDivSpacer>
      </RestaurantHomeDetailWrapperDiv>
    </RestaurantHomeDiv>
  );
};

export default RestaurantHome;
