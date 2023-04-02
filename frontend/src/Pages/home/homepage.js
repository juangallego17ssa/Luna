import {React} from "react";

import {
    HomepageDiv,
    HomepageBannerContainerDiv,
    HomepageBannerSearchbarButton,
    HomepageBannerSearchbarContainerDiv,
    HomepageBannerSearchbarInputField,
    HomepageBody,
    HomepageHighligherLine,
    RestaurantCardsContainerDiv
} from "./homepage.styled";

import Navbar from "../../Componets/Layout/Header/navbar"

import Footer from "../../Componets/Layout/Footer/footer"

function Homepage() {
    
    return<HomepageDiv>
        <Navbar/>
        <HomepageBody>
            <HomepageBannerContainerDiv>
                <HomepageBannerSearchbarContainerDiv>
                    <HomepageBannerSearchbarInputField type="text" placeholder=" Search..."/>
                    <HomepageBannerSearchbarButton>Search</HomepageBannerSearchbarButton>
                </HomepageBannerSearchbarContainerDiv>
            </HomepageBannerContainerDiv>

            <h4> BEST RATED RESTAURANTS</h4>
            <HomepageHighligherLine/>

            <RestaurantCardsContainerDiv>
                {/* <RestaurantCard></RestaurantCard> */}
            </RestaurantCardsContainerDiv>
        </HomepageBody>
        <Footer/>
    </HomepageDiv>
}

export default Homepage;