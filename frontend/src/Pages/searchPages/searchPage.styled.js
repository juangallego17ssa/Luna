import styled from 'styled-components';

export const EntirePageDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  min-height: 100vh;
  background: #F8F8F8;
`;
export const NavigationDiv = styled.div`
  display: flex;
  justify-content: center;
  background-color: #F2F2F2;
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