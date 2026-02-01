import { createSlice } from "@reduxjs/toolkit";

const theme=createSlice({
  
  name:"theme",

  initialState:{mode:"light"},
  reducers:{
    toggle:(state)=>{
        
      state.mode=state.mode==="light"?"dark":"light";
    }
  }
});

export const {toggle}=theme.actions;
export default theme.reducer;

