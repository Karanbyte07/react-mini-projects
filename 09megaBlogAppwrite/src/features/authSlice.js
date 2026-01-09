import { createSlice } from "@reduxjs/toolkit";
//created authslice for authentication state management 

//initial state
const initialAuthState = {
    status: false, //logged in or not
    userData: null //user data object
}


const authSlice = createSlice({
    name: 'auth',
    initialState: initialAuthState, //calling initial state
    reducers:{
        //method to set login state
        login: (state, action) => {
            state.status = true; //user is logged in
            state.userData = action.payload.userData; //eska matlab user ka data mil rha hai payload sy
        },
        logout: (state) => {
            state.status = false; //user is logged out
            state.userData = null; //user data is null maltab no user data
        }
    }
});

export const {login, logout} = authSlice.actions; //actions are like methods jo hum ny reducers may banai hain unhe export kar rhy hain
export default authSlice.reducer;