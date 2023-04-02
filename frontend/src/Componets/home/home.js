import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "../../Pages/home/homepage";
import LoginPage from "../../Pages/authPages/loginPage";
import SearchPage from "../../Pages/searchPages/searchPage";
import UserProfile from "../../Pages/userPages/userProfile";

const Home = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path={"/search"} element={<SearchPage />} />
      <Route path={"/profile"} element={<UserProfile />} />
    </Routes>
  );
};

export default Home;
