import React, { useState, useEffect } from "react";
import { UserProfileDiv, UserProfileBody } from "./userProfile.styled";

import Navbar from "../../../Componets/Layout/Header/navbar";
import Footer from "../../../Componets/Layout/Footer/footer";
import Banner from "../../../Componets/userProfile/Banner/banner";
import About from "../../../Componets/userProfile/about/about";
import Profile from "../../../Componets/userProfile/Profile/profile";

const UserProfile = () => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = "scroll");
  });

  return (
    <UserProfileDiv>
      <Navbar />
      <Banner></Banner>
      <UserProfileBody>
        <Profile />
        <About />
      </UserProfileBody>
      <Footer />
    </UserProfileDiv>
  );
};
export default UserProfile;
