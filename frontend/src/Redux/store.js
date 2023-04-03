import { configureStore } from "@reduxjs/toolkit";
import currentUser from './Slices/currentUser'
import signUpEmailAddress from "./Slices/signUpEmailAdress";
import currentUser from "./Slices/currentUser";
import userProfile from "./Slices/userProfile";

export default configureStore({
  reducer: {
    currentuser: currentUser,
    signupemail: signUpEmailAddress,
    userProfile: userProfile,
  },
});
