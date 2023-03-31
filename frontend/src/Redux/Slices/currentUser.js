import { createSlice } from "@reduxjs/toolkit";

export const currentUser = createSlice({
  name: "current-user",
  initialState: {
    currentuser: {},
  },
  reducers: {
    setCurrentUser: (state, action) => {
      const newCurrentUser = { ...action.payload };
      state.currentuser = newCurrentUser;
      localStorage.setItem("user", JSON.stringify(newCurrentUser));
    },
  },
});
export const { setCurrentUser } = currentUser.actions;
export default currentUser.reducer;
