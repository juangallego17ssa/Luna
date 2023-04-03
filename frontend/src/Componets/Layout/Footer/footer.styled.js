import styled from "styled-components";
// rem: padding, margin, font size
//vh and vw and %: colum width, margin, padding, font size
export const FooterContainer = styled.div.attrs({
  className: "FooterContainer",
})`
  /* position: flex; */
  left: 0;
  bottom: 0;
  right: 0;
  font-size: 0.9rem;
  height: 10vh;
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  background: #ffffff;
  /* z-index: 900; // ensure this is always on the top of the elements */
  /* justify-content: space-evenly; */
`;

export const FooterLinks = styled.div.attrs({
  className: "FooterLinks",
})`
  padding: 0rem 1.563rem 0rem 1.563rem;
  display: flex;
  height: 3.75rem;
  //width: 97%;
  justify-content: space-between;
  border-bottom: 0.063rem solid #ebebeb;
`;

export const InfoLinks = styled.div.attrs({
  className: "InfoLinks",
})`
  padding: 0rem 1.563rem;
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  a {
    max-width: 5.313rem;
    height: 100%;
    padding: 0rem 0.625rem;
    text-decoration: none;
    color: grey;
    display: flex;
    align-items: center;
  }
`;

export const SocialLinks = styled.div.attrs({
  className: "SocialLinks",
})`
  max-width: 30%;
  display: flex;
  justify-content: space-between;
`;

export const SocialIcons = styled.img.attrs({
  className: "SocialIcons",
})`
  width: 2rem;
  padding: 0.75rem 0.188rem;
`;

export const Signature = styled.p.attrs({
  className: "Signature",
})`
  padding: 0rem 2.188rem;
  padding-bottom:0.7rem;
  display: flex;
  align-items: center;
  color: grey;
  font-size: 0.75rem;
  height: 3.75rem;
`;
