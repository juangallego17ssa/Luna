import styled from 'styled-components';

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 3px;
  background: white;
  height: 410px;
  width: 100%;
  border: solid 1px #EBEBEB;
  
`;

export const CardLine = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #E47D31;
  height: 0.5rem;
  width: 100%;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  
`;

export const RestaurantName = styled.div`
  display: inline-flex;
  align-content: flex-start;
  justify-content: flex-start;
  width: 90%;
  font-size: 1.25rem;
  margin: 0.5rem 0 0.25rem 0;
  font-weight: 400;
  cursor: pointer;
`;

export const Address = styled.div`
  display: flex;
  align-content: flex-start;
  justify-content: flex-start;
  width: 90%;
  font-size: 1.125rem;
  margin: 0.25rem 0;
  font-weight: 400;
`;

export const StarsCommentsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-content: flex-start;
  justify-content: space-between;
  width: 90%;
  font-size: 1.125rem;
  margin: 0.25rem 0 0.5rem 0;
  font-weight: 400;
  
  > div {
    display: flex;
    align-items: center;
    
    > img {
    height: 1.6rem;
    }
    
  }
  
`;

export const RestaurantPicture = styled.img`
  display: inline-flex;
  align-content: flex-start;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
