import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    error: "",
    token: "",
  },
  reducers: {
    authUser: (state, action) => {
      state.token = action.payload;
    },
    unauthUser: (state) => {
      state.token = "";
    },
  },
});

export const { authUser, unauthUser } = authSlice.actions;
export default authSlice.reducer;
