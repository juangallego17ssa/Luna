import styled from "styled-components";

export const WriteReviewDiv = styled.div.attrs({
    className: "WriteReviewDiv",
  })`
    background: #F2F2F2;
    flex-grow: 1;
    width: 100%;
    display:flex;
    flex-direction: column;
    align-items: center;
  `;
  
  export const WriteReviewForm = styled.form.attrs({
    className: "WriteReviewForm",

  })`
    margin-top: 38px;
    background: #F2F2F2;
    width: 70%;
    max-width: 850px;
  `;
  
  export const WriteReviewRating = styled.div.attrs({
    className: "WriteReviewRating",
  })`
    background: #F2F2F2;
    display:flex;
    
    width: 100%;
  `;
  
  export const WriteReviewStars = styled.div.attrs({
    className: "WriteReviewStars",
  })`
    margin-left: 30px;
  `;
  
  export const WriteReviewStarsLabel = styled.span.attrs({
    className: "WriteReviewStarsLabel",
  })`
    margin-left: 30px;
    font-style: normal;
    font-weight: 300;
    font-size: 20px;
    line-height: 23px;
    color: #7E7E7E;
    display: flex;
    justify-content: center;
    align-items: center;
  `;
  
  export const WriteReviewContent = styled.textarea.attrs({
    className: "WriteReviewContent",
    type: "textarea",
    placeholder: "Your review helps others learn about great local businesses.\n\nPlease don't review this business if you received a freebie for writing this review, or if you're connected in any way to the owner or employees.",
    required: true,
    autocomplete: "off",
    resize: "none",
  
  })`
    width: 94%;
    height: 240px;
    margin-top: 22px;
    background: #FFFFFF;
    border: 1px solid #E3E3E3;
    border-radius: 3px;
    font-size: 20px;
    padding: 3% 3%;
    resize: none;
    font-family: Roboto, -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    ::placeholder {
              color: rgba(187, 183, 183, 1);
          }
  `;
  
  export const WriteReviewFoot = styled.div.attrs({
    className: "WriteReviewFoot",
  })`
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
    background: #F2F2F2;
    width: 100%;
  `;
  
  
  export const RequiredField = styled.span.attrs({
    className: "RequiredField",
  })`
    color: rgba(176, 0, 0, 1);
  `;
  
  
  export const SubmitButton = styled.button`
    padding: 0.9rem 4rem;
    border-radius: 35px;
    border: none;
    background: #E47D31;
    color: white;
    font-size: 1.2rem;
    line-height: 1.2rem;
    font-family: "Roboto", sans-serif;
    letter-spacing: 1px;
    margin-top: 5px;
    &:hover {
      cursor: pointer;
    }
  `;