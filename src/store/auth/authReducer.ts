import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  
accessToken:null,
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
      state.accessToken = action.payload.accessToken;
      state.tokenType = action.payload.tokenType;
      state.expiresIn = action.payload.expiresIn;
      state.expiresAt = action.payload.expiresAt;
    
      state.isAuthenticated = true;
    },
     logout: () => initialState
    },
  },
);
export const { loginSuccess, logout } = authSlice.actions;
export default authSlice.reducer;


