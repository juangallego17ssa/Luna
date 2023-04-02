import styled from 'styled-components';

export const FooterLinks = styled.div `
padding: 0rem 1.563rem 0rem 1.563rem;
display:flex;
height: 3.75rem;
justify-content:space-between;
border-bottom: 0.063rem solid #ebebeb;
`
export const FooterContainer = styled.div `
font-size: 0.9rem;
height: 5.688rem;
display:flex;
flex-direction:column;
justify-content:space-between;
`
export const InfoLinks = styled.div`
padding: 0rem 1.563rem;
width: 50%;
height: 100%;
display:flex;
justify-content:space-between;
align-items:center;
a {
  max-width: 5.313rem;
  height: 100%;
  padding: 0rem 0.625rem;
  text-decoration:none;
  color:grey;
  display:flex;
  align-items:center;
}
`
export const SocialLinks= styled.div`
max-width: 30%;
display:flex;
justify-content:space-between;
`
export const SocialIcons=styled.img`
width: 2.5rem;
padding: 0.75rem 0.188rem;
`
export const Signature=styled.p`
padding: 0rem 2.188rem;
display:flex;
align-items:center;
color: grey;
font-size: 0.75rem;
`
