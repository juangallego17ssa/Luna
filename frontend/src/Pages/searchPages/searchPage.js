// BASE IMPORTS
import { React } from "react";
import {useEffect, useState} from 'react';

// STYLED IMPORTS
import {
    EntirePageDiv,
    SubNavigationDiv,
    NavigationDiv,
    SearchPageContentDiv,
    SearchBarInput
} from './searchPage.styled';

// COMPONENTS IMPORTS
import Navbar from "../../Componets/Layout/Header/navbar";
import Footer from "../../Componets/Layout/Footer/footer";
import { Outlet, useNavigate } from "react-router-dom";


// import Reviews from "../../Componets/Reviews/Reviews"
// import CreateReview from "../../Componets/CreateReview/createReview"
// import RestaurantCard from "../../components/RestaurantCard/RestaurantCard";
// import SimpleReviewCard from "../../components/SimpleReviewCard/SimpleReviewCard";
// import SimpleUserCard from "../../components/SimpleUserCard/SimpleUserCard";

// eslint-disable-next-line react-hooks/rules-of-hooks
function SearchPage() {
  const navigate = useNavigate();

  const handleRestaurant = () => {
    navigate('/search/restaurant/')
  }
  const handleReview = () => {
    navigate("/search/review/");
  }
  const handleUser = () => {
    navigate("/search/user/");
  }

  return (
    <EntirePageDiv>
      <Navbar />
      <SearchBarInput />
      <NavigationDiv>
        <SubNavigationDiv>
          <h3 onClick={handleRestaurant}>RESTAURANTS</h3>
        </SubNavigationDiv>
        <SubNavigationDiv>
          <h3 onClick={handleReview}>REVIEWS</h3>
        </SubNavigationDiv>
        <SubNavigationDiv>
          <h3 onClick={handleUser}>USERS</h3>
        </SubNavigationDiv>
      </NavigationDiv>
      <Outlet></Outlet>
      <Footer />
    </EntirePageDiv>
  );
}

export default SearchPage;
