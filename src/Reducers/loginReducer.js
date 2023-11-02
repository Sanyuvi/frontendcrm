import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
  name: "loginInfo",
  initialState: {
    isAuthenticated: false,
    error: null,
  },
  reducers: {
    loginSuccess: (state) => {
      state.isAuthenticated = true;
      state.error = null; // Clear any previous errors
    },
    loginFailure: (state, action) => {
      state.isAuthenticated = false;
      state.error = action.payload;
    },
    logoutUser: (state) => {
      state.isAuthenticated = false;
      state.error = null;
      localStorage.removeItem("token");
    },
  },
});

export const { loginSuccess, loginFailure, logoutUser } = loginSlice.actions;
export default loginSlice.reducer;
