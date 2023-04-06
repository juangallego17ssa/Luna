import React from "react";
import {
    Address,
    CardLine,
    CardWrapper,
    UserName,
    UserImage,
    InfoCont,
    UserInfos,
    ContentDiv,
    RestName,
    RevText,
    ReadMoreBtn,
    ButtonGrey,
    CommentsOwner
} from "./SimpleRevCard.styled";

const SimpleRevCard = (props) => {

    return (
        <CardWrapper>
          <CardLine/>

          <UserInfos>
            <UserImage src={require("../../Assets/images/user.png")} alt='user avatar' />
            <InfoCont>
              <UserName>USERNAME</UserName>
              <Address>Adress</Address>
            </InfoCont>
          </UserInfos>

          <ContentDiv>
            {/* Need To Fetch */}
            <RestName>La Bonita</RestName>

            <RevText>
              The Food was delicious! The service was nice and the atmosphere was perfect!
            </RevText>

            <ReadMoreBtn>
              read more
            </ReadMoreBtn>

            {/* Need To Fetch --> Like 63 / Comment 23 */}
            <ButtonGrey></ButtonGrey>

            <h3>Latest comments</h3>

              {/* Need To Fetch */}
              <CommentsOwner>
                <p class="orange">Tylor the Creator</p>
                <p class="black">Your review is very nice!</p>
              </CommentsOwner>

              {/* Need To Fetch */}
              <CommentsOwner>
                <p class="orange">Kim Possible</p>
                <p class="black">I love this review</p>
              </CommentsOwner>
                
          </ContentDiv>
        </CardWrapper>

    );

};

export default SimpleRevCard;