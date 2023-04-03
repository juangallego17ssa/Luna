import styled from "styled-components";

export const RestaurantDiv = styled.html.attrs({
  className: "RestaurantDiv",
})`
  width: 100vw;
  height:100vh;
  background: green;
  display: flex;
`;

export const RestaurantBody = styled.div.attrs({
  className: "RestaurantBody",
})`
  display: flex;
  flex-grow:1;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background: pink;
  width: 100%;
  height:100%;
`;

export const RestaurantBannerImgDiv = styled.div.attrs({
  className: "RestaurantBannerImgDiv",
})`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: white;
  width: 100%;
  height:400px;
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
  font-size: 30px;
  margin-left: 130px;
`;

export const RestaurantBannerTitleCategory = styled.div.attrs({
  className: "RestaurantBannerTitleCategory",
})`
  color: white;
  font-size: 24px;
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
  font-size: 20px;
  margin-left: 130px;
`;

export const RestaurantBannerTitleReview = styled.div.attrs({
  className: "RestaurantBannerTitleCategory",
})`
  color: white;
  font-size: 20px;
  margin-left: 130px;
`;