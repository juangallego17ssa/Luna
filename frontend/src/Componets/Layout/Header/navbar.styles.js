import styled from "styled-components";

export const NavbarContDiv=styled.div`
      
display: flex;
justify-content: space-between;
height: 3.125rem;
padding: 0.125rem 0.625rem 0.125rem 0.625rem;
font-weight: 400;
`;
export const NavbarLogoContDiv=styled.div`

display: flex;
justify-content: flex-start;
>*{
  width: 5rem;
}
`;
export const NavbarLogoPageTabsDiv=styled.div`
cursor:pointer;
height: 100%;
display:flex;
align-items:center;
:hover{
  font-weight: bold;
}

>span {
  display: inline-block;
  vertical-align: middle;
  line-height: normal;
}
`;
export const NavbarButtonsContDiv=styled.div`
display: flex;
justify-content: space-between;
max-width: 90%;
min-width: 40%;
align-items: center;
align-items: center;
`;
export const NavbarSignUpButtonGroupsDiv=styled.div`
display: flex;
align-content: baseline;
justify-content: center;
column-gap: 0.063rem;
>*{
  background-color:#E47D31;
  cursor:pointer;
  color: white;
  border: none;
  height: 1.563rem;
  width: 4.688rem;
  font-size: 0.7rem;
}
& button:first-child{
  border-top-left-radius: 1.563rem;
  border-bottom-left-radius: 1.563rem;
}
& button:last-child{
  border-top-right-radius: 1.563rem;
  border-bottom-right-radius: 1.563rem;
}
`;