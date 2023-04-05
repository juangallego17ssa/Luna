import styled from "styled-components";

export const EditUserProfileWrapper = styled.div`
  position: absolute;
  left: 0vh;
  width: 38vw;
  height: 65vh;
  z-index: -3;
  top: 0vh;

  background-color: white;

  h1.title {
    margin-top: 5px;
    margin-bottom: 0px;
    font-family: "RobotoBold";
    font-style: normal;
    font-weight: 700;
    font-size: 0.9rem;
    line-height: 23px;
    text-transform: uppercase;
    padding-left: 10px;

    color: #303030;
    background-color: #ffffff;
  }
  h1.subtitle {
    font-family: "RobotoBold";
    font-style: normal;
    font-weight: 700;
    font-size: 0.9rem;
    line-height: 23px;

    color: #979797;
    background-color: #ffffff;
    margin-bottom: 0.1rem;
    margin-top: 0.1rem;
    padding-bottom: 0.1rem;
  }
  form {
    margin: 10px;
  }
  input {
    height: 2.5vh;
    width: 16vw;
    margin-top: 0.2rem;
    background: #ffffff;
    border: 1px solid #e3e3e3;
    border-radius: 1px;
    font-size: 0.8rem;
  }
`;

export const InputText = styled.input.attrs({
  autocomplete: "off",
})`
  border: 1px solid #ebebeb;
  border-radius: 3px;
  width: 100%;
  text-indent: 1rem;
  height: 100%;

  font-style: normal;
  font-weight: 200;
  font-size: 22px;
  line-height: 26px;
  color: #787878;
`;

export const SubmitButton = styled.button`
  border-radius: 35px;
  border: none;
  background: #e47d31;
  color: white;
  font-size: 0.7rem;
  line-height: 1rem;
  font-family: "Roboto", sans-serif;
  letter-spacing: 1px;
  margin-top: 1%;
  height: 1.563rem;
  width: 4.688rem;
  font-size: 1rem;

  &:focus {
    background-color: ${({ clicked }) => (clicked ? "#00000015" : "#FFFFFF")};
    outline: none;
  }
`;

export const DescriptionContent = styled.textarea.attrs({
  className: "WriteReviewContent",
  type: "textarea",
  placeholder:
    "Your review helps others learn about great local businesses.\n\nPlease don't review this business if you received a freebie for writing this review, or if you're connected in any way to the owner or employees.",
  required: true,
  autocomplete: "off",
  resize: "none",
})`
  width: 100%;
  height: 9.5vh;
  margin-top: 0.2rem;
  background: #ffffff;
  border: 1px solid #e3e3e3;
  border-radius: 1px;
  font-size: 0.8rem;
  padding: 1% 1%;
  resize: none;
  font-family: "Roboto";
  ::placeholder {
    color: rgba(187, 183, 183, 1);
  }
`;
