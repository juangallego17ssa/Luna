import styled from 'styled-components';

export const EntirePageDiv = styled.div`
  width: 100vw;
  height:100vh;
  display: flex;
  flex-direction: column;
`;
export const NavigationDiv = styled.div`
  display: flex;
  justify-content: center;
  background-color: #F2F2F2;
  flex-grow: 1; 
`;
export const SubNavigationDiv = styled.div`

        > h3 {
          margin-left: 3vh;
          margin-right: 3vh;
          font-size: 1.25rem;
          }
            :hover {
              border-bottom: darkorange solid 2px;
              cursor: pointer;
        }
`;

export const SearchPageContentDiv= styled.div`
  padding: 1.25rem 1.25rem 1.25rem 1.25rem;
  display: flex;
  column-gap: 1.25rem;
  flex-wrap: wrap;
  row-gap: 1.25rem;
  justify-content: center;
`;

export const SearchBarInput= styled.input`
  background: beige;
`;