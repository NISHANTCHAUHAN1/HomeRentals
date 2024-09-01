import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        user: null,
        tripList: null,
    },
    reducers: {
        setAuthUser:(state, action) => {
            state.user = action.payload;
        },
        setTripList:(state, action) => {
            state.tripList = action.payload;
        },
    }
})

export const { setAuthUser, setTripList } = userSlice.actions;


// const initialState = {
//     user: null,
//     token: null,
//   }
  
//   export const userSlice = createSlice({
//     name: "user",
//     initialState,
//     reducers: {
//         setAuthUser: (state, action) => {
//         state.user = action.payload.user
//         state.token = action.payload.token
//       },
  
//       setTripList: (state, action) => {
//         state.user.tripList = action.payload
//       },
//     },
//   })
  
//   export const {
//     setAuthUser,
//     setTripList,
//   } = userSlice.actions


export default userSlice.reducer;