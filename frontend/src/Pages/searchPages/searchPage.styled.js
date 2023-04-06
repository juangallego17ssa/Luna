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

  div{
    height: 4rem;
    border-bottom: transparent solid 2px;

    :hover {
              border-bottom: darkorange solid 2px;
              cursor: pointer;
            }
    .NavLink{
      height: 100%;
      display:flex;
      align-items: center;
      text-decoration: none;
      border-bottom: 2px solid transparent;
      color:rgba(76, 76, 76, 1);
      font-size: 1.25rem;
      border-bottom: 2px solid transparent;
    }
    .NavLink.active{
      border-bottom: darkorange solid 2px;
    }
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


