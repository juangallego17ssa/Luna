import styled from "styled-components";

// import background image
// import img from "../../Assets/svg/profilePic"
// background-image: url(${img});
export const HomepageDiv = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;
export const HomepageBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  flex-grow: 1;
`;

export const HomepageBannerContainerDiv = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  height: 300px;
  width: 100%;

  background-size: cover;
  margin-bottom: 20px;
  &:after {
    z-index: 1;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: black;
    opacity: 0.5;
  }
  > * {
    z-index: 100;
  }
`;

export const HomepageBannerSearchbarContainerDiv = styled.div`
  width: 80%;
  position: relative;
  color: white;
  display: flex;
  justify-content: center;
  column-gap: 20px;
`;

export const HomepageBannerSearchbarButton = styled.button`
  border: transparent;
  border-radius: 20px;
  background-color: #e47d31;
  width: 100px;
`;

export const HomepageBannerSearchbarInputField = styled.input`
  height: 25px;
  width: 50%;
  ::placeholder {
    color: grey;
  }
  :focus {
    outline: none;
  }
`;

export const HomepageHighligherLine = styled.hr`
  border-top: 2px solid orange;
  width: 200px;
`;

export const RestaurantCardsContainerDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 50px;
  column-gap: 20px;
  row-gap: 20px;
`;
