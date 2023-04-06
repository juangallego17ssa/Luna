import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "../../Pages/home/homepage";
import LoginPage from "../../Pages/authPages/loginPage";
import RegistrationPage from "../../Pages/authPages/registrationPage";
import VerificationPage from "../../Pages/authPages/verificationPage";
import SearchPage from "../../Pages/searchPages/searchPage";
import UserProfile from "../../Pages/userPages/userProfile/userProfile";
import RestaurantHome from '../../Pages/restaurant/restaurantHome'
import RestaurantWriteReview from '../../Pages/restaurant/writeReview'
import Restaurant from '../../Pages/restaurant/restaurant'
import CreateRestaurant from '../../Pages/createRestaurant/createRestaurant'

import ProfileRestaurants from "../../Pages/userPages/userRestaurant/userRestaurant";
import ProfileCommentss from "../../Pages/userPages/userComment/userComment";
import ProfileEdit from "../../Pages/userPages/userEditProfile/userEditProfile";
import ProfileReviews from "../../Pages/userPages/userReview/userReview";
import RestPage from "../../Pages/searchPages/restPages/restPage";
import SimpleRevCard from "../SimpleReviewCard/SimpleRevCard";

const Home = () => {
  return (
    <Routes>
      <Route path={"/"} element={<Homepage />} />
      <Route path={"/login"} element={<LoginPage />} />
      <Route path={"/registration"} element={<RegistrationPage />} />
      <Route path={"/verification"} element={<VerificationPage />} />
      <Route path={"/search"} element={<SearchPage />} >
        <Route path={"restaurant"} element={<RestPage />} />
        <Route path={"review"} element={<SimpleRevCard />} />
        {/* <Route path={"users"} element={<SearchPage />} /> */}
      </Route>
      <Route path={"/profile/"} element={<UserProfile />}></Route>
      <Route path="/restaurant/:id" element={<Restaurant />}>
        <Route path="" element={<RestaurantHome />} />
        <Route path="write_review" element={<RestaurantWriteReview />} />
      </Route>
      <Route path={"/createRestaurant"} element={<CreateRestaurant />} />
    </Routes>
  );
};

export default Home;
