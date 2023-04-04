import styled from "styled-components";

export const RestaurantDiv = styled.div.attrs({
  className: "RestaurantDiv",
})`
  display: flex;
  flex-direction:column;
  width: 100vw;
  height:100vh;
  background: green;
  display: flex;
  font-family: Roboto, -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`;

export const RestaurantBody = styled.div.attrs({
  className: "RestaurantBody",
})`
  display: flex;
  flex-grow:1;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height:100%;
`;

export const RestaurantBannerImgDiv = styled.div.attrs({
  className: "RestaurantBannerImgDiv",
})`
  position: absolute;
  background: greenyellow;
  width: 100%;
  height:400px;
  z-index:-1;
`;


export const RestaurantBannerTitleDiv = styled.div.attrs({
  className: "RestaurantBannerImgDiv",
})`
  display: flex;
  flex-direction: column;
  justify-content:center;
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height:204px;
`;

export const RestaurantBannerTitleName = styled.div.attrs({
  className: "RestaurantBannerTitleName",
})`
  color: white;
  font-style: normal;
  font-weight: 600;
  font-size: 30px;
  line-height: 35px;
  margin-left: 130px;
`;

export const RestaurantBannerTitleCategory = styled.div.attrs({
  className: "RestaurantBannerTitleCategory",
})`
  color: white;
  font-style: normal;
  font-weight: 300;
  font-size: 24px;
  line-height: 28px;
  margin-left: 130px;
`;

export const RestaurantBannerTitleRaRe = styled.div.attrs({
  className: "RestaurantBannerTitleCategory",
})`
  display: flex;
`;

export const RestaurantBannerTitleRating = styled.div.attrs({
  className: "RestaurantBannerTitleCategory",
})`
  color: white;
  font-style: normal;
  font-family: Roboto, -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-weight: 100;
  font-size: 20px;
  line-height: 40px;
  margin-left: 130px;
`;

export const RestaurantBannerTitleReview = styled.div.attrs({
  className: "RestaurantBannerTitleCategory",
})`
  color: white;
  font-style: normal;
  font-family: Roboto, -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-weight: 100;
  font-size: 20px;
  line-height: 40px;
  margin-left: 20px;
`;




