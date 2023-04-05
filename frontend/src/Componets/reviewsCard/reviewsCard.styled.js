import styled from "styled-components";

export const ReviewMainDiv = styled.div.attrs({
  className: "ReviewMainDiv",
})`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  background-color: white;
  margin-top: 1rem;
  border-radius: 3px;
`;

export const ReviewHeadDiv = styled.div.attrs({
  className: "ReviewHeadDiv",
})`
  display: flex;
  height: 4rem;
  width: 100%;
  margin-top: 1rem;
  border-bottom: solid 2px #ebebeb;
  background-color: white;
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
  margin-right: 0.5rem;
  margin-top: 0.5rem;
  font-size: 1rem;
  flex-grow: 1;
`;

export const ReviewContentDiv = styled.div.attrs({
  className: "ReviewContentDiv",
})`
  display: flex;
  width: 98%;
  justify-content: flex-start;
  margin: 0.5rem ;

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
  align-items: center;
  justify-content: space-between;
  margin: 0 0.5rem;
`;
export const ReviewLikeCommentButtonsDiv = styled.div.attrs({
  className: "ReviewLikeCommentButtonsDiv",
})`
  display: flex;
  margin-left: 0.5rem;
  column-gap: 0.1rem;
  


  > * {
    background-color: rgba(145, 145,145,0.6);
    cursor: pointer;
    color: white;
    border: none;
    height: 2.2rem;
    width: 10rem;
    font-size: 1.2rem; 
    justify-content

    
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
  color: #E47D31;
  margin-right: 0.5rem;
  
  > span {
    cursor: pointer;
  }

`;

export const ReviewCommentMainDiv = styled.div.attrs({
  className: "ReviewCommentMainDiv",
})`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 1rem;
  margin-bottom: 1rem;

`;

export const ReviewCreateCommentDiv = styled.div.attrs({
  className: "ReviewCreateCommentDiv",
})`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin: 0 0.5rem 0.5rem 0.5rem;

`;

export const ReviewLikeCommentInput = styled.input.attrs({
  className: "ReviewLikeCommentInput",
})`
  width: 60%;
  line-height: 2.5rem;
  border: 1px solid #ebebeb;
  border-radius: 3px;
  font-weight: 700;
  text-indent: 1rem;
`;

export const ReviewCommentButton = styled.button.attrs({
  className: "ReviewCommentButton",
})`
  padding: 0 3rem;
  border-radius: 35px;
  border: none;
  background: #e47d31;
  color: white;
  font-size: 1.2rem;
  line-height: 1.2rem;
  margin-right: 6rem;
  font-family: "Roboto", sans-serif;
  &:hover {
    cursor: pointer;
  }
`;

export const ReviewViewAllCommentsDivHide = styled.div.attrs({
  className: "ReviewViewAllCommentsDivHide",
})`
  display: flex;
  color: #e47d31;
  align-items: center;
  margin-right: 1rem;
  

  > span {
    cursor: pointer;
  }
`;

