// BASE IMPORTS
import { React } from "react";
import Navbar from "../../Componets/Layout/Header/navbar";
import banner from '../../Assets/images/laederach_banner.png';
import Footer from "../../Componets/Layout/Footer/footer";
import {
    Banner,
    BannerAddress,
    BannerDarker,
    BannerInformation,
    BannerInformationRestCategory,
    BannerInformationRestName,
    BannerInformationRestRatingReviews,
    BannerInformationRestReview,
    BannerOverlayWrapper,
    BannerSpacer,
    BannerWrapper,
    MainContainer,
    NavBarWrapper,
    PageWrapper
} from "./restOverview.page.styled";
import StarRating from "../../Componets/StarsRating/starsRating";

const RestOverviewPage = () => {
    return(
        <PageWrapper>
            <NavBarWrapper>
                <Navbar/>
            </NavBarWrapper>
            <BannerWrapper>
                <Banner src={banner}></Banner>
                <BannerDarker></BannerDarker>
                <BannerOverlayWrapper>
                    <BannerInformation>
                        <BannerInformationRestName>
                            <h2>Läderach Chocolatier Suisse</h2>
                        </BannerInformationRestName>
                        <BannerInformationRestCategory>
                            <h3>Chocolatiers & Shops</h3>
                        </BannerInformationRestCategory>
                        <BannerInformationRestRatingReviews>
                            <StarRating/>
                            <BannerInformationRestReview> 68 reviews</BannerInformationRestReview>
                        </BannerInformationRestRatingReviews>
                    </BannerInformation>
                    <BannerAddress>Adresse</BannerAddress>
                </BannerOverlayWrapper>
                <BannerSpacer/>
            </BannerWrapper>
            <MainContainer>
                <div>Gugus</div>
            </MainContainer>
            <Footer/>
        </PageWrapper>

    )
}

export default RestOverviewPage