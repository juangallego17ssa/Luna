import styled from 'styled-components';

export const EntirePageDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  min-height: 100vh;
  background: #F2F2F2;
`;
export const NavigationDiv = styled.div`
  display: flex;
  justify-content: space-around;
  align-self: center;
  background-color: #F2F2F2;
  width: 40%;
  border-bottom: solid 1px #D8D8D8;
`;
export const SubNavigationDiv = styled.div`
  border-bottom: 2px solid transparent;
        > h3 {
          margin: 1rem;
          font-size: 1.25rem;
          border-bottom: 2px solid transparent;
          }
            :hover {
              border-bottom: darkorange solid 2px;
              cursor: pointer;
        }
`;

export const SearchPageContentDiv= styled.div`
  display: flex;
  flex-grow: 1;
  width: 100%;
  height: 100%;
`;

export const SearchBarInput= styled.input`
  padding: 1.25rem 1.25rem 1.25rem 1.25rem;
  display: flex;
  column-gap: 1.25rem;
  flex-wrap: wrap;
  row-gap: 1.25rem;
  justify-content: center;
`;

export const RestaurantGrid = styled.div`
  display: grid;
  align-self: center;
  justify-content: center;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto;
  height: 100%;
  width: 80rem;
  gap: 2rem;
  justify-items: center;
  margin: 1rem 0;
  

`;