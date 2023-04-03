import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Homepage from '../../Pages/home/homepage'
import LoginPage from '../../Pages/authPages/loginPage'
import RegistrationPage from '../../Pages/authPages/registrationPage'
import VerificationPage from '../../Pages/authPages/verificationPage'
import SearchPage from "../../Pages/searchPages/searchPage";
import UserProfile from "../../Pages/userPages/userProfile/userProfile";
<<<<<<< HEAD
import Restaurant from '../../Pages/restaurant/restaurant'
import RestaurantHome from '../../Pages/restaurant/restaurantHome'
import RestaurantWriteReview from '../../Pages/restaurant/writeReview'
=======
import RestaurantPage from '../../Pages/restPages/restPage'

>>>>>>> b76d3ff2bcad0a02e35356e08262b43bc8b9aca0


const Home = () => {
  return (
    <Routes>
      <Route path={"/"} element={<Homepage/>}/>
      <Route path={"/login"} element={<LoginPage />} />
      <Route path={"/registration"} element={<RegistrationPage />} />
      <Route path={"/verification"} element={<VerificationPage />} />
      <Route path={"/search"} element={<SearchPage />} />
      <Route path={"/profile"} element={<UserProfile />} />
<<<<<<< HEAD
      <Route path="/restaurant/:id" element={<Restaurant />} >
        <Route path="" element={<RestaurantHome />} />
        <Route path="write_review" element={<RestaurantWriteReview />} />
      </Route>
=======
      <Route path={"/restaurant"} element={<RestaurantPage />} />
>>>>>>> b76d3ff2bcad0a02e35356e08262b43bc8b9aca0
    </Routes>
  );
};

export default Home;
