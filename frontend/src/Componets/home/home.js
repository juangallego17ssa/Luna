import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Homepage from '../../Pages/home/homepage'
import LoginPage from '../../Pages/authPages/loginPage'
import RegistrationPage from '../../Pages/authPages/registrationPage'
import VerificationPage from '../../Pages/authPages/verificationPage'
import SearchPage from "../../Pages/searchPages/searchPage";
import UserProfile from "../../Pages/userPages/userProfile/userProfile";
import RestOverviewPage from "../../Pages/restPages/restOverviewPage";



const Home = () => {
  return (
    <Routes>
      <Route path={"/"} element={<Homepage/>}/>
      <Route path={"/login"} element={<LoginPage />} />
      <Route path={"/registration"} element={<RegistrationPage />} />
      <Route path={"/verification"} element={<VerificationPage />} />
      <Route path={"/search"} element={<SearchPage />} />
      <Route path={"/profile"} element={<UserProfile />} />
      <Route path={"/restaurant"} element={<RestOverviewPage />} />
    </Routes>
  );
};

export default Home;
