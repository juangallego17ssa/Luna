import { createSlice } from "@reduxjs/toolkit";

export const userProfile = createSlice({
  name: "user_profile",
  initialState: {
    user_profile: { name: "laysa" },
  },
  reducers: {
    setProfileUser: (state, action) => {
      console.log("====>>>>>>Before:::::::");
      console.log(action.payload);
      const newCurrentUser = { ...action.payload };
      state.user_profile = newCurrentUser;
      localStorage.setItem("user_profile", JSON.stringify(newCurrentUser));
      console.log("====>>>>>>HEREEEE:::::::");
      console.log(state.user_profile);
    },
  },
});

export const { setProfileUser } = userProfile.actions;
export default userProfile.reducer;
