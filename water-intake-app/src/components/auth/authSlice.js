import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
   user: JSON.parse(localStorage.getItem("loggedInUser")) || null,
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      localStorage.setItem("loggedInUser", JSON.stringify(action.payload));
    },
    removeUser: (state) => {
      state.user = null;
      localStorage.removeItem("loggedInUser");
    },
  },
});

export const { setUser, removeUser } = authSlice.actions;
export default authSlice.reducer;
