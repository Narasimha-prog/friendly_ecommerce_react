import { createSlice } from "@reduxjs/toolkit"



const initialState={
    email:null,
    id:null,
    isAuthenticated:false,
}

         const userSlice =createSlice({
            name:"user",
            initialState,
             reducers:{
                   setUser(state,action){
                  state.email=action.payload.email;
                  state.id=action.payload.id;
                  state.isAuthenticated=false;
                   },
                   clearUser(state){
                    state.email=null;
                    state.id=null;
                    state.isAuthenticated=false;    
        }
    }
                 })


                 export const { setUser,clearUser } = userSlice.actions
                 export default userSlice.reducer