import styled from "styled-components";

export const RestaurantDiv = styled.div.attrs({
  className: "RestaurantDiv",
})`
  display: flex;
  flex-direction:column;
  width: 100vw;
  height:100vh;
  font-family: Roboto, -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`;

export const RestaurantNavBarWrapper = styled.div.attrs({
  className: "RestaurantNavBarWrapper",
})`
  height: fit-content;
  width: 100%;

`;
export const RestaurantBody = styled.div.attrs({
  className: "RestaurantBody",
})`
  /* display: flex; */
  position: relative;
  flex-direction: column;
  /* justify-content: space-between; */
  align-items: center;
  width: 100%;
  flex-grow: 1;
  
`;

export const RestaurantBannerImgDiv = styled.div.attrs({
  className: "RestaurantBannerImgDiv",
})`
  position: absolute;
  width: 100%;
  height: fit-content;
  z-index: -1;


  > img {
    height: 400px;
    width: 100%;
    object-fit: fill;
`;


export const RestaurantBannerTitleDiv = styled.div.attrs({
  className: "RestaurantBannerImgDiv",
})`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 160px;
`;

export const RestaurantBannerOverlayWrapper = styled.div.attrs({
  className: "RestaurantBannerOverlayWrapper",
})`
  height: 160px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;


export const RestaurantBannerInformation = styled.div.attrs({
  className: "RestaurantBannerInformation",
})`
  height: 160px;
  width: 50rem;
  display: flex;
  flex-direction: column;
  z-index: 10;
  margin-left: 8rem;
`;

export const RestaurantBannerInformationRestName = styled.div.attrs({
  className: "RestaurantBannerInformationRestName",
})`
  width: 100%;
  display: flex;
  margin: 1rem 0 0.5rem 0;

  > h2 {
    color: white;
    font-weight: 700;
  }
`;

export const RestaurantBannerInformationRestCategory = styled.div.attrs({
  className: "RestaurantBannerInformationRestCategory",
})`
  width: 100%;
  display: flex;
  margin: 0.5rem 0;

  > h3 {
    color: white;
    font-weight: 400;
  }
`;

export const RestaurantBannerInformationRestRatingReviews = styled.div.attrs({
  className: "RestaurantBannerInformationRestRatingReviews",
})`
  width: 100%;
  display: flex;
  margin: 0.5rem 0;
  align-items: flex-start;
`;
export const RestaurantBannerInformationRestReview = styled.div.attrs({
  className: "RestaurantBannerInformationRestReview",
})`
  display: flex;
  margin: 0.5rem 0 0 1rem;
  color: white;
  font-weight: 200;
`;

export const RestaurantBannerAddressMap = styled.div.attrs({
  className: "RestaurantBannerAddressMap",
})`
  height: 300px;
  width: 20rem;
  display: flex;
  flex-direction: column;
  background: white;
  margin-top: 1.75rem;
  margin-right: 5rem;
  border-radius: 3px;
`;
export const RestaurantBannerAddressMapImage = styled.img.attrs({
  className: "RestaurantBannerAddressMapImage",
})`
  height: 150px;
  width: 100%;
  display: flex;
  border-top-right-radius: 3px;
  border-top-left-radius: 3px;
`;

export const RestaurantBannerAddressInfoWrapper = styled.div.attrs({
  className: "RestaurantBannerAddressInfoWrapper",
})`
  height: 150px;
  width: 100%;
  display: flex;
`;

export const RestaurantBannerAddressSymbolsDiv = styled.div.attrs({
  className: "RestaurantBannerAddressSymbolsDiv",
})`
  width: 20%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
`;

export const RestaurantBannerAddressSymbols = styled.img.attrs({
  className: "RestaurantBannerAddressSymbols",
})``;

export const RestaurantBannerAddressTextDiv = styled.div.attrs({
  className: "RestaurantBannerAddressTextDiv",
})`
  width: 80%;
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;
  flex-direction: column;
`;

export const RestaurantBannerAddressText = styled.div.attrs({
  className: "RestaurantBannerAddressText",
})`
  
`;


