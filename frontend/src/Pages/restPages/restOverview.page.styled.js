import styled from 'styled-components';


export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height:  100vh;
  width: 100vw;
`;

export const NavBarWrapper = styled.div`
  height: fit-content;
  width: 100%;
  position: relative;
`;
export const BannerWrapper = styled.div`
  height:  400px;
  width: 100%;
`;
export const Banner = styled.img`
  height:  400px;
  width: 100%;
  object-fit: fill;
  position: absolute;
  z-index: -10;
`;

export const BannerOverlayWrapper = styled.div`
  height:  170px;
  width: 100%;
  display: flex;
  flex-direction: row;
  z-index: 5;
  justify-content: space-between;
`;

export const BannerDarker = styled.div`
  height:  170px;
  width: 100%;
  background: black;
  position: absolute;
  z-index: 1;
  opacity: 50%;
`;

export const BannerInformation = styled.div`
  height:  170px;
  width: 50rem;
  display: flex;
  flex-direction: column;
  z-index: 10;
  margin-left: 8rem;
`;

export const BannerInformationRestName = styled.div`
  width: 100%;
  display: flex;
  margin: 1rem 0 0.5rem 0;
  
  > h2 {
    color: white;
    font-weight: 700;
  }
`;

export const BannerInformationRestCategory = styled.div`
  width: 100%;
  display: flex;
  margin: 0.5rem 0;
  
  > h3 {
    color: white;
    font-weight: 400;
  }
`;

export const BannerInformationRestRatingReviews = styled.div`
  width: 100%;
  display: flex;
  margin: 0.5rem 0;
  align-items: flex-start;
  
`;
export const BannerInformationRestReview = styled.div`
  display: flex;
  margin: 0.5rem 0 0 1rem;
  color: white;
  font-weight: 200;
`;

export const BannerAddress = styled.div`
  height:  300px;
  width: 20rem;
  display: flex;
  z-index: 20;
  background: aqua;
  margin-top: 1.75rem;
  margin-right: 5rem;
`;

export const BannerSpacer = styled.div`
  height: 230px;
  width: 100%;
  display: flex;
`;

export const MainContainer = styled.div`
  height:  100%;
  width: 100%;
  display: flex;
  flex-grow: 1;
  background: #F2F2F2;
  
  
`;