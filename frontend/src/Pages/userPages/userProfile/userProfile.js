import { React } from "react";
import {
  UserProfileDiv,
  UserProfileBody,
} from "./userProfile.styled"

import Navbar from "../../../Componets/Layout/Header/navbar"
import Footer from "../../../Componets/Layout/Footer/footer";


const UserProfile = () => {
  return (
    <UserProfileDiv>
      <Navbar />
      <UserProfileBody>
        <h1>userProfile</h1>
      </UserProfileBody>
      <Footer />
    </UserProfileDiv>
  );
};
export default UserProfile;
