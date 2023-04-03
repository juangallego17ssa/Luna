import { createSlice } from "@reduxjs/toolkit";

export const userProfile = createSlice({
  name: "profile",
  initialState: {
    storage: {
      id: 2239,
      username: "jonas2021",
      first_name: "Jonas",
      last_name: "Meer",
      email: "jonas.meer@mail.com",
      location: "California",
      phone: "+49 122313213",
      things_i_love: ["baking", "singing"],
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",

      joined_date: "27.03.2021",
      profile_picture: "avatar.png",
    },
  },
  reducers: {
    addUsers: (state, action) => {
      console.log("====>>>>>>HEREEEE:::::::");
      console.log(action.payload);
    },
    addFriend: (state, action) => {
      const profileToAdd = action.payload;
      const index = state.storage.findIndex(
        (profile) => profile.id === profileToAdd.id
      );
      state.storage[index].logged_in_user_is_friends = true;
    },
    follow: (state, action) => {
      const profileToFollow = action.payload;
      const index = state.storage.findIndex(
        (profile) => profile.id === profileToFollow.id
      );
      state.storage[index].logged_in_user_sent_fr = true;
    },
  },
});

export const { addFriend, follow, addUsers } = userProfile.actions;
export default userProfile.reducer;
