import { React } from "react";
import { UserProfileDiv, UserProfileBody } from "./userProfile.styled";

import Navbar from "../../../Componets/Layout/Header/navbar";
import Footer from "../../../Componets/Layout/Footer/footer";
import Banner from "../../../Componets/userProfile/Banner/banner";

const UserProfile = () => {
  return (
    <UserProfileDiv>
      <Navbar />
      <Banner></Banner>
      <UserProfileBody>
        <h1>userProfile 2</h1>
      </UserProfileBody>
      <Footer />
    </UserProfileDiv>
  );
};
export default UserProfile;
