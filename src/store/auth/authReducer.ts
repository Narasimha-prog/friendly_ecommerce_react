import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token:null,
  tokenType:null,
  expiresIn:null,
  expiresAt:null,
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.token = action.payload.token;
      state.tokenType = action.payload.tokenType;
      state.expiresIn = action.payload.expiresIn;
      state.expiresAt = action.payload.expiresAt;
    
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.token = null;
      state.tokenType = null;
      state.expiresIn = null;
      state.expiresAt = null;
      state.isAuthenticated = false;
    },
  },
});

export const { loginSuccess, logout } = authSlice.actions;
export default authSlice.reducer;


