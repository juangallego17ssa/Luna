import styled from 'styled-components';

export const EntirePageDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  min-height: 100vh;
  background: #F8F8F8;
;
  
`;
export const NavigationDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-self: center;
  width: 70%;
  

`;
export const SubNavigationDiv = styled.div`

        > h3 {
            
          }
            :hover {
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
  background: beige;
`;