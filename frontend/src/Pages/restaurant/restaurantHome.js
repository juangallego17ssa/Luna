import React from "react";
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


const RestaurantHome = (props) => {
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
              <Reviews/>
              <Reviews/>
              <Reviews/>
              <Reviews/>
          
            </RestaurantHomeDetailReviewsGrid>
          </RestaurantHomeDetailReviews>
          <RestaurantHomeDetailInformations>
            <RestaurantHomeDetailInformationsOpeningHours>
              <img src={clock}></img>
              <h3>Monday-Friday 9:00 am - 8:00 pm</h3>
            </RestaurantHomeDetailInformationsOpeningHours>
            <RestaurantHomeDetailInformationsPriceLevel>
              <img src={money}></img>
              <h3>Price Level: $$$</h3>
            </RestaurantHomeDetailInformationsPriceLevel>
            <RestaurantHomeDetailInformationsButtonsDiv>
              <RestaurantHomeDetailInformationsButtons>
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
