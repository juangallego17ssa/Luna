import styled from "styled-components";



export const RestaurantHomeDiv = styled.div.attrs({
    className: "RestaurantHomeDiv",
  })`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    flex-grow: 1;

  `;
  
  export const ImageHolderDiv = styled.div.attrs({
    className: "ImageHolderDiv",
  })`
    display: absolute;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height:240px;
  `;
    


export const RestaurantHomeDetailWrapperDiv = styled.div.attrs({
    className: "RestaurantHomeDetailWrapperDiv",
  })`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #F2F2F2;
    width: 100%;
    flex-grow:1;
    
  `;

export const RestaurantHomeDetailWrapperDivSpacer = styled.div.attrs({
    className: "RestaurantHomeDetailWrapperDivSpacer",
  })`
    display: flex;
    align-self: center;
    justify-content: space-between;
    width:  80rem;
    height: 100%;
  `;

// Restaurant Reviews left side
export const RestaurantHomeDetailReviews = styled.div.attrs({
  className: "RestaurantHomeDetailReviews",
})`
  display: flex;
  flex-direction: column;
  width: 60%;
`;


export const RestaurantHomeDetailReviewsFilterDiv = styled.div.attrs({
  className: "RestaurantHomeDetailReviewsFilter",
})`
  display: flex;
  width: 100%;
  height: 2.5rem;
  margin-top: 1rem;
  justify-content: space-between;
  align-content: center;
`;

export const RestaurantHomeDetailReviewsFilterInput = styled.input.attrs({
  className: "RestaurantHomeDetailReviewsFilterInput",
})`
  width: 75%;
  line-height: 2.5rem;
  border: 1px solid #ebebeb;
  border-radius: 3px;
  font-weight: 700;
  text-indent: 1rem;
  
`;

export const RestaurantHomeDetailReviewsFilterButton = styled.button.attrs({
  className: "RestaurantHomeDetailReviewsFilterButton",
})`
  padding: 0 3rem;
  border-radius: 35px;
  border: none;
  background: #e47d31;
  color: white;
  font-size: 1.2rem;
  line-height: 1.2rem;
  font-family: "Roboto", sans-serif;
  &:hover {
    cursor: pointer;
  }
`;

export const RestaurantHomeDetailReviewsGrid = styled.div.attrs({
  className: "RestaurantHomeDetailReviewsGrid",
})`
  display: grid;
  margin-top: 1rem;
  flex-grow: 1;

`;

// Restaurant Informations on the right side
  export const RestaurantHomeDetailInformations = styled.div.attrs({
    className: "RestaurantHomeDetailInformations",
  })`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 39%;
    background-color: #f5f5f5;
  `;

export const RestaurantHomeDetailInformationsOpeningHours = styled.div.attrs({
  className: "RestaurantHomeDetailInformationsOpeningHours",
})`
  display: flex;
  height: 3rem;
  align-items: center;
  border-bottom: solid 2px #d8d8d8;
  
  > img {
    margin: 1rem;
  }

  > h3 {
    font-weight: 400;
  }
`;
export const RestaurantHomeDetailInformationsPriceLevel = styled.div.attrs({
  className: "RestaurantHomeDetailInformationsOpeningHours",
})`
  display: flex;
  height: 3rem;
  align-items: center;

  > img {
    margin: 1rem;
  }

  > h3 {
    font-weight: 400;
  }
`;
export const RestaurantHomeDetailInformationsButtonsDiv = styled.div.attrs({
  className: "RestaurantHomeDetailInformationsOpeningHours",
})`
  display: flex;
  height: 2.5rem;
  align-content:center;
  justify-content: space-between;
  margin-top: 0.5rem;
  
`;
export const RestaurantHomeDetailInformationsButtons = styled.button.attrs({
  className: "RestaurantHomeDetailInformationsOpeningHours",
})`
  padding: 0rem 2.5rem;
  border-radius: 35px;
  border: none;
  background: #e47d31;
  color: white;
  font-size: 1rem;
  line-height: 1rem;
  font-family: "Roboto", sans-serif;
  &:hover {
    cursor: pointer;
  }
`;