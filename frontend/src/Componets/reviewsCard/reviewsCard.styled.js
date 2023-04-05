import styled from "styled-components";

export const ReviewMainDiv = styled.div.attrs({
  className: "ReviewMainDiv",
})`
  display: flex;
  flex-direction: column;
  width:100%;
  align-items: center;
`;

export const ReviewHeadDiv = styled.div.attrs({
  className: "ReviewHeadDiv",
})`
  display: flex;
  height: 4rem;
  width: 100%;
  margin-top: 1rem;
  border-bottom: solid 2px lightgray;
`;

export const ReviewHeadProfilePic = styled.img.attrs({
  className: "ReviewHeadProfilePic",
})`
  width: 4rem;
`;

export const ReviewHeadNameReviewCount = styled.div.attrs({
  className: "ReviewHeadNameReviewCount",
})`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  margin: 0.2rem 1rem;

  > h2 {
    color: #e47d31;
  }

  > p {
    font-weight: bold;
  }
`;

export const ReviewHeadStarsDiv = styled.div.attrs({
  className: "ReviewHeadStarsDiv",
})`
  display: flex;
  align-items: center;
  margin-left: 2rem;
`;

export const ReviewHeadCreatedTime = styled.div.attrs({
  className: "ReviewHeadCreatedTime",
})`
  display: flex;
  justify-content: flex-end;
  margin-top: 0.5rem;
  flex-grow: 1;
`;

export const ReviewContentDiv = styled.div.attrs({
  className: "ReviewContentDiv",
})`
  display: flex;
  flex-direction: column;
  margin: 1rem;

  > p {
    font-size: 1rem;
    font-weight: 300;
  }
  
  
`;

export const ReviewLikeCommentDiv = styled.div.attrs({
  className: "ReviewLikeCommentDiv",
})`
  display: flex;
  height: 3rem;
  width: 100%;
  margin-top: 1rem;
  align-items: center;
  justify-content: space-between;
`;
export const ReviewLikeCommentButtonsDiv = styled.div.attrs({
  className: "ReviewLikeCommentButtonsDiv",
})`
  display: flex;
  align-content: baseline;
  justify-content: center;
  column-gap: 0.1rem;
  > * {
    background-color: rgba(145, 145,145,0.6);
    cursor: pointer;
    color: white;
    border: none;
    height: 3rem;
    width: 10rem;
    font-size: 1.2rem;
  }
  & button:first-child {
    border-top-left-radius: 1.563rem;
    border-bottom-left-radius: 1.563rem;
  }
  & button:last-child {
    border-top-right-radius: 1.563rem;
    border-bottom-right-radius: 1.563rem;
  }
`;
export const ReviewViewAllCommentsDiv = styled.div.attrs({
  className: "ReviewViewAllCommentsDiv",
})`
  display: flex;
  color: #E47D31
`;
