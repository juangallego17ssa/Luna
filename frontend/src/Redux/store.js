import { configureStore } from "@reduxjs/toolkit";
import currentUser from './Slices/currentUser'
import signUpEmailAddress from "./Slices/signUpEmailAdress";

export default configureStore({
  reducer: {
    currentuser: currentUser,
    signupemail: signUpEmailAddress,
  },
});
