import styled from "styled-components";
export const AboutWrapper = styled.div`
  position: absolute;
  right: 2vw;
  width: 30vw;
  height: 55vh;
  top: 32.2vh;
  z-index: 100;
  background: #f2f2f2;
  padding-left: 0.5rem;
  div.upperTitle {
    font-family: "RobotoBold";
    font-style: normal;
    font-weight: 1000;
    font-size: 1.2rem;
    line-height: 100%;
    text-transform: uppercase;
    letter-spacing: 0rem;
    background: #f2f2f2;
    padding-bottom: 1rem;
  }
  div.title {
    font-family: "RobotoBold";
    font-size: 1rem;
    font-weight: 900;
    letter-spacing: 0rem;
    text-align: left;
    line-height: 100%;
    background: #f2f2f2;
    margin-bottom: 0.4rem;
  }
  div.details {
    font-family: "Roboto";
    font-size: 0.8rem;
    font-weight: 300;
    text-align: left;
    margin-bottom: 1rem;
    line-height: 150%;
    background: #f2f2f2;
  }
`;

// export const AboutTextWrapper = styled.div`
//   position: absolute;
//   left: 28.5vh;
//   width: 20%;
//   height: 50%;
//   top: 48%;
//   background-color: transparent;
//   padding-left: 6rem;

//   div.title {
//     font-family: "Roboto";
//     font-size: 1.1rem;
//     font-weight: 700;
//     letter-spacing: 0rem;
//     text-align: left;
//     margin-bottom: 0rem;
//     line-height: 100%;
//     color: #ffffff;
//     margin-bottom: 1rem;
//   }
//   div.details {
//     font-family: "Roboto";
//     font-size: 0.8rem;
//     font-weight: 300;
//     text-align: left;
//     margin-bottom: 0.5rem;
//     line-height: 50%;
//     color: #ffffff;
//   }
// `;

export const AboutText = ({
  firstName,
  location,
  joined_date,
  things_i_love,
  description,
}) => {
  const initial = firstName ? firstName.toUpperCase() : "";
  const name = `${firstName} ${initial}`;
  if (description.length > 220) {
    description = description.substring(0, 220) + "...";
  }

  return (
    <AboutWrapper>
      <div className="upperTitle">{`ABOUT ${firstName}`}</div>
      <div className="title">{"Location"}</div>
      <div className="details">{location}</div>
      <div className="title">{"Luna member since"}</div>
      <div className="details">{joined_date}</div>
      <div className="title">{"Things I love"}</div>
      <div className="details">{things_i_love}</div>
      <div className="title">{"Description"}</div>
      <div className="details">{description}</div>
    </AboutWrapper>
  );
};
