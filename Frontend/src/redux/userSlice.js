import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        user: null,
    },
    reducers: {
        setAuthUser:(state, action) => {
            state.user = action.payload;
        },
    }
})

export const { setAuthUser } = userSlice.actions;
export default userSlice.reducer;