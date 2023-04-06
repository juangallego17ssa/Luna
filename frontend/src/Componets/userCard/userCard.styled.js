import styled from "styled-components";

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 3px;
  background: white;
  height: 410px;
  width: 100%;
  border: solid 2px rgb(235, 235, 235);
`;

export const CardLine = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #e47d31;
  height: 0.5rem;
  width: 100%;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
`;

export const UserInfos = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 20%;
  border-bottom: solid 2px rgb(235, 235, 235);
`;

export const UserName = styled.h4`
  font-size: 1.25rem;
  margin: 0.5rem 0 0.25rem 0;
  font-weight: 400;
  color: #e47d31;
`;

export const Address = styled.p`
  font-size: 1.125rem;
  margin: 0.25rem 0;
  font-weight: 400;
`;

export const UserImage = styled.img`
  width: 100px;
  height: 100%;
`;

export const InfoCont = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  width: 100%;
  height: 100%;

  /* border: 1px solid black; */
`;

export const ContentDiv = styled.div`
  margin: 5px;
  display: flex;
  flex-direction: column;
  width: 100%;
  /* height: 78%; */
  color: #000000;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 16px;
  padding: 10px 10px 10px 10px;
  box-sizing: border-box;
  > h3 {
    font-size: 20px;
    margin: 10px 0 10px 0;
  }
`;

export const RestName = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 20px;
  font-weight: bold;
  color: #e47d31;
  margin: 0px 0 10px 0;
`;

export const RevText = styled.div`
  color: #4c4c4c;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 14px;
  font-weight: bold;
`;

export const ReadMoreBtn = styled.div`
  color: #e47d31;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 16px;
  float: right;
  margin: 0px 0 10px 0;
`;

export const ButtonGrey = styled.div``;

export const CommentsOwner = styled.div`
  > .black {
    font-size: 15px;
    margin: 5px 0 5px 0;
  }

  > .orange {
    font-size: 15px;
    margin: 5px 0 5px 0;
    color: #e47d31;
  }
`;
