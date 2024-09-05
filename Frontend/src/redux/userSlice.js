import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    tripList: null,
    wishList: null,
    propertyList: null,
    reservationList: null,
  },
  reducers: {
    setAuthUser: (state, action) => {
      state.user = action.payload;
    },
    setTripList: (state, action) => {
      state.tripList = action.payload;
    },
    setWishList: (state, action) => {
      state.wishList = action.payload;
    },
    setPropertyList: (state, action) => {
      state.propertyList = action.payload;
    },
    setReservationList: (state, action) => {
      state.reservationList = action.payload;
    },
  },
});

export const {
  setAuthUser,
  setTripList,
  setWishList,
  setPropertyList,
  setReservationList,
} = userSlice.actions;
export default userSlice.reducer;
