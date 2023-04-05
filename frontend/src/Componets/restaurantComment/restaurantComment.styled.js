import styled from "styled-components";

export const ReviewCommentGrid = styled.div.attrs({
  className: "ReviewCommentGrid",
})`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: auto;
  width: 100%;
  border-top: solid 2px #ebebeb;
`;

export const ReviewCommentNameTimeDiv = styled.div.attrs({
  className: "ReviewCommentNameTimeDiv",
})`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

export const ReviewCommentName = styled.div.attrs({
  className: "ReviewCommentName",
})`
  display: flex;
  font-size: 14px;
  font-weight: 700;
  color: #e47d31;
  margin: 0.5rem 0.5rem;
`;

export const ReviewCommentCreatedTime = styled.div.attrs({
  className: "ReviewCommentCreatedTime",
})`
  display: flex;
  font-size: 14px;
  margin: 0.5rem 0.5rem;
`;

export const ReviewCommentDiv = styled.div.attrs({
  className: "ReviewCommentDiv",
})`
  display: flex;
  justify-content: space-between;
  width: 100%;
  /* margin: 0.5rem 0.5rem 0.5rem 0.5rem; */
  padding: 0.5rem;
  box-sizing: border-box;
`;
