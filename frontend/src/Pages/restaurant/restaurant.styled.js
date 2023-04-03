import styled from "styled-components";

export const RestaurantDiv = styled.html.attrs({
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



export const RestaurantHomeDiv = styled.div.attrs({
  className: "RestaurantHomeDiv",
})`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: blue;
  width: 100%;
  flex-grow:1;
`;

export const ImageHolderDiv = styled.div.attrs({
  className: "ImageHolderDiv",
})`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: greenyellow;
  width: 100%;
  height:196px;
`;

export const RestaurantHomeDetail = styled.div.attrs({
  className: "RestaurantHomeDetail",
})`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: blue;
  width: 100%;
  flex-grow:1;
`;





export const WriteReviewDiv = styled.div.attrs({
  className: "WriteReviewDiv",
})`
  background: #F2F2F2;
  flex-grow: 1;
  width: 100%;
  display:flex;
  flex-direction: column;
  align-items: center;
`;

export const WriteReviewForm = styled.form.attrs({
  className: "WriteReviewForm",
})`
  margin-top: 50px;
  background: #F2F2F2;
  width: 70%;
  max-width: 850px;
`;

export const WriteReviewRating = styled.div.attrs({
  className: "WriteReviewRating",
})`
  background: #F2F2F2;
  display:flex;
  
  width: 100%;
`;

export const WriteReviewStars = styled.input.attrs({
  className: "WriteReviewStars",
  type: "range",
  min: 1,
  max: 5,
  step: 10,
})`
  width: 240px;
`;

export const WriteReviewStarsLabel = styled.span.attrs({
  className: "WriteReviewStarsLabel",
})`
  margin-left: 30px;
  font-style: normal;
  font-weight: 300;
  font-size: 20px;
  line-height: 23px;
  color: #7E7E7E;
`;

export const WriteReviewContent = styled.input.attrs({
  className: "WriteReviewContent",
  type: "textarea",
  placeholder: "Your review helps others learn about great local businesses.  \nPlease don't review this business if you received a freebie for writing this review, or if you're connected in any way to the owner or employees.",
})`
  width: 100%;
  height: 250px;
  background: #FFFFFF;
  border: 1px solid #E3E3E3;
  border-radius: 3px;
`;

export const WriteReviewFoot = styled.div.attrs({
  className: "WriteReviewFoot",
})`
  background: #F2F2F2;
  width: 100%;
`;
