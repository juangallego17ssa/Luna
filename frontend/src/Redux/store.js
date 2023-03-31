import { configureStore } from "@reduxjs/toolkit";
import currentUser from './Slices/currentUser'

export default configureStore({
  reducer: {
    currentuser: currentUser,
  },
});
