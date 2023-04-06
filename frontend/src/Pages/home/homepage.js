import {React, useState} from "react";

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
import { useNavigate } from "react-router-dom";



function Homepage() {
    
    const [searchText, setSearchText] = useState()
    const handleSearchChange = (event) => {
        setSearchText(event.target.value);
    }
    
    const navigate = useNavigate()
    const handleSearchClick = () => {
        navigate(`/search/restaurant/${searchText}`)
    }
    
    return (   
        <HomepageDiv>
            <Navbar/>
            <HomepageBody>
                <HomepageBannerContainerDiv>
                    <HomepageBannerSearchbarContainerDiv>
                        <HomepageBannerSearchbarInputField onChange={handleSearchChange} type="text" placeholder=" Search..."/>
                        <HomepageBannerSearchbarButton onClick={handleSearchClick}>Search</HomepageBannerSearchbarButton>
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
    )
}

export default Homepage;