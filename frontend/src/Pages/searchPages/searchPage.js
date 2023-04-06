// BASE IMPORTS
import { React, useEffect } from "react";
import { useState} from 'react';

// STYLED IMPORTS
import {
    EntirePageDiv,
    NavigationDiv,
    SearchPageContentDiv,
    SearchBarInput
} from './searchPage.styled';

// COMPONENTS IMPORTS
import Navbar from '../../Componets/Layout/Header/navbar';
import Footer from '../../Componets/Layout/Footer/footer';
import { NavLink, Outlet, useNavigate } from "react-router-dom";

// import { axiosWithToken } from "../../Axios/axios";


// import Reviews from "../../Componets/Reviews/Reviews"
// import CreateReview from "../../Componets/CreateReview/createReview"
// import RestaurantCard from "../../components/RestaurantCard/RestaurantCard";
// import SimpleReviewCard from "../../components/SimpleReviewCard/SimpleReviewCard";
// import SimpleUserCard from "../../components/SimpleUserCard/SimpleUserCard";

// eslint-disable-next-line react-hooks/rules-of-hooks
function SearchPage() {
  const navigate = useNavigate();

    const [searchText, setSearchText] = useState("")

    const handleSearch = (event) => {
        setSearchText(event.target.value)
    }



  return (
        <EntirePageDiv>
            <Navbar/>
            {/* <SearchBarInput onChange={(e) => setSearchField(e.target.value)}/> */}
            <SearchBarInput className="searchBarInput" onChange={handleSearch}/>
            <NavigationDiv>
                <div>
                    <NavLink className={"NavLink"} to={"/search/restaurant"}>RESTAURANTS</NavLink>
                </div>
                <div>
                    <NavLink className={"NavLink"} to={"/search/review"}>REVIEW</NavLink>
                </div>
                <div>
                    <NavLink className={"NavLink"} to={"/search/user"}>USER</NavLink>
                </div>
            </NavigationDiv>
            <Outlet context={[searchText, setSearchText]}></Outlet>
            <Footer/>
        </EntirePageDiv>
  );
}

export default SearchPage;
