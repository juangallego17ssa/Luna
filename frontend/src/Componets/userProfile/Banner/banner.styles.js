import styled from "styled-components";
//import img1 from "../../../Assets/images/b1.png";

export const BannerElements = styled.div`
  position: relative;
  display: flex;
  width: 100vw;
  height: 15vh;
  background-color: green;
  z-index: -1;
`;

export const Button = styled.button`
  position: absolute;
  background-color: white;
  position: absolute; /* Add this */
  left: 85vw; /* Also add this for position: absolute to work properly */
  top: 15vh;
  border-radius: 3px;
  min-width: 10%;
  display: inline-block;
  z-index: 10;
`;

export const BannerTextWrapper = styled.div`
  position: absolute;
  left: 25vh;
  width: 20%;
  height: 50%;
  top: 28%;
  background-color: transparent;
  padding-left: 8rem;
  z-index: 100;

  div.name {
    font-family: "Roboto";
    font-size: 1.1rem;
    font-weight: 700;
    letter-spacing: 0rem;
    text-align: left;
    margin-bottom: 0rem;
    line-height: 100%;
    color: #ffffff;
    margin-bottom: 1rem;
  }
  div.details {
    font-family: "Roboto";
    font-size: 0.8rem;
    font-weight: 300;
    text-align: left;
    margin-bottom: 0.5rem;
    line-height: 50%;
    color: #ffffff;
  }
`;

export const BannerText = ({
  firstName,
  lastName,
  location,
  numberReviews,
  numberComments,
}) => {
  const initial = lastName ? lastName.charAt(0) + "." : "";
  const placeHolder = `${firstName} ${initial}`;
  const placeHolderReview = `${numberReviews} reviews`;
  const placeHolderComment = `${numberComments} comments`;

  return (
    <BannerTextWrapper>
      <div className="name">{placeHolder}</div>
      <div className="details">
        <span>{location}</span>
      </div>
      <div className="details">
        <span>{placeHolderReview}</span>
      </div>
      <div className="details">
        <span>{placeHolderComment}</span>
      </div>
    </BannerTextWrapper>
  );
};
